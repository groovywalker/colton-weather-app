$(document).ready(function() {
  getWeather(); //Get the initial weather.
  setInterval(getWeather, 600000);  //Update the weather every 10 minutes.
});

function getWeather() {
  $.simpleWeather({
    location: 'Colton, CA',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<p>' + weather.temp + '&deg;' + weather.units.temp + '</p>';
      html += '<p>' + weather.city + ', ' + weather.region + '</p>';
      html += '<p>' + weather.currently + '</p>';
      html += '<p>' + weather.wind.direction + ' ' + weather.wind.speed + ' ' + weather.units.speed + '</p>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>' + error + '</p>');
    }
  });
}