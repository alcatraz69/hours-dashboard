import React from "react";
import { Avatar, Grid } from "@mui/material";
import { BudgetCard, FillButton, OutlineButton } from "./styles";
import ProgressBar from "../../components/ProgressBar";
import BudgetData from "./utils";

const BudgetStatus = () => {
  return (
    <Grid item padding={6}>
      <Grid container justifyContent="space-between" alignItems="center" xs={9}>
        <h1> Budget Status </h1>
        <FillButton item>+ Add New Project</FillButton>
        <OutlineButton item>+ Download Report</OutlineButton>
        <OutlineButton item>+ DD/MM/YY - DD/MM/YY</OutlineButton>
        <OutlineButton item>+ Filter</OutlineButton>
      </Grid>
      <Grid container justifyContent='space-between'>
        {Array.isArray(BudgetData) &&
          BudgetData.length &&
          BudgetData.map((budgetItem) => {
            return (
              <BudgetCard item container key={budgetItem.id}>
                <Grid item>
                  <p>{budgetItem.website}</p>
                  <p className="subtext">{budgetItem.name}</p>
                </Grid>
                <Grid item>
                  <Avatar
                    alt="avatar img"
                    src={budgetItem.image}
                  />
                </Grid>
                <Grid item container justifyContent="space-between">
                  <p className="subtext">Total Budget</p>
                  <p className="budget-value">{budgetItem.budget}</p>
                </Grid>
                <Grid item container justifyContent="space-between">
                  <p className="subtext">Profitability</p>
                  <p className="budget-value">{budgetItem.profit}</p>
                </Grid>
                <ProgressBar bgColor={budgetItem.bgcolor} fgColor={budgetItem.fgcolor} completed={budgetItem.completed}/>
                <Grid item container justifyContent="space-between">
                  <p className="small-text">Actual hours: 1.100</p>
                  <p className="small-text">1000 sold hours</p>
                </Grid>
              </BudgetCard>
            );
          })}
      </Grid>
    </Grid>
  );
};

export default BudgetStatus;
