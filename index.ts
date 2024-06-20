import { ProductController } from "./controller";
import * as minimist from 'minimist';

function parseaParams(argv){
    const resultadominimist = minimist(argv)
    if (resultadominimist.search){
        return {
            search: resultadominimist.search
        };
    } else {
        return {};
    }

}

function main (){
    const argv = process.argv.slice(2);
    const argvParsed = parseaParams(argv);
    
    const controller = new ProductController();
    controller.processOptions(argvParsed).then((resultado) => {
        console.log(resultado);
    })
}

main();