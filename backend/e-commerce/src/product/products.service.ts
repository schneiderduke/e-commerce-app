import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    public products: Product[] = [];

    insertProduct(title: string, description: string, price: number) {
        const prodId = Date.now().toString();
        const newProduct = new Product(prodId,title, description, price);
        this.products.push(newProduct);
        return prodId;
    }

    getProducts() {
        return this.products;
    }

    getSingleProduct(id: string) {
        const product = this.findProduct(id);
        return {...product};
    }

    updateProduct(id: string, title: string, desc: string, price: number){
        const [product, index] = this.findProduct(id);
        const updatedProduct = {...product };
        if (title) {
            updatedProduct.title = title;
        }
        if (desc) {
            updatedProduct.description = desc;
        }
        if (title) {
            updatedProduct.price = price;
        }
        this.products[index] = updatedProduct;
        
    }

    deleteProduct(prodId: string) {
        const index = this.findProduct(prodId)[1];
        this.products.splice(index, 1);
    }

    private findProduct(id: string): [Product,number] {
        const productIndex = this.products.findIndex(prod => prod.id === id);
        const product = this.products[productIndex];
        if (!product) {
            throw new NotFoundException('Could not find product.');
        }
        return [product, productIndex];
    }

    
}