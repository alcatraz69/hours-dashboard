import { Grid, Switch } from "@mui/material";
import React, { useState } from "react";
import Chart from "react-apexcharts";

const BudgetChart = () => {
  const [chartState] = useState({
    series: [33, 48, 19],
    options: {
      chart: {
        type: "donut",
      },
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    },
  });
  return (
    <>
      <Grid container alignItems='center' justifyContent='space-between' px={2}>
        <Grid item xs={2}>Budget</Grid>
        <Grid item container alignItems="center" xs={6}>
          <Grid item>Profitability</Grid>
          <Switch />
          <Grid item>Status</Grid>
        </Grid>
      </Grid>
      <Chart
        type="donut"
        height="420"
        width="500"
        options={chartState.options}
        series={chartState.series}
      />
    </>
  );
};

export default BudgetChart;
