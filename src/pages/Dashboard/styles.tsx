import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ChartBox = styled(Grid)`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 0.8rem 0.5rem;
  border-radius: 5px;

  .emoji-slider{
    padding: 0 0.8rem;
  }

  hr{
    background-color: lightgray;
    opacity: 0.2;
    margin: 1rem 0
  }

  .role{
    font-size: 14px;
    color: grey;
  }
`;