import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FillButton = styled(Grid)`
  background: #007573;
  color: #fff;
  padding: 0.5rem 0.8rem;
  border-radius: 0.2rem;
`;

export const OutlineButton = styled(Grid)`
  border: 1px solid #007573;
  color: #007573;
  padding: 0.5rem 0.8rem;
  border-radius: 0.2rem;
`;

export const BudgetCard = styled(Grid)`
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 1rem;
  border-radius: 0.2rem;
  height: 12rem;
  width: 18rem;

  p{
    margin: 0;
  }

  .subtext{
    font-size: 14px;
    color: grey;
  }

  .budget-value{
    font-size: 14px;
    color: black;
  }

  .small-text{
    font-size: 12px;
  }
`;