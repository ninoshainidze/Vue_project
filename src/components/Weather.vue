// Weather.vue

<template>
    <div>
      <h1>My Weather App</h1>
      <button v-on:click="getWeatherData">Get Weather Data</button>
      <div v-for="weatherData in weatherDataList" :key="weatherData.id" class="weather-data">
        <div class="weather-stats">
          <div>
            <span>{{weatherData.time}}</span>
          </div>
          <div>
            <span class="location">{{weatherData.location}}</span>
          </div>
        </div>
        <div class="weather-icon">
          <img :src="`https://www.metaweather.com/static/img/weather/${weatherData.abbr}.svg`">
        </div>
        <div class="weather-temp">
          <span>{{weatherData.temp}}°</span>
        </div>
      </div>
      <input v-model="message" placeholder="edit me">
      <p>Message is: {{ message }}</p>
    </div>
  </template>
  <style>
      img{
          width: 200px;
      }
  </style>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script>
        // export default {
        //   name: "Weather",
        //   data() {
        //     return {
        //       weatherDataList: []
        //     };
        //   },
        //   methods: {
        //     getWeatherData() {
        //       fetch("weather.json")
        //         .then(response => response.json())
        //         .then(data => (this.weatherDataList = data));
        //     }
        //   }
        // };
//         const axios = require('axios')

// axios
//   .post('', {
//     todo: 'Buy the milk'
//   })
  
//     created() {
//   // Simple POST request with a JSON body using fetch
//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ title: "Vue POST Request Example" })
//   };
//   fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
//     .then(response => response.json())
//     .then(data => (this.postId = data.id));
// }

var axios = require('axios');
var data = JSON.stringify({
  "username":"mate",
  "password":"123.321"
});

var config = {
  method: 'post',
  url: 'https://copartintegration.caucasusauto.com/api/v1/auth',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));

  localStorage.setItem('storedData1', response.data.accessToken);
  localStorage.setItem('storedData2', response.data.refreshToken);
  
  console.log(JSON.stringify(localStorage.storedData1));
  console.log(JSON.stringify(localStorage.storedData2));
})
.catch(function (error) {
  console.log(error);
});




    </script>

