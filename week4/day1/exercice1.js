// ------------------
// #1
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1
funcOne(); // ➤ Affichera : inside the funcOne function 3
// Car a commence à 5, et comme 5 > 1, on réaffecte a = 3

// #1.2 Si on utilise const au lieu de let :
// ➤ Une erreur se produira : "Assignment to constant variable."
// Parce que const ne permet pas de réaffecter une variable après sa déclaration

// ------------------
// #2
let a = 0;
function funcTwo() {
    a = 5;
}
function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1
funcThree(); // ➤ Affiche : inside the funcThree function 0 (valeur initiale)
funcTwo();   // ➤ Change a global à 5
funcThree(); // ➤ Affiche : inside the funcThree function 5

// #2.2 Si a était déclaré avec const à la ligne 27 :
// ➤ Une erreur se produira dans funcTwo() lors de l'affectation a = 5
// Car on ne peut pas modifier une variable const

// ------------------
// #3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1
funcFour();  // ➤ Définit une variable globale a = "hello"
funcFive();  // ➤ Affiche : inside the funcFive function hello

// Note : window.a rend a accessible globalement (pas conseillé)

// ------------------
// #4
let c = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

// #4.1
funcSix(); // ➤ Affiche : inside the funcSix function test
// Car la variable a dans la fonction est locale (shadowing de la variable globale)

// #4.2 Si on utilise const au lieu de let dans funcSix :
// ➤ Le comportement reste le même, tant qu’on ne tente pas de réaffecter a

// ------------------
// #5
let b = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`); // ➤ Affiche : in the if block 5
}
alert(`outside of the if block ${a}`); // ➤ Affiche : outside of the if block 2

// #5.1 OK
// #5.2 Si on utilise const à la place de let :
// ➤ Le comportement reste le même (les deux blocs ont leur propre portée)
// Tant qu’on ne tente pas de modifier la variable après déclaration, tout va bien


