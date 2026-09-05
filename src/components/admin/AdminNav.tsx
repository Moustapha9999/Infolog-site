"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Clapperboard,
  FolderTree,
  ImageIcon,
  LayoutDashboard,
  Mail,
  Package,
  PanelsTopLeft,
  RectangleHorizontal,
  Tag,
  Users,
  Wrench,
} from "lucide-react";
import { adminLinks } from "@/components/admin/admin-nav-data";
import { useAdminUi } from "@/components/admin/AdminTheme";
import { cn } from "@/lib/utils";

const navIcons = {
  "/admin": LayoutDashboard,
  "/admin/products": Package,
  "/admin/brands": Tag,
  "/admin/categories": FolderTree,
  "/admin/media": ImageIcon,
  "/admin/videos": Clapperboard,
  "/admin/banners": RectangleHorizontal,
  "/admin/services": Wrench,
  "/admin/pages": PanelsTopLeft,
  "/admin/messages": Mail,
} as const;

function isActive(href: string, pathname: string) {
  if (href === "/admin") return pathname === "/admin";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavItems({
  pathname,
  unread,
  showUsers,
  collapsed,
  onNavigate,
}: {
  pathname: string;
  unread: number;
  showUsers: boolean;
  collapsed: boolean;
  onNavigate?: () => void;
}) {
  const items = [
    ...adminLinks.map((link) => ({ ...link, icon: navIcons[link.href] })),
    ...(showUsers
      ? [{ href: "/admin/users", label: "Utilisateurs", icon: Users }]
      : []),
  ];

  return (
    <nav className="flex flex-col gap-0.5" aria-label="Navigation back-office">
      {items.map((link) => {
        const active = isActive(link.href, pathname);
        const Icon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            title={link.label}
            className={cn(
              "flex items-center gap-3 border-l-2 px-3 py-2.5 text-sm",
              collapsed && "justify-center px-2",
              active
                ? "border-copper bg-white/8 text-[var(--admin-sidebar-fg)]"
                : "border-transparent text-[var(--admin-sidebar-fg)]/65 hover:border-white/25 hover:bg-white/5 hover:text-[var(--admin-sidebar-fg)]",
            )}
          >
            <Icon strokeWidth={1.4} className="h-4 w-4 shrink-0" />
            {collapsed ? null : (
              <>
                <span className="flex-1">{link.label}</span>
                {link.href === "/admin/messages" && unread > 0 ? (
                  <span className="bg-copper px-1.5 py-0.5 font-mono text-[10px] text-paper">
                    {unread}
                  </span>
                ) : null}
              </>
            )}
          </Link>
        );
      })}
    </nav>
  );
}

export function AdminNav({
  unread,
  showUsers,
}: {
  unread: number;
  showUsers: boolean;
}) {
  const pathname = usePathname();
  const { collapsed } = useAdminUi();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="hidden lg:block">
        <NavItems
          pathname={pathname}
          unread={unread}
          showUsers={showUsers}
          collapsed={collapsed}
        />
      </div>
      <div className="lg:hidden">
        <button
          type="button"
          className="border border-white/20 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--admin-sidebar-fg)]"
          aria-expanded={open}
          aria-controls="admin-mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Fermer" : "Menu"}
        </button>
        {open ? (
          <div id="admin-mobile-nav" className="admin-sidebar fixed inset-0 z-50 p-5">
            <div className="mb-6 flex items-center justify-between">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--admin-sidebar-fg)]/50">
                Navigation
              </p>
              <button
                type="button"
                className="border border-white/20 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em]"
                onClick={() => setOpen(false)}
              >
                Fermer
              </button>
            </div>
            <NavItems
              pathname={pathname}
              unread={unread}
              showUsers={showUsers}
              collapsed={false}
              onNavigate={() => setOpen(false)}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}
