class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.forecastContainer= document.getElementById("forecast");
    this.searches = document.getElementById("searches");
    this.city;
    this.defaultCity = "Birmingham";
  }

  populateUI(data) {
    //de-structure vars
    //ui design using bootstrap
    //add them to inner HTML

    this.uiContainer.innerHTML = `
          
          <div class="card mx-auto mt-5" style="width: 18rem;">
              <div class="card-body justify-content-center">
                  <h5 class="card-title text-muted">${data.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max}. Lows of ${data.main.temp_min} </h6>
                
                  <p class="card-text ">Weather conditions : ${data.weather[0].description}</p>

              </div>
              
          </div>
          
          
          `;
  }
  populateForecast(data) {
    //de-structure vars
    //ui design using bootstrap
    //add them to inner HTML
let milliseconds= (data.dt) * 1000;
let dateObject= new Date(milliseconds);
let Day= dateObject.toLocaleString("en-US", {weekday:"long"})
    this.forecastContainer.innerHTML += ( `
          
          <div class="card mx-auto mt-5" style="width: 18rem;">
              <div class="card-body justify-content-center">
               <h5 class="card-title text-muted">${Day}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.temp.max}. Lows of ${data.temp.min} </h6>
                
                  <p class="card-text ">Weather conditions : ${data.weather[0].description}</p>

              </div>
              
          </div>
          
          
          `);
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    const searches= JSON.parse(localStorage.getItem("city"))||[]
    searches.push(data)
    localStorage.setItem("city", JSON.stringify(searches));
  }

  getFromLS() {
   const searches= JSON.parse(localStorage.getItem("city"))||[]
   if (searches.length===0) {
     return null
     
   }
   searches.forEach(search =>{
     const li = document.createElement("li");
     li.innerHTML= search;
     this.searches.appendChild(li)
   })
  }

  clearLS() {
    localStorage.clear();
  }
}
 