let totalpar = 0
let totalimpar = 0
let mediapar = 0
let mediaimpar = 0

for(i=0;i<=999;i++){
    if(i % 2 == 0){
        console.log(`${i} é par`)
        totalpar++
        mediapar += i
    }else{
        console.log(`${i} é impar`)
        totalimpar++
        mediaimpar += i
    }
}
mediapar = mediapar / totalpar
mediaimpar = mediaimpar / totalpar

console.log(`Total número de pares: ${totalpar}, média: ${mediapar} \n Total número de impares: ${totalimpar}, média: ${mediaimpar}`)