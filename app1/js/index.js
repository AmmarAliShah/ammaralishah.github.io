var temp;
var tempmin;
var tempmax;

function convert() {
  if ($("#degs").html()[$("#degs").html().length - 1] === "C") {
    temp = (temp * 1.8) + 32;
    tempmin = (tempmin * 1.8) + 32;
    tempmax = (tempmax * 1.8) + 32;
    $("#degs").html(temp.toFixed(2) + "&deg;F");
    $("#maxtemp").html("Maximum temperature: " + tempmax.toFixed(2) + "&deg;F");
    $("#mintemp").html("Minimum temperature: " + tempmin.toFixed(2) + "&deg;F");
    $("#convert").html("Convert to Centigrade");
  } else {
    temp = (temp - 32) / 1.8;
    tempmin = (tempmin - 32) / 1.8;
    tempmax = (tempmax - 32) / 1.8;
    $("#degs").html(temp.toFixed(2) + "&deg;C");
    $("#maxtemp").html("Maximum temperature: " + tempmax.toFixed(2) + "&deg;C");
    $("#mintemp").html("Minimum temperature: " + tempmin.toFixed(2) + "&deg;C");
    $("#convert").html("Convert to Fahrenheit");
  }
}

$(document).ready(function() {
  $.ajax({
    method: "GET",
    url: "http://ipinfo.io",
    success: function(response) {
      lon = response.loc.substring(0, response.loc.indexOf(","));
      lat = response.loc.substring(response.loc.indexOf(",") + 1);
      link = "api.openweathermap.org/data/2.5/weather?lat=" + lon + "&lon=" + lat + "&appid=e675b18133450ca619cb7857de11766b";
      $.ajax({
        method: "GET",
        url: "http://" + link,
        success: function(res) {
          temp = res.main.temp - 273.15;
          tempmin = res.main.temp_min - 273.15;
          tempmax = res.main.temp_max - 273.15;
          var desc = res.weather[0].description;
          var humidity = res.main.humidity;
          var city = res.name;
          var country = res.sys.country;
          var icon = res.weather[0].icon;
          $("#icon").attr({
            "src": "http://openweathermap.org/img/w/" + icon + ".png",
            "width": "80px",
            "height": "80px"
          });
          $("#degs").html(temp.toFixed(2) + "&deg;C");
          $("#city").html(city + ", " + country);
          $("#desc").html("Status: " + desc);
          $("#humidity").html("Humidity: " + humidity + "%");
          $("#maxtemp").html("Maximum temperature: " + tempmax.toFixed(2) + "&deg;C");
          $("#mintemp").html("Minimum temperature: " + tempmin.toFixed(2) + "&deg;C");
          if (temp > 25) {
            $("body").css({
              background: "url('https://farm6.staticflickr.com/5642/23608354155_10e7aeb3a6_z.jpg') no-repeat center center fixed",
              "background-size": "cover"
            });
          } else if (temp > 5) {
            $("body").css({
              background: "url('https://farm1.staticflickr.com/775/22981299943_6849a14165_z.jpg') no-repeat center center fixed",
              "background-size": "cover"
            });
          } else {
            $("body").css({
              background: "url('https://farm1.staticflickr.com/771/22980179654_f8b2a6dec8_z.jpg') no-repeat center center fixed",
              "background-size": "cover"
            });
          }
        },
      })

    },
    dataType: "jsonp"
  })
})

$("#convert").on("click", convert);
