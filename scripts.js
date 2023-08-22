// Exemple de données pour les réseaux sociaux
const reseauxData = [
    { plateforme: "Twitter", lien: "https://twitter.com/moncompte" },
    { plateforme: "Instagram", lien: "https://www.instagram.com/moncompte/" },
    // Ajoute d'autres réseaux sociaux ici
];

// Exemple de données pour les programmes de la semaine
const programmesData = [
    { jour: "Lundi", programme: "Diffusion de jeu X à 19h" },
    { jour: "Mardi", programme: "Discussion avec les abonnés à 20h" },
    // Ajoute d'autres programmes ici
];

// Exemple de données pour les jours spéciaux
const joursSpeciauxData = [
    { date: "2023-08-25", evenement: "Anniversaire de la chaîne!" },
    { date: "2023-09-05", evenement: "Spécial Halloween à prévoir" },
    // Ajoute d'autres jours spéciaux ici
];

// Fonction pour afficher les réseaux sociaux
function afficherReseaux() {
    const reseauxContainer = document.querySelector(".reseaux-container");
    reseauxData.forEach(reseau => {
        const reseauElement = document.createElement("a");
        reseauElement.href = reseau.lien;
        reseauElement.textContent = reseau.plateforme;
        reseauxContainer.appendChild(reseauElement);
    });
}

// Fonction pour afficher les programmes de la semaine
function afficherProgrammes() {
    const programmesContainer = document.querySelector(".programmes-container");
    programmesData.forEach(programme => {
        const programmeElement = document.createElement("p");
        programmeElement.textContent = `${programme.jour}: ${programme.programme}`;
        programmesContainer.appendChild(programmeElement);
    });
}

// Fonction pour afficher les jours spéciaux
function afficherJoursSpeciaux() {
    const joursSpeciauxContainer = document.querySelector(".jours-speciaux-container");
    joursSpeciauxData.forEach(jourSpecial => {
        const jourSpecialElement = document.createElement("p");
        jourSpecialElement.textContent = `${jourSpecial.date}: ${jourSpecial.evenement}`;
        joursSpeciauxContainer.appendChild(jourSpecialElement);
    });
}

// Appel des fonctions pour afficher les données
afficherReseaux();
afficherProgrammes();
afficherJoursSpeciaux();
