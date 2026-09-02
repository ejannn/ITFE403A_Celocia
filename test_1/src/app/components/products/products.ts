import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {
  
  products: {name: string, description: string, price: number, sales: string}[] = [

      {name: 'ILU New Style Milan Korean One Strap...', description: 'Sulit Deal', price: 1, sales: "10K+ sold"},
      {name: 'Classic high Cut Canvas Shoes for Women and Me..', description: 'Sulit Dead-l', price: 19.99, sales: "200"},
      {name: 'Product 3', description: 'Description of Product 3', price: 5.99, sales: "50"},
      {name: 'Product 4', description: 'Description of Product 4', price: 15.99, sales: "150"},
      {name: 'Product 5', description: 'Description of Product 5', price: 25.99, sales: "300"}


  ]

  constructor() {
     

    }
}
  

