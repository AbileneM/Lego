import 'dotenv/config';

// Importer les fichiers et librairies
import express, { json } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';

// Création du serveur
const app = express();

// Ajout de middlewares
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(json());

// Ajouter les routes ici ...

// Affiche tous les échanges...

// Affiche les échanges de l'utilisateur ID 1 avec option de suppression...

// Formulaire pour créer un échange..

// Voir un échange spécifique...

// Renvoyer une erreur 404 pour les routes non définies
app.use(function (request, response) {
    // Renvoyer simplement une chaîne de caractère indiquant que la page n'existe pas
    response.status(404).send(request.originalUrl + ' not found.');
});

// Démarrage du serveur
app.listen(process.env.PORT);
console.info(`Serveurs démarré:`);
console.info(`https://localhost:${ process.env.PORT }`);