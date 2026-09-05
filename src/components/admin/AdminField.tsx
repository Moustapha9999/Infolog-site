import { adminControlClass } from "@/components/admin/admin-styles";

export function AdminField({
  label,
  name,
  type = "text",
  defaultValue,
  required,
  textarea,
  rows = 4,
  hint,
}: {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string | number | null;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-plan">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={rows}
          defaultValue={defaultValue ?? ""}
          className={adminControlClass}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          defaultValue={defaultValue ?? ""}
          className={adminControlClass}
        />
      )}
      {hint ? <p className="mt-1 text-xs text-mute">{hint}</p> : null}
    </label>
  );
}

export function AdminSelect({
  label,
  name,
  defaultValue,
  children,
}: {
  label: string;
  name: string;
  defaultValue?: string | number | null;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-plan">
        {label}
      </span>
      <select
        name={name}
        defaultValue={defaultValue ?? ""}
        className={adminControlClass}
      >
        {children}
      </select>
    </label>
  );
}

export function AdminCheck({
  label,
  name,
  defaultChecked,
}: {
  label: string;
  name: string;
  defaultChecked?: boolean;
}) {
  return (
    <label className="flex items-center gap-2 text-sm">
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultChecked}
        className="h-4 w-4 accent-plan"
      />
      {label}
    </label>
  );
}

export function AdminSubmit({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="submit"
      className="bg-copper px-5 py-2.5 text-sm font-medium uppercase tracking-[0.14em] text-paper hover:bg-[#a34f27]"
    >
      {children}
    </button>
  );
}
