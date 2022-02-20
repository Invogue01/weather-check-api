const ft = new Fetch();
const ui = new UI();
const forc = new Forcast();


//add event listeners//

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
  const currentVal = search.value;
 
  ft.getCurrent(currentVal).then((data) => {
    //call a UI method//
    ui.populateUI(data);
    //call save local storage
    ui.saveToLS(currentVal);
    ui.getFromLS(currentVal);
    // fetching 5 day forecast and rendering cards for each
    forc.getCurrent(data.coord.lat, data.coord.lon)
    .then (data => {
      for (let index = 1; index < data.daily.length -2; index++) {
        
        ui.populateForecast(data.daily[index])
      }

  

    })

  });
});

//event listener for local storage

window.addEventListener("DOMContentLoaded", () => {
  const dataSaved = ui.getFromLS();
  ui.populateUI(dataSaved);
});
