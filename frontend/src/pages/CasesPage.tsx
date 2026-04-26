import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";

import { getCases, createCase } from "../api/cases";
import { getCustomers } from "../api/customers";

function CasesPage() {
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
    customerId: "",
  });

  const {
    data: cases = [],
    isLoading: casesLoading,
    isError: casesError,
  } = useQuery({
    queryKey: ["cases"],
    queryFn: getCases,
  });

  const {
    data: customers = [],
    isLoading: customersLoading,
    isError: customersError,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: getCustomers,
  });

  const mutation = useMutation({
    mutationFn: createCase,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cases"] });

      setForm({
        title: "",
        description: "",
        priority: "Medium",
        dueDate: "",
        customerId: "",
      });
    },
  });

  const handleSubmit = () => {
    if (!form.customerId) {
      alert("Please select a customer");
      return;
    }

    mutation.mutate({
      title: form.title,
      description: form.description,
      priority: form.priority,
      dueDate: form.dueDate || undefined,
      customerId: Number(form.customerId),
    });
  };

  if (casesLoading || customersLoading) return <p>Loading...</p>;
  if (casesError || customersError) return <p>Error loading data</p>;

  return (
    <Box>
      <Paper sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h5" gutterBottom>
          Add Case
        </Typography>

        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <TextField
          label="Description"
          fullWidth
          multiline
          rows={3}
          margin="normal"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <TextField
          select
          label="Priority"
          fullWidth
          margin="normal"
          value={form.priority}
          onChange={(e) => setForm({ ...form, priority: e.target.value })}
        >
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Critical">Critical</MenuItem>
        </TextField>

        <TextField
          select
          label="Customer"
          fullWidth
          margin="normal"
          value={form.customerId}
          onChange={(e) => setForm({ ...form, customerId: e.target.value })}
        >
          {customers.map((customer) => (
            <MenuItem key={customer.id} value={customer.id}>
              {customer.name} ({customer.companyName})
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Due Date"
          type="date"
          fullWidth
          margin="normal"
          slotProps={{ inputLabel: { shrink: true } }}
          value={form.dueDate}
          onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
        />

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Creating..." : "Create"}
        </Button>
      </Paper>

      <Paper sx={{ padding: 3 }}>
  <Typography variant="h4" gutterBottom>
    Cases
  </Typography>

  {cases.length === 0 ? (
    <Typography color="text.secondary">No cases yet</Typography>
  ) : (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Created</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {cases.map((c) => (
            <TableRow
              key={c.id}
              sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
            >
              <TableCell>{c.title}</TableCell>
              <TableCell>{c.customerName}</TableCell>
              <TableCell>
                <Chip
                  label={c.status}
                  size="small"
                  color={c.status === "Closed" ? "success" : "default"}
                />
              </TableCell>
              <TableCell>
                <Chip
                  label={c.priority}
                  size="small"
                  color={
                    c.priority === "High"
                      ? "error"
                      : c.priority === "Critical"
                      ? "error"
                      : c.priority === "Medium"
                      ? "warning"
                      : "default"
                  }
                />
              </TableCell>
              <TableCell>
                {c.dueDate
                  ? new Date(c.dueDate).toLocaleDateString()
                  : "No due date"}
              </TableCell>
              <TableCell>
                {new Date(c.createdAt).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )}
</Paper>
    </Box>
  );
}

export default CasesPage;
