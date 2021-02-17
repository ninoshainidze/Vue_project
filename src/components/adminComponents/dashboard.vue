<template>
    <div class="dashboard mt-3">
      <!-- <h1>{{$t('dashboard')}}</h1> -->
      <mdb-container>
        <mdb-radar-chart
          :data="radarChartData"
          :options="radarChartOptions"
          :width="600"
          :height="300"
        ></mdb-radar-chart>
      </mdb-container>
      <mdb-container>
        <mdb-horizontal-bar-chart
          :data="horizontalBarChartData"
          :options="horizontalBarChartOptions"
          :width="500"
          :height="300"
        ></mdb-horizontal-bar-chart>
      </mdb-container>
    </div>
</template>
  
<script>

import store from '../.././store'
import {mdbHorizontalBarChart, mdbRadarChart, mdbContainer } from "mdbvue";


  
if(localStorage.getItem("isLogin")) {
    store.getters["auth"]["loggedIn"] = true 
    
}
  
  export default {
    name: "dashboard",
    components: {
        mdbHorizontalBarChart,
      mdbRadarChart,
      mdbContainer
    },
    data() {
      return {
        horizontalBarChartData: {
          labels: [
            "Red",
            "Blue",
            "Yellow",
            "Green",
            "Purple",
            "Orange"
          ],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
              ],
              borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        horizontalBarChartOptions: {
          responsive: false,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                barPercentage: 1,
                gridLines: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)"
                }
              }
            ],
            yAxes: [
              {
                gridLines: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)"
                }
              }
            ]
          }
        },
        radarChartData: {
          labels: [
            "Eating",
            "Drinking",
            "Sleeping",
            "Designing",
            "Coding",
            "Cycling",
            "Running"
          ],
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: "rgba(255, 99, 132, 0.1)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 0.7,
              data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
              label: "My Second dataset",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 0.7,
              data: [28, 48, 40, 19, 96, 27, 100]
            }
          ]
        },
        radarChartOptions: {
          responsive: false,
          maintainAspectRatio: false
        }
      };
    }
  };
  </script>
  
  
  <style>
      .dashboard{
          display: flex;
      }
  </style>