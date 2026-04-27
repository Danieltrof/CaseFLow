import { Link, Outlet, useLocation } from "react-router-dom";
import { Box, Drawer, List, ListItemButton, ListItemText, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useAuth } from "../features/auth/AuthContext";

const drawerWidth = 220;

function MainLayout() {
  const location = useLocation();

  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            padding: 2,
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          CaseFlow
        </Typography>

        <List>
          <ListItemButton sx={{ marginBottom: 1 }}
            component={Link}
            to="/"
            selected={location.pathname === "/"}
            >
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton sx={{ marginBottom: 1 }}
            component={Link}
            to="/customers"
            selected={location.pathname === "/customers"}
            >
            <ListItemText primary="Customers" />
          </ListItemButton>

          <ListItemButton sx={{ marginBottom: 1 }}
            component={Link}
            to="/cases"
            selected={location.pathname === "/cases"}
            >
            <ListItemText primary="Cases" />
          </ListItemButton>
        </List>

        <Box sx={{ marginTop: "auto" }}>
          <Typography variant="body2" color="text.secondary">
            {user?.email}
          </Typography>

          <Typography variant="caption" color="text.secondary">
            Role: {user?.role}
          </Typography>

          <Button
            variant="outlined"
            fullWidth
            sx={{ marginTop: 2 }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;
