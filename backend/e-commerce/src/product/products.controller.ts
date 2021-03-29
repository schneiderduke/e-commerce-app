import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {}

    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
        @Body('imgPath') imgPath: string): any {
        
        const generatedId = this.productsService
            .insertProduct(prodTitle, prodDesc, prodPrice, imgPath);
        return { id: generatedId };
    }

    @Get()
    getAllProducts(): any {
        return {products: this.productsService.getProducts()};
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string): any {
        return this.productsService.getSingleProduct(prodId);
    }

    @Patch(':id')
    updateProduct(
        @Param('id') prodId: string,
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
        @Body('imgPath') imgPath: string): any {
            this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice, imgPath);
            return null;
        }

    @Delete(':id')
    removeProduct(
        @Param('id') prodId: string) : any {
            this.productsService.deleteProduct(prodId);
            return null;
        }
}