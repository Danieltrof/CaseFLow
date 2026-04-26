import { Link, Outlet } from "react-router-dom";
import { Box, Drawer, List, ListItemButton, ListItemText, Typography } from "@mui/material";

const drawerWidth = 220;

function MainLayout() {
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
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItemButton>

          <ListItemButton component={Link} to="/customers">
            <ListItemText primary="Customers" />
          </ListItemButton>

          <ListItemButton component={Link} to="/cases">
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