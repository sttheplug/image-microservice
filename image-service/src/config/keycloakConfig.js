const session = require('express-session'); // Lägg till detta
const Keycloak = require('keycloak-connect'); // Importera Keycloak



// Keycloak-konfiguration
const session = require("express-session");
const Keycloak = require("keycloak-connect");
const memoryStore = new session.MemoryStore();
const keycloakConfig = {
    clientId: 'image-microservice-client', // Ändra till din Keycloak-klient för image-service
    bearerOnly: true,
    serverUrl: 'http://localhost:8080',
    realm: 'journalsystem-realm',
    credentials: {
        secret: 'qGmbrSak2ZK4JprPq4RRnAUBq3L3iQbH', // Ersätt med din klienthemlighet från Keycloak
    },
};

const keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);

module.exports = keycloak;
