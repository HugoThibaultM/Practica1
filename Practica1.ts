const hanoi=(numero:number, inicial:number, final:number, aux:number)=>{
    if(numero===1){
        console.log("Se mueve disco"+inicial+"->"+final)
    }else{
        hanoi(numero-1, inicial, aux, final)
        console.log("Se mueve disco"+inicial+"->"+final)
        hanoi(numero-1,aux,final,inicial)
    }   
}
const n=3;
hanoi(n,1,2,3);