import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/products-model';
import { appConfig } from 'src/app/utils/app-config';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{
  @Input()
  public product: ProductModel;

  ngOnInit(): void {
    this.product.imageName = appConfig.productsURL + 'images/' + this.product.imageName;
  }
}
