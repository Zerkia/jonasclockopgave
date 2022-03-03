const url = "http://worldtimeapi.org/api/timezone/";

// Declare timeloop som let
let timeloop;

// Vælg specifikke elementer
const dropdown = document.getElementById("dropdown");
const time = document.getElementById("time");
const date = document.getElementById("date");

//Kode der eksekveres når dropdown får givet et valg (Kan ikke vælge samme mulighed 2 gange i træk)
dropdown.addEventListener("change", () => {
  console.log(dropdown.value);
  worldtimeapiFetch(url + dropdown.value);

  // Timeloop er nu tilgængelig da den er global

  /* Date kunne godt have et loop, men i denne opgave føltes det unødvendigt
  da den ville skulle køre kode hvert sekund for kun at få resultat en gang
  hver 24. time.*/

  //Gør teknisk set ikke noget første gang da let timeloop ikke er initialiseret endnu.
  clearInterval(timeloop);


  /*1000 ms timeout kan give et lille delay når nyt område vælges, 500 ms fikser det men brugere
  console memory*/
  timeloop = setInterval(worldtimeapiFetch, 1000, url + dropdown.value);

  console.log(time.value);
});


const worldtimeapiFetch = function (url) {

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res.datetime);

      //substring specificere hvad vi vil have fra den lange json String res giver.
      time.innerHTML = res.datetime.substring(11, 19);
      date.innerHTML = res.datetime.substring(0, 10);
  });
};

/*TODO: lav passende attributter ud fra de markerede JSON værdier som kan manipulerer med klokken  */
/* Altså vælg tidszone fra drop down, og set uret. */
