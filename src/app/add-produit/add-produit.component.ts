import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent {
  newProduit = new Produit();
  message: string="";

  constructor(private produitService: ProduitService) { }

  addProduit() {
    console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit);
    this.message = "Produit " + this.newProduit.nomProduit + " ajouté avec succès";
  }
}

    


