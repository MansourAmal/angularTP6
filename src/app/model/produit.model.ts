import { Categorie } from "./categories-model";

export class Produit {
    idProduit! : number;
    nomProduit! : string;
    prixProduit! : number;
     dateCreation! : Date ;
     categorie!:Categorie;
    }

        