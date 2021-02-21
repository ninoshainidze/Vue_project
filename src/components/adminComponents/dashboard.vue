<template>
    <div class="dashboard mt-3">
      <div class="dashboard_content">
              <div>
                <h4>Website views</h4>
                <mdb-container>
                  <mdb-radar-chart
                    :data="radarChartData"
                    :options="radarChartOptions"
                    :width="600"
                    :height="300"
                  ></mdb-radar-chart>
                </mdb-container>
              </div>
            
              <div>
                <h4>Daily sails</h4>
                <mdb-container>
                  <mdb-horizontal-bar-chart
                    :data="horizontalBarChartData"
                    :options="horizontalBarChartOptions"
                    :width="500"
                    :height="300"
                  ></mdb-horizontal-bar-chart>
                </mdb-container>
              </div>
      <div>
        <h4>Completed tasks</h4>
        <mdb-container>
          <mdb-scatter-chart
            :data="scatterChartData"
            :options="scatterChartOptions"
            :width="600"
            :height="300"
          ></mdb-scatter-chart>
        </mdb-container>
      </div>
    </div>
    </div>
</template>
  
<script>

// import store from '../.././store'
import {mdbHorizontalBarChart, mdbRadarChart, mdbContainer, mdbScatterChart } from "mdbvue";


  
// if(localStorage.getItem("isLogin")) {
//     store.getters["auth"]["loggedIn"] = true 
    
// }
  
  export default {
    name: "dashboard",
    components: {
      mdbHorizontalBarChart,
      mdbRadarChart,
      mdbContainer,
      mdbScatterChart
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
        },
        scatterChartData: {
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: "rgba(255, 99, 132, 0.1)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 0.7,
              data: [
                {
                  x: 1,
                  y: -1.711e-2
                },
                {
                  x: 1.26,
                  y: -2.708e-2
                },
                {
                  x: 1.58,
                  y: -4.285e-2
                },
                {
                  x: 2.0,
                  y: -6.772e-2
                },
                {
                  x: 2.51,
                  y: -1.068e-1
                },
                {
                  x: 3.16,
                  y: -1.681e-1
                },
                {
                  x: 3.98,
                  y: -2.635e-1
                },
                {
                  x: 5.01,
                  y: -4.106e-1
                },
                {
                  x: 6.31,
                  y: -6.339e-1
                },
                {
                  x: 7.94,
                  y: -9.659e-1
                },
                {
                  x: 10.0,
                  y: -1.445
                },
                {
                  x: 12.6,
                  y: -2.11
                },
                {
                  x: 15.8,
                  y: -2.992
                },
                {
                  x: 20.0,
                  y: -4.102
                },
                {
                  x: 25.1,
                  y: -5.429
                },
                {
                  x: 31.6,
                  y: -6.944
                },
                {
                  x: 39.8,
                  y: -8.607
                },
                {
                  x: 50.1,
                  y: -1.038e1
                },
                {
                  x: 63.1,
                  y: -1.223e1
                },
                {
                  x: 79.4,
                  y: -1.413e1
                },
                {
                  x: 100.0,
                  y: -1.607e1
                },
                {
                  x: 126,
                  y: -1.803e1
                },
                {
                  x: 158,
                  y: -2e1
                },
                {
                  x: 200,
                  y: -2.199e1
                },
                {
                  x: 251,
                  y: -2.398e1
                },
                {
                  x: 316,
                  y: -2.597e1
                },
                {
                  x: 398,
                  y: -2.797e1
                },
                {
                  x: 501,
                  y: -2.996e1
                },
                {
                  x: 631,
                  y: -3.196e1
                },
                {
                  x: 794,
                  y: -3.396e1
                },
                {
                  x: 1000,
                  y: -3.596e1
                }
              ]
            }
          ]
        },
        scatterChartOptions: {
          responsive: false,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
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
        }
      
      };
    }
  };
  </script>
  
  
  <style>
      .dashboard{
          display: flex;
      }
      .dashboard_content{
        margin: auto;
        margin-top: 80px;
      }
  </style>