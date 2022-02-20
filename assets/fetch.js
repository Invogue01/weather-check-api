class Fetch {
  async getCurrent(input) {
    const weatherKey = "37da6e19f9f8ba43dc800c317b9f7bd8";

    //make request to website
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${weatherKey}&units=metric`
    );
    const data = await response.json();
    console.log(data);
    return data;
    
  }

}

class Forcast {
  async getCurrent(lat,lon) {
    console.log(lat)
    console.log(lon)
    const weatherKey = "37da6e19f9f8ba43dc800c317b9f7bd8";

    //make request to website
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${weatherKey}&units=metric`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
  
}

