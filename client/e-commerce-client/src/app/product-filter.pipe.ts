import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product/product.model';
import { Products } from './products/products.model';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], filter: string): Object[] {
    let tempProducts: Product[] = [];
    products.forEach((product) => {
      if(product.productType === filter) {
        tempProducts.push(product);
      }
    })
    return tempProducts;
  }

}
