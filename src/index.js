import "./styles.css";
import { sleep } from "./utils";
import * as d3 from "d3";
import Chart from "chart.js";

async function draw() {
  var ctx = document.getElementById("chart");
  var data = await d3.csv("data/data.csv");
  var keys = data.map(r => r.name);
  var values = data.map(r => +r.value);
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: keys,
      datasets: [
        {
          backgroundColor: "steelblue",
          label: "濃度",
          data: values
        }
      ]
    }
  });
  await sleep(1000);
  data = await d3.csv("data/data2.csv");
  keys = data.map(r => r.name);
  values = data.map(r => +r.value);
  myChart.data.datasets = [
    {
      backgroundColor: "steelblue",
      label: "濃度",
      data: values
    }
  ];
  myChart.update({ duration: 0 });
}

draw();
