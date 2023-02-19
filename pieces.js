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

    const piecesFiltrees = pieces.filter(function (piece){
        return piece.prix <= 35;

    });
    console.log(piecesFiltrees)

});
//bouton pour classer en ordre decroissant
const boutonDecroissant = document.querySelector(".btn-decroissant");

boutonDecroissant.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return b.prix - a.prix;
    });
    console.log(piecesOrdonnees);
});
// bouton no description
const boutonNodescription = document.querySelector(".btn-nodescription");

boutonNodescription.addEventListener("click", function () {

    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.description;

    });
    
    console.log(piecesFiltrees)
});

const noms = pieces.map(piece => piece.nom);
for(let i = pieces.length -1 ; i>=0; i--){
    if(pieces[i].prix > 35){
        noms.splice(i,1);
    }
}
//creation liste
const abordablesElements = document.createElement('ul');
//ajout de chaque nom a la liste
for(let i=0; i < noms.lenght ; i++){
    const nomElement = document.createElement('li');
    nomElement.innerText = noms[i];
    abordablesElements.appendChild(nomElement)
}
//ajout de l en-téte puis de la liste au bloc résultats

document.querySelector('.abordables')
    .appendChild(abordablesElements)
