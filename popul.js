let popul1 = 80000
let popul2 = 200000
const taxa1 = 0.03
const taxa2 = 0.015
let anoatual = 2025
let ano = 2025

console.log(`Ano atual: ${ano} \nPopulação da cidade A: ${popul1} \nPopulação das cidade B: ${popul2}`)

while(popul1 < popul2){
    popul1 += popul1 * taxa1
    popul2 += popul2 * taxa2
    ano++
    console.log(`Ano atual: ${ano} \nPopulação da cidade A: ${popul1} \nPopulação das cidade B: ${popul2}`)
}
const anopres = ano - anoatual

console.log(`quantidade de anos que é preciso para a cidade A ultrapassar a cidade B: ${anopres}`)