
let svar;
start()

function start(){
    var runde = 0
    nesteRunde()
}

function nesteRunde(){
    runde++
    let tall1 = Math.floor(Math.random()*10);
    let tall2 = Math.floor(Math.random()*10);
    let regnestatus = true;
    while(regnestatus){
        let regneTypeBestemmer = Math.floor(Math.random()*3);
        console.log(regneTypeBestemmer);
        if (regneTypeBestemmer === 1 && plusPå){
            svar = tall1+tall2;
            console.log(svar)
            regnestatus = false;
        }
        
    }
}