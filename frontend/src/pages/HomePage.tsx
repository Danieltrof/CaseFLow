import { Box, Typography, Paper } from "@mui/material";

function HomePage() {
  return (
    <Box>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to CaseFlow
        </Typography>

        <Typography variant="body1" color="text.secondary">
          CaseFlow is an internal case management system for tracking customers,
          cases, priorities, and business workflows.
        </Typography>
      </Paper>
    </Box>
  );
}

export default HomePage;