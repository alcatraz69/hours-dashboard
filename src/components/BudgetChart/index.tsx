import React from "react";
import { Grid, Switch } from "@mui/material";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const BudgetChart = () => {
  const series = [33, 48, 19];

  const options: ApexOptions = {
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
  };
  return (
    <>
      <Grid container alignItems="center" justifyContent="space-between" px={2}>
        <Grid item xs={2}>
          Budget
        </Grid>
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
        options={options}
        series={series}
      />
    </>
  );
};

export default BudgetChart;
