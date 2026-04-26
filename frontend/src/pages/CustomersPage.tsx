import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCustomers, createCustomer } from "../api/customers";
import { Box, Typography, Paper, List, ListItem, TextField, Button } from "@mui/material";
import { useState } from "react";

function CustomersPage() {
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["customers"],
    queryFn: getCustomers,
  });

  const mutation = useMutation({
    mutationFn: createCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      setForm({ name: "", email: "", phone: "", companyName: "" });
    },
  });

  const handleSubmit = () => {
    mutation.mutate(form);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading customers</p>;

  return (
    <Box sx={{ padding: 4 }}>
      <Paper sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h5">Add Customer</Typography>

        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <TextField
          label="Phone"
          fullWidth
          margin="normal"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <TextField
          label="Company Name"
          fullWidth
          margin="normal"
          value={form.companyName}
          onChange={(e) => setForm({ ...form, companyName: e.target.value })}
        />

        <Button variant="contained" onClick={handleSubmit}>
          Create
        </Button>
      </Paper>

      <Paper sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Customers
        </Typography>

        <List>
          {data?.map((customer) => (
            <ListItem key={customer.id}>
              {customer.name} ({customer.companyName})
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

export default CustomersPage;