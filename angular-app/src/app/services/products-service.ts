import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { ProductModel } from "../models/products-model";
import { appConfig } from "../utils/app-config";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {

  public constructor(private http: HttpClient){}

  public async getAllProducts(): Promise<ProductModel[]>{
    const observable = this.http.get<ProductModel[]>(appConfig.productsURL);
    const products = await firstValueFrom(observable);
    return products;
  }

}
