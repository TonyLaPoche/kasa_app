# Kasa_App

Bienvenue sur **Kasa_App**, une application web de location immobilière développée en **React** avec **TypeScript**. Ce projet fait partie du parcours "Développeur Web" d'OpenClassrooms. Le projet est disponible en ligne sur GitHub Pages : [https://tonylapoche.github.io/kasa_app/](https://tonylapoche.github.io/kasa_app/).

## Table des matières

- [Kasa\_App](#kasa_app)
  - [Table des matières](#table-des-matières)
  - [Aperçu](#aperçu)
  - [Fonctionnalités](#fonctionnalités)
  - [Technologies utilisées](#technologies-utilisées)
  - [Installation](#installation)
  - [Hébergement et Routage](#hébergement-et-routage)
    - [Subtilité du routage selon les branches](#subtilité-du-routage-selon-les-branches)
  - [Contribuer](#contribuer)
  - [Licence](#licence)

## Aperçu

**Kasa_App** est une application web conçue pour la location de logements. Elle permet aux utilisateurs de consulter une liste de logements, d'accéder aux détails de chaque propriété, et de naviguer entre différentes pages à l'aide de routes dynamiques.

Accédez à la version en ligne de l'application : [Kasa_App sur GitHub Pages](https://tonylapoche.github.io/kasa_app/).

## Fonctionnalités

- Affichage d'une liste de logements.
- Consultation des détails de chaque propriété (description, photos, équipements, etc.).
- Navigation entre différentes pages de l'application via un routeur.
- Gestion des erreurs 404 en cas de route incorrecte.

## Technologies utilisées

- **React** avec **TypeScript** pour la création de composants dynamiques.
- **Vite** pour une configuration de projet rapide et optimisée.
- **React Router** pour la gestion des routes.
- **GitHub Pages** pour l'hébergement de la version en production.

## Installation

Pour installer et exécuter ce projet en local, suivez les étapes ci-dessous :

1. Clonez ce dépôt sur votre machine :

   ```bash
   git clone https://github.com/tonylapoche/kasa_app.git
   ```

2. Accédez au dossier du projet :

   ```bash
   cd kasa_app
   ```

3. Installez les dépendances :

   ```bash
   npm install
   ```

4. Lancez l'application en mode développement :

   ```bash
   npm run dev
   ```

5. Accédez à l'application en ouvrant votre navigateur à l'adresse : `http://localhost:3000`.

## Hébergement et Routage

### Subtilité du routage selon les branches

L'application **Kasa_App** est hébergée sur **GitHub Pages** à l'adresse suivante : [https://tonylapoche.github.io/kasa_app/](https://tonylapoche.github.io/kasa_app/).

Cependant, une subtilité est à prendre en compte concernant le routage :

- **Branche `github-pages`** : La version hébergée utilise **createHashRouter**. Cette approche est nécessaire car GitHub Pages ne gère pas correctement les routes côté client.
- **Branche `main`** : En local ou dans un environnement où le serveur peut gérer les routes, nous utilisons **createBrowserRouter**, qui offre une gestion plus fluide des URL et des routes.

Cette différence de routage est simplement due aux limitations techniques de GitHub Pages.

## Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez apporter des améliorations ou corriger des bugs, merci de suivre les étapes suivantes :

1. **Fork** le projet.
2. Créez une **branche** pour vos modifications : `git checkout -b feature/nom-de-la-fonctionnalité`.
3. **Commitez** vos modifications : `git commit -m 'Ajout d'une nouvelle fonctionnalité'`.
4. **Poussez** vers la branche : `git push origin feature/nom-de-la-fonctionnalité`.
5. Ouvrez une **pull request** pour examen.

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

Retrouver également mes autres projets sur mon [portfolio](https://antoineterrade.com)

---