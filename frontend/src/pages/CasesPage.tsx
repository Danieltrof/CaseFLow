import { useQuery } from "@tanstack/react-query";
import { getCases } from "../api/cases";
import { Box, Typography, Paper, List, ListItem } from "@mui/material";

function CasesPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cases"],
    queryFn: getCases,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading cases</p>;

  return (
    <Box sx={{ padding: 4 }}>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Cases
        </Typography>

        <List>
          {data?.map((c) => (
            <ListItem key={c.id}>
              {c.title} - {c.customerName} ({c.priority})
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

export default CasesPage;