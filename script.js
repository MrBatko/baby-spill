let plusPå = true
let minusPå = false
let gangePå = false
let delePå = true


let regneTypeTegn;





let runde;
let svar;
start()
svarTest(10)

function start(){
    runde = 0;
    nesteRunde()
}


function svarTest(i){
    if (svar === i){
        console.log(i);
        console.log(svar);
        console.log("riktig svar")
    }
}

function nesteRunde(){
    if (runde === undefined){return;}
    runde++
    let tall1 = Math.floor(Math.random()*9)+1;
    let tall2 = Math.floor(Math.random()*9)+1;
    let regnestatus = true;
    while(regnestatus){
        let regneTypeBestemmer = Math.floor(Math.random()*4)+1;
        // console.log(regneTypeBestemmer);
        if (regneTypeBestemmer === 1 && plusPå)
            {
            svar = tall1+tall2;
            regneTypeTegn = "+"
            regnestatus = false;

        }else if (regneTypeBestemmer === 2 && minusPå)
            {
            regneTypeTegn = "-";
            svar = tall1-tall2;
            regnestatus = false;

        }else if (regneTypeBestemmer === 3 && gangePå)
            {
            svar = tall1*tall2;
            regneTypeTegn = "×"
            regnestatus = false;

        }else if (regneTypeBestemmer === 4 && delePå)
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
    };
    console.log("Stykke: " + tall1 + " "+ regneTypeTegn +" "+tall2)
    console.log("Svar: "+svar)

    let element = document.getElementById("regneStykke");
    
    // element.innerHTML =+ tall1 + " "+ regneTypeTegn +" "+tall2;
}
