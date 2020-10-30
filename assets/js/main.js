// Wird automatisch gesetzt in singleFunction
var haushaltFall = '';

// Wird automatisch gesetzt in jahrWahl
var minEinkommen = 9408;
var fallZweiHoch = 14532;
var fallZweiPara = 972.87;
var fallDreiHoch = 57051;
var fallDreiPara1 = 212.02;
var fallDreiPara2 = 972.79;
var fallVierHoch = 270500;
var fallVierPara = 8963.74;
var fallFunfPara = 17078.74;



function singleFunction() {
    if (document.getElementById('single').checked) {
        haushaltFall = 'single';
        document.getElementById('single-einkommen').style.display = 'inline-block';
        document.getElementById('gemeinsames-einkommen').style.display ='none';
    } else if (document.getElementById('zusammen').checked) {
        haushaltFall = 'zusammen';
        document.getElementById('gemeinsames-einkommen').style.display = 'inline-block';
        document.getElementById('single-einkommen').style.display = 'none';
    }
}



function berechne() {
    jahrWahl();
    var steuerWert = 0;
    console.log('minEinkommen=' + minEinkommen);
    if (haushaltFall == 'single'){
        var singleEinkommen = document.getElementById('single-einkommen-wert').value;
        if (singleEinkommen == '') {
            alert ('Füge Dein zu versteuerndes Einkommen hinzu');
        } else {
            singleEinkommen = parseFloat(singleEinkommen);
            console.log('singleEinkommen=' + singleEinkommen);
            steuerWert = steuer(singleEinkommen);
            document.getElementById('ergebnis').style.visibility = 'visible';
            console.log('steuerWert=' + steuerWert);
        } 


    } else if (haushaltFall == 'zusammen') {
        var personaEinkommenEins = document.getElementById('zusammen-persona-eins').value;
        var personaEinkommenZwei = document.getElementById('zusammen-persona-zwei').value;
        if (personaEinkommenEins == '' || personaEinkommenZwei == '' ){
            alert('Fügt Euer zu versteuerndes Einkommen hinzu');
        } else {
            personaEinkommenEins = parseFloat(personaEinkommenEins);
            personaEinkommenZwei = parseFloat(personaEinkommenZwei);
            var durchschnittEinkommen = (personaEinkommenEins + personaEinkommenZwei) / 2;
            durchschnittEinkommen = durchschnittEinkommen.toFixed(2);
            steuerWert = steuer(durchschnittEinkommen);
            steuerWert *= 2;
            document.getElementById('ergebnis').style.visibility = 'visible';
        }
    }
    document.getElementById('steuer').innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(steuerWert);
}

function steuer(einkommen) {
    var steuerWert = 0;
    if (einkommen <= minEinkommen) {
        steuerWert = 0;
    } else if ( einkommen >=(minEinkommen + 1)&& einkommen <= fallZweiHoch){
        var y = (einkommen - minEinkommen) / 10000;
        steuerWert = ((fallZweiPara * y) + 1400) * y; 
    } else if (einkommen >= (fallZweiHoch + 1)&& einkommen <= fallDreiHoch) {
    var z = (einkommen - fallZweiHoch) / 10000 ;
        steuerWert = ((fallDreiPara1 * z) + 2397) * z + fallDreiPara2;
    } else if (einkommen >= fallDreiHoch && einkommen <= fallVierHoch){
        steuerWert = (0.42 * einkommen) - fallVierHoch;
    } else {
        steuerWert = (0.45 * einkommen) - fallFunfPara;
    }
    console.log('steuerWert=' + steuerWert.toString());
    steuerWert = steuerWert.toFixed(2);
    return steuerWert;
}

function jahrWahl() {
    var x = document.getElementById('steuer-jahr').value;
    if (x == 2019) {
        minEinkommen = 9168;
        fallZweiHoch = 14254;
        fallZweiPara = 980.14;
        fallDreiHoch = 55960;
        fallDreiPara1 = 216.16;
        fallDreiPara2 = 965.58;
        fallVierHoch = 265326;
        fallVierPara = 8780.90;
        fallFunfPara = 16740.68;
    } else if (x == 2018) {
        minEinkommen = 9000;
        fallZweiHoch = 13996;
        fallZweiPara = 997.80;
        fallDreiHoch = 54949;
        fallDreiPara1 = 220.13;
        fallDreiPara2 = 948.49;
        fallVierHoch = 260532;
        fallVierPara = 8621.75;
        fallFunfPara = 16437.70;
    } else if (x == 2020) {
        minEinkommen = 9408;
        fallZweiHoch = 14532;
        fallZweiPara = 972.87;
        fallDreiHoch = 57051;
        fallDreiPara1 = 212.02;
        fallDreiPara2 = 972.79;
        fallVierHoch = 270500;
        fallVierPara = 8963.74;
        fallFunfPara = 17078.74;

    }

}

