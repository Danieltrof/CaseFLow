import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Alert,
} from "@mui/material";

import { login } from "../api/auth";
import { useAuth } from "../features/auth/AuthContext";

function LoginPage() {
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const [form, setForm] = useState({
    email: "admin@caseflow.com",
    password: "Admin123!",
  });

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      loginUser(data.token, data.email, data.role);
      navigate("/");
    },
  });

  const handleSubmit = () => {
    mutation.mutate(form);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Paper sx={{ padding: 4, width: 400 }}>
        <Typography variant="h4" gutterBottom>
          CaseFlow Login
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
          Demo account: admin@caseflow.com / Admin123!
        </Typography>

        {mutation.isError && (
          <Alert severity="error" sx={{ marginBottom: 2 }}>
            Invalid email or password
          </Alert>
        )}

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ marginTop: 2 }}
          onClick={handleSubmit}
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Logging in..." : "Login"}
        </Button>
      </Paper>
    </Box>
  );
}

export default LoginPage;