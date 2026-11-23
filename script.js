let plusPå = true
let minusPå = false




let runde = 0
let svar;
start()

function start(){
    runde = 0
    nesteRunde()
}

function nesteRunde(){
    runde++
    let tall1 = Math.floor(Math.random()*10);
    let tall2 = Math.floor(Math.random()*10);
    let regnestatus = true;
    while(regnestatus){
        let regneTypeBestemmer = Math.floor(Math.random()*4)+1;
        console.log(regneTypeBestemmer);
        if (regneTypeBestemmer === 1 && plusPå){

            svar = tall1+tall2;
            regnestatus = false;

        }else if (regneTypeBestemmer === 2 && plusPå){

            svar = tall1-tall2;
            regnestatus = false;

        }else if (regneTypeBestemmer === 3 && plusPå){

            svar = tall1*tall2;
            regnestatus = false;

        }else if (regneTypeBestemmer === 4 && plusPå){
            loop(regnestatus)
            {
                svar = tall1/tall2;
                if (svar != Math.floor(svar)){continue}    
                if (isFinite(svar)){continue}

                regnestatus = false;
            }
        }
        console.log("Svar: "+svar)
    }
}