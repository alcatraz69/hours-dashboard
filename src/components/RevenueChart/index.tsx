import { Grid, Switch } from "@mui/material";
import React, { useState } from "react";
import Chart from "react-apexcharts";

const RevenueChart = () => {
  const [chartState] = useState({
    series: [
      {
        name: "sales",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
            show: false,
        }
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "19 Jan",
          "20 Feb",
          "20 Mar",
          "20 Apr",
          "20 May",
          "20 Jun",
          "20 Jul",
          "20 Aug",
          "20 Sep",
        ],
      },
    },
  });
  return (
    <>
      <Grid container alignItems='center' justifyContent='space-between' px={2}>
        <Grid item xs={4}>Total Revenue</Grid>
        <Grid item container alignItems="center" xs={4}>
          <Grid item>Monthly</Grid>
          <Switch />
          <Grid item>Weekly</Grid>
        </Grid>
      </Grid>
      <Chart
        type="line"
        height="400" 
        width="550"
        options={chartState.options}
        series={chartState.series}
      />
    </>
  );
};

export default RevenueChart;
