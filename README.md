README – Portfolio Next.js

1) Pré‑requis

Node.js (version LTS recommandée)

Git installé sur la machine

Compte GitHub et compte Vercel

2) Installation locale

Cloner le dépôt

git clone <URL_DU_REPO>
cd <NOM_DU_DOSSIER>

Installer les dépendances

npm install
# ou
yarn
# ou
pnpm install

Lancer le serveur de développement

npm run dev
# ou: pnpm dev / yarn dev / bun dev

Ouvrez votre navigateur sur : http://localhost:3000

3) Gestion des images et de la musique

Placez vos images dans public/ (exemple : public/images/…).

Placez la musique de fond dans public/ (exemple : public/audio/musique.mp3).

Utilisez des chemins absolus dans le code :

<img src="/images/hero.jpg" alt="Hero" />
<audio src="/audio/musique.mp3" autoPlay loop />

Astuce : les navigateurs peuvent bloquer l’autoplay sans interaction, prévoyez un bouton Play.

4) Scripts utiles

npm run dev → démarre le serveur en développement

npm run build → génère la version production

npm start → lance le serveur en production (après build)

npm run lint → vérifie la qualité du code

5) Déploiement sur Vercel

Option A — via GitHub (recommandé) :

Envoyez votre code sur GitHub.

Sur Vercel, créez un New Project et importez le dépôt.

Vercel détectera automatiquement Next.js.

Cliquez sur Deploy.

Option B — via Vercel CLI :

npm i -g vercel
vercel login
vercel

Chaque push sur la branche principale déclenche un déploiement automatique.

6) Structure du projet

root
├─ app/                # Pages et routes
├─ public/             # Images, audio, favicon, etc.
│  ├─ images/
│  └─ audio/
├─ styles/
├─ components/
├─ package.json
└─ README.md

7) Dépannage

Version Node incompatible → utiliser la version LTS

Assets non trouvés → vérifier les chemins /images/... ou /audio/...

Autoplay bloqué → prévoir une interaction utilisateur
