let sp = "Hola"
let pl = "Czesc"
let en = "Hello"
let fr = "Bonjour"
let Gr = "Hallo"
let it = "Ciao"
let pt = "Oi"
let tk = "Selam"
let dn = "Hej"
let rn = "Privet"
let calculatedExample = 365-65
let TempEx = `Both ${sp} but also ${calculatedExample} as a String`
// -----Variables-----


const demo = () => {
    let userInput = prompt(" Introduce yourself in a different language");
    //   Get Users Input
    if (userInput === "sp") {
      alert("Hola, como te amos");
    } else {
      alert("Good Job too bad I only speak english and spanish.");
    }
    console.log(userInput);
};
// Demo 1 _ if Statement

const demo2 = () => {
    let userLang = prompt(" Say Goodbye in a different language");
let sp = "Adios"
let pl = "Do widzenia"
let en = "Goodbye"
let fr = "Au revoir"
let Gr = "Auf Wiedersehen"
let it = "Arrivederci"
let pt = "Adeus"
let tk = "Hoscakalin"
let dn = "Farvel"
let rn = "Dasvidaniya"
    //   Get Users Input
    if (userInput === "rn") {
      alert("Khoroshego Dnya");
    } else {
      alert("May the odds be ever in your favor.");
    }
    console.log(userLang);
};
// Demo 2 _if Statement

const demo3 =() => {
    let howLng = prompt(" How many days have you spent studying other languages?");
    let calc = 365-65
    // Get Users Input
    if (userInput === "calc") {
        alert("Two more months and you'll have a full Year's Knowledge")
    } else { alert("Try rosetta stone it's a life saver.");
    }
    console.log(howLng);
};
// Demo 3_ if Statement