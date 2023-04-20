import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/products-model';
import { ProductService } from 'src/app/services/products-service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {

  public products: ProductModel[];
  constructor(public productService: ProductService){}
  public async ngOnInit() {
    try {
      this.products = await this.productService.getAllProducts();
    } catch(err: any){
      console.log(err.message);
    }
  }

}
