import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {
  
  product1: string = 'Product 1';
  product1Description: string = 'This is a description of the product.';
  product1Price: number = 19.99;
  product1Sales: number = 100;

  product2: string = 'Product 2';
  product2Description: string = 'This is a description of Product 2.';
  product2Price: number = 29.99;
  product2Sales: number = 50;

  product3: string = 'Product 3';
  product3Description: string = 'This is a description of Product 3.';
  product3Price: number = 9.99;
  product3Sales: number = 200;

  product4: string = 'Product 4';
  product4Description: string = 'This is a description of Product 4.';
  product4Price: number = 39.99;
  product4Sales: number = 75;

  product5: string = 'Product 5';
  product5Description: string = 'This is a description of Product 5.';
  product5Price: number = 14.99;
  product5Sales: number = 150;

}
