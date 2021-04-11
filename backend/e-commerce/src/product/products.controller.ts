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
        @Body('imgPath') imgPath: string,
        @Body('productType') productType: string
        ): any {
        const generatedId = this.productsService
            .insertProduct(prodTitle, prodDesc, prodPrice, imgPath, productType);
        return { id: generatedId };
    }

    @Get()
    async getAllProducts() {
        const products = await this.productsService.getProducts();
        return products;
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string): any {
        return this.productsService.getSingleProduct(prodId);
    }

    @Patch(':id')
    async updateProduct(
        @Param('id') prodId: string,
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
        @Body('imgPath') imgPath: string,
        @Body('productType') productType: string
        ) {
            await this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice, imgPath, productType);
            return null;
        }

    @Delete(':id')
    async removeProduct(
        @Param('id') prodId: string) {
            await this.productsService.deleteProduct(prodId);
            return null;
        }
}