import { Link, Outlet, useLocation } from "react-router-dom";
import { Box, Drawer, List, ListItemButton, ListItemText, Typography } from "@mui/material";

const drawerWidth = 220;

function MainLayout() {
  const location = useLocation();

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
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;
