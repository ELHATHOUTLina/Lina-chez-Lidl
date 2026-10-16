# Lina chez Lidl

Candidature personnelle de Lina EL HATHOUT, inspirée de l’univers Lidl. Site non officiel.

Cette première étape comprend les fondations du projet et le header. Les autres sections sont volontairement vides : aucune expérience ni coordonnée n’a été inventée. Aucun déploiement n’a été effectué.

## Démarrage local

Prérequis : Node.js 20.19 ou supérieur et npm 10 ou supérieur.

Depuis la racine du projet :

```sh
npm install
npm run dev
```

Ouvrir **http://localhost:3000**. Webpack sert React avec rechargement à chaud ; Express écoute sur le port 3001. `/api/health` est accessible via le proxy du frontend. `Ctrl+C` arrête les deux processus. Le port d’Express en développement peut être changé avec `API_PORT` ; adapter alors la cible du proxy dans Webpack.

## Production et futur déploiement

```sh
npm ci
npm run build
npm start
```

Express sert alors le build React sur **http://localhost:3001**, avec repli vers `index.html` pour les routes sans extension. Les ressources absentes renvoient 404. Le serveur utilise `process.env.PORT`, ou 3001 par défaut. Pour tester un autre port dans PowerShell :

```powershell
$env:PORT = '8080'
npm start
```

Pour un futur hébergement Node, utiliser `npm ci && npm run build` comme commande de construction et `npm start` comme commande de démarrage. L’hébergeur doit fournir Node.js et le port via `PORT`. Aucune base de données, aucun secret et aucun service externe ne sont nécessaires. Ne pas déployer avant la finalisation du contenu et la vérification des informations publiques.

## Organisation

- `client/src/components/` : header, recherche, navigation, fenêtres accessibles.
- `client/src/sections/` : composants vides des futures parties.
- `client/src/data/profile.js` : informations fournies, chemins du logo et du CV.
- `client/src/data/navigation.mjs` : identifiants, libellés et mots-clés de recherche.
- `client/src/styles/` : variables globales et CSS responsive du header.
- `client/public/assets/logo/` : logo personnalisé fourni, conservé sans modification. Le CSS cadre le logo carré en masquant les marges noires de l’image source.
- `client/public/assets/canva/` : futur emplacement des affiches.
- `client/public/assets/images/` : futures images.
- `client/public/documents/cv_vente.pdf` : CV original fourni, prêt pour sa section dédiée. Les expériences seront extraites à cette étape.
- `server/` : Express, fichiers statiques et vérification de santé.
- `scripts/dev.js` : lancement conjoint du frontend et du backend, compatible Windows.

Les dépendances sont gérées par les workspaces npm et un unique `package-lock.json` à la racine.

## Interactions du header

- Le logo et « Haut de page » ramènent au début de la page.
- L’icône Profil et le bouton jaune ciblent `#a-propos`.
- Le panier ouvre une fenêtre d’attente ; le ticket détaillé sera réalisé à son étape dédiée.
- Le menu ouvre une navigation latérale avec maintien du focus, fermeture par Échap et retour au bouton d’origine.
- La recherche ignore les accents et la casse. Les résultats se filtrent pendant la saisie ; Entrée sélectionne le premier. Les flèches parcourent les résultats, Échap les ferme. Un message spécifique couvre les recherches sans résultat.
- Une section vide est marquée « À venir ». Un clic affiche une information, sans prétendre montrer du contenu inexistant.
- Les préférences de réduction des animations sont respectées.

## Ajouter les prochaines sections

Conserver les identifiants prévus : `candidature`, `categories`, `experiences`, `disponibilite`, `a-propos`, `competences`, `ticket-candidature`, `contact`.

Remplacer `SectionPlaceholder` dans le composant concerné par une vraie section :

```jsx
<section id="competences" tabIndex={-1} data-section-ready="true" aria-labelledby="skills-title">
  <h2 id="skills-title">Mes compétences terrain</h2>
  {/* Contenu vérifié de la section */}
</section>
```

La recherche et les liens défileront alors jusqu’à cette section et lui donneront le focus. Les mots-clés et les liens se modifient dans `navigation.mjs`. La future grille de six cartes utilisera `promotionalCards` dans `profile.js` ; sa structure et ses visuels restent à développer.

## Vérifications

```sh
npm test
npm run build
```

Les tests vérifient les principaux mots-clés, les accents, les requêtes vides et les réponses de santé/erreur d’Express. Vérifier aussi dans le navigateur les différentes largeurs, le menu, le panier et le clavier après toute modification de ces interactions.
