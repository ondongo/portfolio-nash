# README – Portfolio Next.js

## 1) Pré‑requis

* **Node.js** (version LTS recommandée)
* **Git** installé sur la machine
* **Compte GitHub** et **compte Vercel**

---

## 2) Installation locale

1. **Cloner le dépôt**

   ```bash
   git clone <URL_DU_REPO>
   cd <NOM_DU_DOSSIER>
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   # ou
   yarn
   # ou
   pnpm install
   ```

3. **Lancer le serveur de développement**

   ```bash
   npm run dev
   # ou: pnpm dev / yarn dev / bun dev
   ```

   Ouvrez votre navigateur sur : [http://localhost:3000](http://localhost:3000)

---

## 3) Gestion des images et de la musique

* Placez vos **images** dans `public/` (exemple : `public/images/…`).
* Placez la **musique de fond** dans `public/` (exemple : `public/audio/musique.mp3`).
* Utilisez des chemins absolus dans le code :

  ```tsx
  <img src="/images/hero.jpg" alt="Hero" />
  <audio src="/audio/musique.mp3" autoPlay loop />
  ```

> Astuce : les navigateurs peuvent bloquer l’**autoplay** sans interaction, prévoyez un bouton *Play*.

---

## 4) Scripts utiles

* `npm run dev` → démarre le serveur en développement
* `npm run build` → génère la version production
* `npm start` → lance le serveur en production (après build)
* `npm run lint` → vérifie la qualité du code

---

## 5) Déploiement sur Vercel

**Option A — via GitHub** (recommandé) :

1. Envoyez votre code sur GitHub.
2. Sur Vercel, créez un *New Project* et importez le dépôt.
3. Vercel détectera automatiquement Next.js.
4. Cliquez sur **Deploy**.

**Option B — via Vercel CLI** :

```bash
npm i -g vercel
vercel login
vercel
```

Chaque push sur la branche principale déclenche un déploiement automatique.

---

## 6) Structure du projet

```
root
├─ app/                # Pages et routes
├─ public/             # Images, audio, favicon, etc.
│  ├─ images/
│  └─ audio/
├─ styles/
├─ components/
├─ package.json
└─ README.md
```

---

## 7) Guide pour compléter des pages et composants

* **Ajouter une page** : créer un fichier dans `app/` avec le nom de la route, par exemple `app/contact/page.tsx`.
* **Modifier une page existante** : ouvrir le fichier correspondant dans `app/` et mettre à jour le contenu JSX.
* **Ajouter un composant** : créer un fichier dans `components/` (ex : `components/Bouton.tsx`) et l’importer dans la page où il sera utilisé.
* **Importer des images ou audio** : placer les fichiers dans `public/` et les référencer avec `/images/...` ou `/audio/...`.
* **Styles** : ajouter ou modifier les fichiers dans `styles/` ou utiliser des classes Tailwind/Chakra selon la configuration du projet.

---

## 8) Dépannage

* **Version Node incompatible** → utiliser la version LTS
* **Assets non trouvés** → vérifier les chemins `/images/...` ou `/audio/...`
* **Autoplay bloqué** → prévoir une interaction utilisateur
