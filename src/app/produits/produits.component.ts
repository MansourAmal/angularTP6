import { Component ,OnInit} from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../service/produit.service';



@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits : Produit[]; //un tableau de Produi
  constructor(private produitService: ProduitService ) {
    this.produits = produitService.listeProduits();
    }
    
  
  ngOnInit(): void {

  }
    
}
