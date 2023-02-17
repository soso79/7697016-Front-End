// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

for (let i = 0; i < pieces.length; i++){


// Création d éléments avec document.createElement
const article = pieces[i];
const imageElement = document.createElement("img");
imageElement.src = article.image;
const pieceElement = document.createElement("article")
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
//Création des élements pour l'exercice
const descriptionElement = document.createElement("p");
descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
const stockElement = document.createElement("p");
stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";



//Rattachement au fichier parent Fiches
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(pieceElement);
pieceElement.appendChild(nomElement);
pieceElement.appendChild(prixElement);
pieceElement.appendChild(categorieElement);
pieceElement.appendChild(descriptionElement);
pieceElement.appendChild(stockElement);
pieceElement.appendChild(imageElement);

}
//creation bouton trier pour ordonner les pieces de façon croissante
const boutonTrier = document.querySelector(".btn-trier");

boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
    });
    console.log(piecesOrdonnees);
});

//creation du bouton filtre avec les pieces inferieur a 35 euros
const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click",function() {

    const piecesFiltrees = pieces.filter(function (pieces){
        return pieces.prix <= 35;

    });
    console.log(piecesFiltrees)

});