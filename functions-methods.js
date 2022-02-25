// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain(email, domain) {
    return email.slice("@") === domain;
}

const outcome = getEmailDomain("rachellemurk@hotmail.nl");

console.log(outcome)

// HeCu22: hier komt true of false uit en geen domain. Verder kun je slice wel gebruiken. In uitwerkingen gebruiken ze substring.
// HeCu22: ik heb sprit functie gebruikt.


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
function typeOfEmail(email) {
        if (email.includes("novi-education.nl")) {
            console.log("Student");
        } else if (email.includes("novi.nl")) {
            console.log("Medewerker");
        } else {
            console.log("Extern");
        }
}

const emailIncludes = typeOfEmail("rachelle.murk@novi-education.nl");

console.log(emailIncludes)

// HeCu22: je kan ook het switch statement gebruiken. je kan ook de domain functie uit vorige opdracht gebruiken.
// HeCu22: staat ook in uitwerkingen.


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in


function checkEmailValidity(email2) {
    if (email2.includes('@')) {
        return true;
    } else if ((email2.includes(',')) && (email2.lastIndexOf('.'))) {
        return false;
    }
}

const outcomeValid = checkEmailValidity("n.eeken@novi.nl");

console.log(outcomeValid);

// HeCu22: hiermee heb je nog niet afgevangen dat een emailadres dat een @ bevat, ook een , of een . op de laatste plaats.



// (email2.includes(',') === false) &&

// && (email2.lastIndexOf('.') === false)
