const url = "http://worldtimeapi.org/api/timezone/";

const dropdown = document.getElementById("dropdown");
const time = document.getElementById("time");
dropdown.addEventListener("change", () => {
  console.log(dropdown.value);
  worldtimeapiFetch(url + dropdown.value);
  clearInterval(timeloop);
  const timeloop = setInterval(worldtimeapiFetch, 1000, url + dropdown.value);
  console.log(time.value);
});

const worldtimeapiFetch = function (url) {

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res.datetime);
      time.innerHTML = res.datetime.substring(11, 19);
  });
};

/*TODO: lav passende attributter ud fra de markerede JSON værdier som kan manipulerer med klokken  */
/* Altså vælg tidszone fra drop down, og set uret. */
