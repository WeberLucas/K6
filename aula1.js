//1. inicialização 
import sleep from 'k6';


//2. COnfiguração
export const options = {
    vus: 1,
    duration : '10s'

}

//3.execução // codigo Vu
export default function(){
    console.log("testando o k6");
    sleep(1);
}

//4.Desmontagem
export function teardown(data){
    console.log("data")
}
