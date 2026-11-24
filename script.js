let plusPå = true
let minusPå = false
let regneTypeTegn;




let runde = 0
let svar;
start()

function start(){
    runde = 0
    nesteRunde()
}

function nesteRunde(){
    runde++
    let tall1 = Math.floor(Math.random()*9)+1;
    let tall2 = Math.floor(Math.random()*9)+1;
    let regnestatus = true;
    while(regnestatus){
        let regneTypeBestemmer = Math.floor(Math.random()*4)+1;
        console.log(regneTypeBestemmer);
        if (regneTypeBestemmer === 1 && plusPå)
            {
            svar = tall1+tall2;
            regneTypeTegn = "+"
            regnestatus = false;

        }else if (regneTypeBestemmer === 2 && plusPå)
            {
            regneTypeTegn = "-";
            svar = tall1-tall2;
            regnestatus = false;

        }else if (regneTypeBestemmer === 3 && plusPå)
            {
            svar = tall1*tall2;
            regneTypeTegn = "×"
            regnestatus = false;

        }else if (regneTypeBestemmer === 4 && plusPå)
            {
                while(regnestatus)
                    {
                    svar = tall1/tall2;
                    if (svar != Math.floor(svar) || !isFinite(svar))
                        {
                        tall1 = Math.floor(Math.random()*9)+1;
                        tall2 = Math.floor(Math.random()*9)+1;
                        svar = tall1/tall2;
                        continue
                    };
                    regneTypeTegn = "÷";
                    regnestatus = false;
                };
                
        };
        console.log("Stykke: " + tall1 + " "+ regneTypeTegn +" "+tall2)
        console.log("Svar: "+svar)
    };
}