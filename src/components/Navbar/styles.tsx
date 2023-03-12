import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const NavbarWrapper = styled(Grid)`
  background: #2F3549;
  color: #fff;
  padding: 0.5rem 2rem;
  justify-content: space-between;
  align-items: center;

  h1{
    margin: 0;
    color: #FFF;

    span{
      color: #00CCC8;
    }
  }
`;
