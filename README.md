# Accès à la base de données de Mongodb :
Pour des raisons, vous avez en pièce jointe du projet la variable d'environnement de connection à la base de données MongoDB.
J'ai inclus dans le projet la bibliothèque node de password-validator mais je ne l'ai pas activée dans la route, router.post("/signup", usersControllers.signup),  car le frontend n'était pas configuré pour avertir l'utilisateur des exigences de sécurité pour son mot de passe (ici, au minimum 1 lettre majucule, une lettre minuscule, un chiffre, 8 carractères et maximum 48) 

