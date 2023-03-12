import React from "react";
import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { ChartBox } from "../../pages/Dashboard/styles";
import TeamData from "./utils";
import EmojiSlider from "../EmojiSlider";

const TeamMood = () => {
  return (
    <ChartBox width="13rem">
      <p>Team Mood</p>
      {Array.isArray(TeamData) &&
        TeamData.length &&
        TeamData.map((item) => {
          return (
            <>
              <Grid
                container
                key={item.id}
                justifyContent="center"
                height="4rem"
                alignItems="center"
                pl={1}
              >
                <Grid item xs={4}>
                  <Avatar alt="avatar img" src={item.image} />
                </Grid>
                <Grid item container direction="column" xs>
                  <Grid item>{item.name}</Grid>
                  <Grid item className="role">{item.role}</Grid>
                </Grid>
              </Grid>
              <div className="emoji-slider">
                <EmojiSlider />
              </div>
              <hr />
            </>
          );
        })}
    </ChartBox>
  );
};

export default TeamMood;
