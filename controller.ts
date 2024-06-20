import { Product, ProductCollection } from "./models";

class ProductController {
    productos:ProductCollection
    constructor(){
        this.productos = new ProductCollection();
    }

    processOptions(options){
        if(options.search){
            return this.productos.getById(options.search)
        } else {
            return this.productos.getAll();
        }
    }
}

export { ProductController }