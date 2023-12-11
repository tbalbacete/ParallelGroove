import { Grid, CircularProgress } from "@mui/material";

export const PageSpinner: React.FC = () => {
    return (
      <Grid
        id="PageSpinner"
        aria-busy={true}
        sx={{ minHeight: "100%", p: 10 }}
        container
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress aria-label="Loading Page" />
      </Grid>
    );
  };