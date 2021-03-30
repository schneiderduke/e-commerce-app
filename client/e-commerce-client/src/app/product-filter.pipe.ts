import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product/product.model';
import { Products } from './products/products.model';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], filter: string): Object[] {
    console.log(products);
    if((filter === '')) {
      return products;
    }
    let tempProducts: Product[] = [];
    products.forEach((product) => {
      if(product.productType === filter) {
        tempProducts.push(product);
      }
    })
    if(tempProducts.length === 0) {
      return products;
    }
    return tempProducts;
  }

}
