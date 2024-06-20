import * as jsonfile from 'jsonfile';

class Product {
    id:number;
    name:string;
}

class ProductCollection {
    async getAll(){
        const promesa = await jsonfile.readFile("./productos.json")
        return promesa
    }
    
    async getById(id:number){
        const promesa = await this.getAll();
        const resultado = promesa.find((prod)=>{return prod.id === id});
        return resultado;
    }
}

export { Product, ProductCollection }