import { useQuery } from "@tanstack/react-query";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { getDashboardSummary } from "../api/dashboard";

function DashboardPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["dashboard-summary"],
    queryFn: getDashboardSummary,
    refetchOnWindowFocus: true,
  });

  if (isLoading) return <p>Loading dashboard...</p>;
  if (isError || !data) return <p>Error loading dashboard</p>;

  const cards = [
    { label: "Total Customers", value: data.totalCustomers },
    { label: "Total Cases", value: data.totalCases },
    { label: "Open Cases", value: data.openCases },
    { label: "High Priority Cases", value: data.highPriorityCases },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={card.label}>
            <Paper sx={{ padding: 3, borderRadius: 2 }}>
              <Typography variant="body2" color="text.secondary">
                {card.label}
              </Typography>

              <Typography variant="h4">
                {card.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default DashboardPage;