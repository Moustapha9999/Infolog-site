# Dossier Électroménager

Même logique que `telephonie/` : tu déposes les médias ici, on branche la page ensuite.

```
public/brand/electromenager/
  catalog/
    hero.jpg|png|webp     → bandeau / fond hero
    hero-poster.jpg       → poster si hero vidéo
    videos/
      hero.mp4            → vidéo d’accueil (optionnel)
  videos/                 → vidéos génériques / promos
  products/
    {slug}/               → une fiche produit (ex. refrigerateur-bespoke)
      hero.*
      cover.*
      gallery-1.*
      video-1.*
      description.md
      info.json
```

## Comment nommer les produits

Slug en minuscules, sans accents, tirets :

- `refrigerateur-bespoke`
- `lave-linge-ecobubble`
- `climatiseur-windfree`
- `four-dual-cook`

## Catégories utiles (info.json)

Tu peux indiquer dans `info.json` une `category` parmi :

- `refrigeration`
- `lavage`
- `cuisine`
- `climatisation`
- `tv-audio`
- `autre`

## Prochaine étape

1. Dépose tes images / vidéos dans ces dossiers.
2. Dis-moi l’ordre souhaité (hero, catégories, fiches produits).
3. On crée la page `/electromenager` comme `/telephonie`.
