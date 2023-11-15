import { Component ,OnInit} from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../service/produit.service';



@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  
})
export class ProduitsComponent implements OnInit {
  produits : Produit[]=[]; //un tableau de Produi
  constructor(private produitService: ProduitService ) {
   //this.produits = produitService.listeProduits();
  }
  supprimerProduit(p: Produit)
  {
    let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
        console.log("produit supprimé");
        this.chargerProduits();
      });
} 
  ngOnInit(): void {
    this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
      });
    this.chargerProduits();
  
  }
  chargerProduits(){
    this.produitService.listeProduit().subscribe(prods => {
    console.log(prods);
    this.produits = prods;
    }); 
    }
    
    
}
