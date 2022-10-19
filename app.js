
// var btn = document.querySelectorAll(".btn");
// // function writeNumber(event){
    
// // }
// var botones = Array.from(btn)


// botones.forEach(element => {
//     element.addEventListener("click",(event)=>{
//         console.log(event.target.innerText)
//     })
        
// });
let resultad="";
let valores ="";
let resultados=0;
function multiplicacion(num){
    resultad=resultados*num;
    resultados = resultad;
    document.getElementById("result").innerHTML=resultad; 
    
}
function division(n1,n2){
    resultad=n1/n2;
    document.getElementById("result").innerHTML = resultad;
}
function suma(num){
    resultad=resultados + num;
    resultados = resultad;    
    document.getElementById("result").innerHTML = resultad;    
}
function resta(num){
    resultad=resultados - num;
    resultados = resultad;
    
    
    document.getElementById("result").innerHTML = resultad; 
    
}
function eliminar(){
    console.log(resultad+"--r--");
    resultad = resultad.toString();
    
    console.log(resultad+"---");
    resultad= resultad.slice(0,-1);
    console.log(resultad);
    document.getElementById("result").innerHTML=resultad;
}

function writeNumber(event) {  
    resultad = resultad.toString().concat(event.innerText);
    document.getElementById("result").innerHTML =resultad;    
}
let n1b;
let n2a;
let a; 

function operaciones(num){
    
    let signo = num[0];
    
    num = num.slice(1);
    console.log(num+"--n2--");
    num = parseInt(num, 10);
    console.log(num);
    switch(signo){
        case "+": suma(num); break;
        case "-": resta(num); break;
        case "x": multiplicacion(num); break;
        case "/": division(num); break;
    }
    
}
aray = [];
function resultado(event){
    n1 = "";
    n2 ="";
    for(var i = 0; i <resultad.length; i++){
        if(i==0){
            n1 = n1.concat("+");
        }
        while(resultad[i]<="9" && resultad[i] >="0"){
                n1 = n1.concat(resultad[i]);
                i++;         
            }
        aray.push(n1);
        if(i!=resultad.length){
        n1=resultad[i]
        };
        
    }
    
    for (const i of aray) {
        
        operaciones(i);
    }
    console.log(aray);
    aray=[];
    resultados=0;
    // switch(resultad[a]){
    //     case "+": suma(n1a,n1b); break;
    //     case "-": resta(n1a,n1b);break;
    //     case "x": multiplicacion(n1a,n1b); break;
    //     case "÷": division(n1a,n1b); break;
    // }
    
    
}


