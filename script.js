// scjfbvwhfk
// initial variables

let premierNombre, deuxiemeNombre;
let choix, conf = true, rmss = "Super ! Le resultat de "

// user function selection

while (conf == true) {
    do {
        choix = 
        prompt(
                "Que voulez-vous faire ? \n\n"
                +   "1  -   Addition \n"
                +   "2  -   Multiplication \n"
                +   "3  -   Soustraction \n"
                +   "4  -   Division \n"
        )
    } while ((choix !== null) && (choix < 1 || choix > 4))
    
    // for addition (function)
    
    function addition(A, B) {return A + B} 
    
    // for multiplication (function)
    
    function multiplication(A, B) {return A * B;}
    
    // for soustraction (function)
    
    function soustraction(A, B) {return A - B}
    
    // for division (function)
    
    function division(A, B) {return A / B}
    if (choix == 1) {
        alert("Vous avez choisis l'option Addition")
    } 
    
    else if (choix == 2) {
        alert("Vous avez choisis l'option Multiplication")
    } 
    
    else if (choix == 3) {
        alert("Vous avez choisis l'option Soustraction")
    } 
    
    else if (choix == 4) {
        alert("Vous avez choisis l'option Division")
    } 
    
    else {
        
    }
    if ((choix !== null)) {
        do {
            premierNombre = prompt("Entrez le premier nombre")
            premierNombre = parseFloat(premierNombre)
            deuxiemeNombre = prompt("Entrez le deusième nombre")
            deuxiemeNombre = parseFloat(deuxiemeNombre)
        } while (isNaN(premierNombre) || isNaN(deuxiemeNombre))
    }
    
    try {
        switch (choix) {
            case '1':
                if (deuxiemeNombre >= 0) {
                    alert(rmss + premierNombre + " + " + deuxiemeNombre + " est " + addition(premierNombre, deuxiemeNombre))
                } else {
                    alert(rmss + premierNombre + " + " + "(" + deuxiemeNombre + ")" + " est " + addition(premierNombre, deuxiemeNombre))
                }
                break;
            case '2':
                if (deuxiemeNombre >= 0) {
                    alert(rmss + premierNombre + " x " + deuxiemeNombre + " est " + multiplication(premierNombre, deuxiemeNombre))
                } else {
                    alert(rmss + premierNombre + " x " + "(" + deuxiemeNombre + ")" + " est " + multiplication(premierNombre, deuxiemeNombre))
                }
                break;
            case '3':
                if (deuxiemeNombre >= 0) {
                    alert(rmss + premierNombre + " - " + deuxiemeNombre + " est " + soustraction(premierNombre, deuxiemeNombre))
                } else {
                    alert(rmss + premierNombre + " - " + "(" + deuxiemeNombre + ")" + " est " + soustraction(premierNombre, deuxiemeNombre))
                }
                break;
            case '4':
    
                try {
                    if (deuxiemeNombre != 0) {
                        if (deuxiemeNombre >= 0) {
                            alert(rmss + premierNombre + " ÷ " + deuxiemeNombre + " est " + division(premierNombre, deuxiemeNombre))
                        } else {
                            alert(rmss + premierNombre + " ÷ " + "(" + deuxiemeNombre + ")" + " est " + division(premierNombre, deuxiemeNombre))
                        }
                    }
                    else {
                        throw new Error("Erreur Équation : Vous ne pouvez pas diviser un nombre par 0.")
                    }
                } catch (error) {
                    alert(error.message)
                }
    
                break;
            case null:
                conf = false
                break
            default:
                throw new Error("Erreur : Vous avez entré une donnée invalide !")
                break;
        }
    } catch (error) {
        alert(error.message)
    }

    conf = confirm("Au-revoir et à bientôt pour une nouvelle experience ! \n" + "Appuyer sur 'OK' pour récommencer.")
}