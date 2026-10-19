# Lina chez Lidl

Mon site de candidature personnelle pour un poste d'employee polyvalente / caisse chez Lidl.

Le site presente mon profil, mes experiences chez ALDI, Sucreation et Primark, mes competences terrain, mes disponibilites, mes motivations et mes coordonnees.

Il s'agit d'un site personnel, independant et non officiel. Il ne represente pas Lidl.

## Lancer le projet

Prerequis : Node.js 20.19 ou plus recent et npm 10 ou plus recent.

```sh
npm ci
npm run dev
```

Le site de developpement est disponible sur `http://localhost:3000` et l'API Express sur le port 3001.

## Verifier et construire

```sh
npm test
npm run build
npm audit
```

Pour lancer la version construite :

```sh
npm start
```

Express sert alors le dossier `client/dist` sur le port defini par `PORT` ou, par defaut, sur 3001.

## Organisation

- `client/src/components/` : header, recherche, navigation et modales.
- `client/src/sections/` : sections visibles du site.
- `client/src/data/` : contenu du profil, des experiences et de la navigation.
- `client/src/styles/` : styles CSS classiques et responsive.
- `client/public/documents/CV_Lidl.pdf` : CV telechargeable.
- `server/` : serveur Express et endpoint `/api/health`.
- `.qa/` : verifications navigateur locales.

## Contact

Les coordonnees affichees sur le site sont celles utilisees pour ma candidature. Le CV est accessible depuis la section « Mon CV & contact ».
