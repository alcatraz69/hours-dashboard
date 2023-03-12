import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BarContainerWrapper = styled(Grid)`
  width: '100%',
  minHeight: '20px',
  borderRadius: '0.25rem',
`;

export const BarItem = styled(Grid)(({ color }) => ({
    background: `${color}`,
    width: '100%',
    height: '100%',
    minHeight: '20px',
    borderTop: 0,
    borderRadius: '0.5rem',
  }));

  export const BarContainer = styled(Grid)(() => ({
    '&:first-child': {
      '.bar-item': {
        borderRadius: ' 0.25rem 0 0 0.25rem',
      },
    },
    '&:last-child': {
      '.bar-item': {
        borderRadius: '0 0.25rem 0.25rem 0',
      },
    },
  }));