import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../service/produit.service';
import { Categorie } from '../model/categories-model';
import { ActivatedRoute ,Router} from '@angular/router';
@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent {
  newProduit = new Produit();
  message: string="";
  categories! : Categorie[];
  newIdCat! : number;
  newCategorie! : Categorie;
  constructor(private produitService: ProduitService,
    private activatedRoute: ActivatedRoute,
    private router :Router) { }
  ngOnInit() {
    this.categories = this.produitService.listeCategories();
  }  
  addProduit() {
    this.newCategorie = 
    this.produitService.consulterCategorie(this.newIdCat);
    this.newProduit.categorie = this.newCategorie;
    console.log(this.newIdCat);
    console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit);
    this.message = "Produit " + this.newProduit.nomProduit + " ajouté avec succès";
    this.router.navigate(['produits']);
  }
}

    


