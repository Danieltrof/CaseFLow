import { useEffect, useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import apiClient from "../api/apiClient";

function HomePage() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    apiClient
      .get("/test")
      .then((response) => setMessage(response.data.message))
      .catch(() => setMessage("Failed to connect to backend"));
  }, []);

  return (
    <Box sx={{ padding: 4 }}>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          CaseFlow
        </Typography>

        <Typography variant="body1">
          {message}
        </Typography>
      </Paper>
    </Box>
  );
}

export default HomePage;