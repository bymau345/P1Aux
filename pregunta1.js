


//1 Calcule el puntaje promedio de cada equipo, utilizando los datos de prueba
// proporcionados al final del enunciado.

let Ricks= [97, 112 , 101]
let Mortys =[109, 95 , 123]


console.log((Ricks[0]+Ricks[1]+Ricks[2])/3)
console.log((Mortys[0]+Mortys[1]+Mortys[2])/3)

//2 Compare los puntajes promedio del equipo para determinar el ganador de la
//competencia, e imprimirlo en la consola. No olvides que puede haber un
// empate, así que toma en cuenta ese caso también

let r=((Ricks[0]+Ricks[1]+Ricks[2])/3)
let m=((Mortys[0]+Mortys[1]+Mortys[2])/3)
if (r==m)
   console.log("empate")
else 
    if(r>m)
      console.log("rick gana")
    else
       console.log("morty gana")  
       
//3 Incluya el requisito de una puntuación mínima de 100. Con esta regla el equipo
// solo gana si tiene una puntuación más alta que el otro equipo, y además tiene
// una puntuación de al menos 100 puntos.
if(r>m)
    if (r>=100)
       console.log("rick gana")
    else
       console.log("rick gana pero no cumple con 100 puntos")
 else
    if (m>=100)
        console.log("morty gana")
    else
       console.log("morty gana pero no cumple con 100 puntos") 

 //4 ¡La puntuación mínima también se aplica a un empate! Entonces, un empate
//solo ocurre cuando ambos equipos tienen la misma puntuación y ambos tienen
//una puntuación mayor o igual a 100 puntos. De lo contrario, ningún equipo
//gana el premio.     

if (r==m)
    if(r>=100 && m>=100)
        console.log("empate")
    else
         if(r>m)
            if (r>=100)
               console.log("rick gana")
            else
               console.log("rick gana pero no cumple con 100 puntos")
        else
            if (m>=100)
               console.log("morty gana")
            else
               console.log("morty gana pero no cumple con 100 puntos") 
             
              
//5  Cree una arrow function 'calcAverage' para calcular el promedio de 3
// puntuaciones  

let calcAverage = (vect) => {
    return (vect[0]+vect[1]+vect[2])/3
}



//6. Usa la función para calcular el promedio de ambos equipos.
console.log(calcAverage(Ricks))
console.log(calcAverage(Mortys))

//7. Cree una función 'checkWinner' que tome la puntuación media de cada equipo.
//como parámetros ('avgRIcks' y 'avgMortys'), y luego muestre el ganador, junto
//con los puntajes, de acuerdo con la regla anterior. Ejemplo: "Los koalas ganan
//(30 contra 13)"
function checkWinner(avgRIcks,avgMortys){
    if(avgRIcks==avgMortys)
        if(avgRIcks>=100 && avgMortys>=100)
            console.log("Empatan")
        else
        
            console.log("Pierden Ambos")
else
    if(avgRIcks>avgMortys)
        if(avgRIcks>100)
            console.log("Gana Ricks")
        else
            console.log("Gana Ricks pero no tiene los 100 puntos")
    else
        if(m>100)
            console.log("Gana Mortys")
        else
            console.log("Gana Mortys pero no tiene los 100 puntos")
}

//8. Utilice la función 'checkWinner' para determinar el ganador para los datos 1 y
//Datos 2

checkWinner(Ricks,Mortys)