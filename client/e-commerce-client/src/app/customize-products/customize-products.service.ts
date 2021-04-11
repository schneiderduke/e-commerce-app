import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../product/product.model";

@Injectable({
    providedIn: "root"
})
export class CustomizeProductsService {
    constructor(private http: HttpClient){}

    postProduct(product: any) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
        };
        return this.http.post<any>('http://localhost:3000/products', product, httpOptions)      
    }

    deleteProduct(id: string) {
        return this.http.delete<any>('http://localhost:3000/products/' + id)
    }

    getProducts() {
        return this.http.get('http://localhost:3000/products');
    }
}