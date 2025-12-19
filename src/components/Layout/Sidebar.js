import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink, useLocation } from 'react-router-dom';
import menuConfig from 'src/components/menuConfig';

function Sidebar({ drawerWidth, mobileOpen, onClose }) {
  const location = useLocation();

  const isPathActive = (node) => {
    if (node.path === location.pathname) return true;
    if (node.children) {
      return node.children.some(isPathActive);
    }
    return false;
  };

  const renderNode = (node, level = 0) => {
    // API endpoint
    if (node.path) {
      return (
        <ListItem key={node.path} disablePadding>
          <ListItemButton
            component={NavLink}
            to={node.path}
            sx={{
              pl: 2 + level * 2,
              '&.active': {
                backgroundColor: 'action.selected',
              },
            }}
          >
            {node.method && (
              <Chip
                label={node.method}
                size="small"
                color={
                  node.method === 'POST'
                    ? 'warning'
                    : node.method === 'GET'
                      ? 'success'
                      : 'primary'
                }
                sx={{ mr: 1 }}
              />
            )}
            <ListItemText primary={node.label} />
          </ListItemButton>
        </ListItem>
      );
    }

    // Folder / Group
    return (
      <Accordion
        key={node.title}
        disableGutters
        elevation={0}
        defaultExpanded={isPathActive(node)}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight={600} sx={{ pl: level * 2 }}>
            {node.title}
          </Typography>
        </AccordionSummary>

        <AccordionDetails sx={{ p: 0 }}>
          <List disablePadding>
            {node.children.map((child) => renderNode(child, level + 1))}
          </List>
        </AccordionDetails>
      </Accordion>
    );
  };

  const drawer = (
    <Box>
      <Toolbar>
        <Typography variant="h6">API Docs</Typography>
      </Toolbar>

      <List>{menuConfig.map((node) => renderNode(node))}</List>
    </Box>
  );

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth } }}>
      {/* Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      {/* Desktop */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Sidebar;
