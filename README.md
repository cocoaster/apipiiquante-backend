# Accès à la base de données de Mongodb :
Si vous lancez le projet depuiis github, pour des raisons de sécurité, vous avez en pièces jointes du projet la variable d'environnement de connection à la base de données MongoDB et le dossier images.
Une fois recopiés dans le répertoire backend, ajouter le dossier  backend à un nouveau répertoire avec le frontend. Lancer npm install pour installer les dépendances du projet, depuis le backend et lancer npm start pour lancer le backend après avoir lancer le frontend en suivant les instructions du readme du frontend.
J'ai inclus dans le projet la bibliothèque node de password-validator mais je ne l'ai pas activée dans la route, router.post("/signup", usersControllers.signup),  car le frontend n'était pas configuré pour avertir l'utilisateur des exigences de sécurité pour son mot de passe (ici, au minimum 1 lettre majucule, une lettre minuscule, un chiffre, 8 carractères et maximum 48) 
Lancer le backend :
cd backend depuis le répertoire du projet
npm start
