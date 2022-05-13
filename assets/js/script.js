var apiKey = '26ba3a7e283acb9cd1e8665c6c3b319a';
var openWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
var oneCallUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat='
var formEl = $('#city-search');
var col2El = $('.col2');
var city = $('#city');
var fiveDayEl = $('#five-day');
var searchHistoryEl = $('#search-history');
var currentDay = moment().format('M/DD/YYYY');
var searchHistoryArray = loadSearchHistory();
const weatherIconUrl = 'http://openweathermap.org/img/wn/';

function saveSearchHistory() {
    localStorage.setItem('search history', JSON.stringify(searchHistoryArray));
    console.log(city)
};

function loadSearchHistory() {
    var searchHistoryArray = JSON.parse(localStorage.getItem('search history'));

    if (!searchHistoryArray) {
        searchHistoryArray = {
            searchedCity: [],
        };
    } else {
        for (var i = 0; i < searchHistoryArray.searchedCity.length; i++) {
            searchHistoryEl(searchHistoryArray.searchedCity[i]);
        }
    }
    return searchHistoryArray;
}

function searchHistory(city) {
    var searchHistoryBtn = $('<button>')
        .addClass('btn')
        .text(city)
        .on('click', function () {
            $('#current-weather').remove();
            $('#five-day').empty();
            $('#five-day-header').remove();
            getWeather(city);
        })
        .attr({
            type: 'button'
        });
    searchHistoryEl.append(searchHistoryBtn);
}

