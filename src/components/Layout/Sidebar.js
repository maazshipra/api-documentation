import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  IconButton,
  InputBase,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import menuConfig from 'src/components/menuConfig';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

function Sidebar({ drawerWidth, mobileOpen, onClose }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isPathActive = (node) => {
    if (node.path === location.pathname) return true;
    if (node.children) {
      return node.children.some(isPathActive);
    }
    return false;
  };

  const renderNode = (node, level = 0) => {
    const paddingLeft = 2 + level * 2;

    // API endpoint
    if (node.path) {
      return (
        <ListItem key={node.path} disablePadding>
          <ListItemButton
            component={NavLink}
            to={node.path}
            sx={{
              pl: paddingLeft,
              py: 0.75,
              borderLeft: '3px solid transparent',
              '&.active': {
                borderLeftColor: 'primary.main',
                backgroundColor: 'transparent',
              },
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            }}
          >
            {node.method && (
              <Chip
                label={node.method}
                size="small"
                variant="outlined"
                color={
                  node.method === 'GET'
                    ? 'success'
                    : node.method === 'POST'
                      ? 'warning'
                      : 'primary'
                }
                sx={{
                  mr: 1,
                  height: 20,
                  fontSize: '0.65rem',
                }}
              />
            )}

            <ListItemText
              primary={node.label}
              primaryTypographyProps={{
                fontSize: '0.85rem',
                fontWeight: 400,
              }}
            />
          </ListItemButton>
        </ListItem>
      );
    }

    // Folder
    return (
      <Accordion
        key={node.title}
        disableGutters
        elevation={0}
        square
        defaultExpanded={isPathActive(node)}
        sx={{
          '&:before': { display: 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fontSize: 18 }} />}
          sx={{
            minHeight: 36,
            '& .MuiAccordionSummary-content': {
              margin: 0,
            },
          }}
        >
          <Typography
            sx={{
              pl: level * 2,
              fontSize: '0.8rem',
              fontWeight: 600,
              color: 'text.secondary',
            }}
          >
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
      {/* Top Actions */}
      <Box
        sx={{
          px: 1,
          py: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          borderBottom: '1px solid',
          borderColor: 'divider',
          position: 'sticky',
          top: 0,
          backgroundColor: 'background.paper',
          zIndex: 1,
        }}
      >
        {/* Add Button */}
        <IconButton size="small">
          <AddIcon
            fontSize="small"
            onClick={() => {
              navigate('/api-docs/create');
            }}
          />
        </IconButton>

        {/* Search */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            px: 1,
            py: 0.5,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1,
          }}
        >
          <SearchIcon sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />

          <InputBase
            placeholder="Search collections"
            sx={{
              fontSize: '0.85rem',
              width: '100%',
            }}
          />
        </Box>
      </Box>

      {/* Sidebar Tree */}
      <List disablePadding>{menuConfig.map((node) => renderNode(node))}</List>
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
