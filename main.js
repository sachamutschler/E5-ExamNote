
var note = 0;

var checkBoxNoEval = document.getElementById("no_eval");
var checkBoxNoEval1 = document.getElementById("no_eval1");
var checkBoxNoEval2 = document.getElementById("no_eval2");

var checkBoxNoMaster = document.getElementById("no_master");
var checkBoxNoMaster1 = document.getElementById("no_master1");
var checkBoxNoMaster2 = document.getElementById("no_master2");

var checkBoxPartMaster = document.getElementById("part_master");
var checkBoxPartMaster1 = document.getElementById("part_master1");
var checkBoxPartMaster2 = document.getElementById("part_master2");

var checkBoxGdMaster = document.getElementById("gd_master");
var checkBoxGdMaster1 = document.getElementById("gd_master1");
var checkBoxGdMaster2 = document.getElementById("gd_master2");

var checkBoxExlMaster = document.getElementById("exl_master");
var checkBoxExlMaster1 = document.getElementById("exl_master1");
var checkBoxExlMaster2 = document.getElementById("exl_master2");

var resultat = document.getElementById("Note");

resultat.innerHTML = note;

function round0() {
    if (Math.round(note)===0) {
        resultat.innerHTML = Math.round(note);
    }
    else{
        resultat.innerHTML = note.toPrecision(3);
    }
}


// Fonctions pour les cases Non évaluable
function NoEvaluable() {
    if (checkBoxNoEval.checked == true) {
        note += 1.34;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();

    }
    else{
        note -= 1.34;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }

}
function NoEvaluable1() {
    if (checkBoxNoEval1.checked == true) {
        note += 1.34;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }
    else{
        note -= 1.34;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }
}

function NoEvaluable2() {
    if (checkBoxNoEval2.checked == true) {
        note += 1.34;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();

    }
    else{
        note -= 1.34;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }
}



// Fonctions pour les cases Non évaluable
function NoMaster() {

    if (checkBoxNoMaster.checked == true) {
        note += 2.68;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }
    else{
        note -= 2.68;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }

}
function NoMaster1() {

    if (checkBoxNoMaster1.checked == true) {
        note += 2.68;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }
    else{
        note -= 2.68;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }

}
function NoMaster2() {

    if (checkBoxNoMaster2.checked == true) {
        note += 2.68;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }
    else{
        note -= 2.68;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }

}

// Fonctions pour les cases Non évaluable
function PartMaster() {

    if (checkBoxPartMaster.checked == true) {
        note += 4.02;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }
    else{
        note -= 4.02;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }

}
function PartMaster1() {

    if (checkBoxPartMaster1.checked == true) {
        note += 4.02;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }
    else{
        note -= 4.02;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }

}
function PartMaster2() {

    if (checkBoxPartMaster2.checked == true) {
        note += 4.02;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }
    else{
        note -= 4.02;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }

}

// Fonctions pour les cases Non évaluable
function GdMaster() {
    
    if (checkBoxGdMaster.checked == true) {
        note += 5.36;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }
    else{
        note -= 5.36;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3)
        console.log(Math.round(note));
        round0();
    }

}
function GdMaster1() {
    
    if (checkBoxGdMaster1.checked == true) {
        note += 5.36;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();

    }
    else{
        note -= 5.36;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }

}
function GdMaster2() {
    
    if (checkBoxGdMaster2.checked == true) {
        note += 5.36;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }
    else{
        note -= 5.36;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }

}

// Fonctions pour les cases Non évaluable
function ExlMaster() {
    
    if (checkBoxExlMaster.checked == true) {
        note += 6.7;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }
    else{
        note -= 6.7;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }

}
function ExlMaster1() {
    
    if (checkBoxExlMaster1.checked == true) {
        note += 6.7;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }
    else{
        note -= 6.7;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }

}
function ExlMaster2() {
    
    if (checkBoxExlMaster2.checked == true) {
        note += 6.7;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }
    else{
        note -= 6.7;
        console.log(note);
        resultat.innerHTML = note.toPrecision(3);
        console.log(Math.round(note));
        round0();
    }

}


