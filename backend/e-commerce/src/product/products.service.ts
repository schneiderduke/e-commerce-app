import { HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class ProductsService {
    public products: Product[] = [];

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

    public async insertProduct(title: string, description: string, price: number, imgPath: string, productType: string) {
        const prodId = Date.now().toString();
        const newProduct = new this.productModel({
            id: prodId,
            title: title, 
            description: description, 
            price: price, 
            imgPath: imgPath, 
            productType: productType
        });
        await newProduct.save();
        return prodId;
    }

    public async getProducts() {
        const products: Product[] = await this.productModel.find();
        if(!products || !products[0]) {
            throw new HttpException('Not Found', 404);
        }
        return products.map((prod) => ({
            id: prod._id,
            title: prod.title,
            price: prod.price,
            imgPath: prod.imgPath,
            productType: prod.productType,
            description: prod.description
        }));
    }

    public async getSingleProduct(id: string) {
        const product = await this.findProduct(id);
        return {
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            imgPath: product.imgPath,
            productType: product.productType
        };
    }

    public async updateProduct(id: string, title: string, desc: string, price: number, imgPath: string, productType: string){
        const updatedProduct = await this.findProduct(id);

        if (title) {
            updatedProduct.title = title;
        }
        if (desc) {
            updatedProduct.description = desc;
        }
        if (price) {
            updatedProduct.price = price;
        }
        if (imgPath) {
            updatedProduct.imgPath = imgPath;
        }
        if (productType) {
            updatedProduct.productType = productType;
        }
        updatedProduct.save();
        
    }

    public async deleteProduct(prodId: string) {
        try {
            await this.productModel.deleteOne({_id: prodId}).exec();
        } catch(error) {
            throw new NotFoundException('Could not find product.');
        }
    }

    private async findProduct(id: string) {
        let product;
        try {
            product = await this.productModel.findById(id).exec();
        } catch (error) {
            throw new NotFoundException('Could not find product.');
        } if (!product) {
            throw new NotFoundException('Could not find product.');
        }
        return product;
    }

    
}