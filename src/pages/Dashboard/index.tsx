import { Container, Grid } from "@mui/material";
import React from "react";
import BudgetChart from "../../components/BudgetChart";
import ProjectCard from "../../components/ProjectCard";
import RevenueChart from "../../components/RevenueChart";
import TeamMood from "../../components/TeamMood";
import { ChartBox } from "./styles";
import { ProjectsDetails } from "./utils";

const Dashboard = () => {
  return (
    <Grid container padding={6} justifyContent='space-between'>
      <Grid item xs={9.5}>
        <Grid container justifyContent="space-between">
          {Array.isArray(ProjectsDetails) &&
            ProjectsDetails.length &&
            ProjectsDetails.map((item, index) => {
              return <ProjectCard item={item} key={index} />;
            })}
        </Grid>
        <Grid container my={6} justifyContent='space-between'>
          <ChartBox item xs={6.5}>
            <RevenueChart />
          </ChartBox>
          <ChartBox item container xs={5} justifyContent='center' alignItems='center'>
            <BudgetChart />
          </ChartBox>
        </Grid>
      </Grid>
      <Grid item>
        <TeamMood />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
