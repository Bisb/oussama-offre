import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BuildIcon from '@mui/icons-material/Build';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SpeedIcon from '@mui/icons-material/Speed';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AssessmentIcon from '@mui/icons-material/Assessment';
import HelpIcon from '@mui/icons-material/Help';
import Dashboard from './components/dashboard/Dashboard';
import VehicleStatus from './components/vehicle/VehicleStatus';
import Maintenance from './components/maintenance/Maintenance';
import Fuel from './components/fuel/Fuel';
import Performance from './components/performance/Performance';
import Planning from './components/planning/Planning';
import Reports from './components/reports/Reports';
import Support from './components/support/Support';

// Créer un thème personnalisé moderne
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1', // Indigo vif
      light: '#818cf8',
      dark: '#4f46e5',
    },
    secondary: {
      main: '#ec4899', // Rose moderne
      light: '#f472b6',
      dark: '#db2777',
    },
    background: {
      default: '#0f172a', // Slate foncé
      paper: '#1e293b', // Slate plus clair pour les cartes
    },
    success: {
      main: '#10b981', // Émeraude
      light: '#34d399',
      dark: '#059669',
    },
    error: {
      main: '#ef4444', // Rouge moderne
      light: '#f87171',
      dark: '#dc2626',
    },
    warning: {
      main: '#f59e0b', // Ambre
      light: '#fbbf24',
      dark: '#d97706',
    },
    text: {
      primary: '#f8fafc',
      secondary: 'rgba(248, 250, 252, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 600,
      fontSize: '2.5rem',
      background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h4: {
      fontWeight: 500,
      color: '#f8fafc',
    },
    h6: {
      fontWeight: 500,
      letterSpacing: 1,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, #1e293b 0%, #0f172a 100%)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          backdropFilter: 'blur(4px)',
          borderRadius: 16,
          border: '1px solid rgba(248, 250, 252, 0.1)',
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          background: 'rgba(248, 250, 252, 0.02)',
          borderBottom: '1px solid rgba(248, 250, 252, 0.05)',
        },
        title: {
          color: '#6366f1',
          fontWeight: 500,
          fontSize: '1.2rem',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#2e1065', // Violet foncé pour la barre latérale
          borderRight: '1px solid rgba(248, 250, 252, 0.05)',
          backgroundImage: 'linear-gradient(to bottom, #2e1065, #4c1d95)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#1e1b4b', // Indigo foncé pour la barre supérieure
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(4px)',
          borderBottom: '1px solid rgba(248, 250, 252, 0.05)',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: '4px 8px',
          '&:hover': {
            background: 'rgba(99, 102, 241, 0.15)',
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: '#818cf8',
          minWidth: 40,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: '#f8fafc',
          fontWeight: 500,
        },
      },
    },
  },
});

const drawerWidth = 240;

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Tableau de bord', icon: <DashboardIcon />, path: '/' },
    { text: 'État du véhicule', icon: <DirectionsCarIcon />, path: '/vehicle' },
    { text: 'Maintenance', icon: <BuildIcon />, path: '/maintenance' },
    { text: 'Carburant', icon: <LocalGasStationIcon />, path: '/fuel' },
    { text: 'Performance', icon: <SpeedIcon />, path: '/performance' },
    { text: 'Planning', icon: <EventNoteIcon />, path: '/planning' },
    { text: 'Rapports', icon: <AssessmentIcon />, path: '/reports' },
    { text: 'Support', icon: <HelpIcon />, path: '/support' },
  ];

  const DrawerContent = () => {
    const navigate = useNavigate();
    
    return (
      <div>
        <Toolbar />
        <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text} 
              onClick={() => {
                navigate(item.path);
                setMobileOpen(false);
              }}
            >
              <ListItemIcon sx={{ color: 'primary.main' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex' }}>
          <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                Auto Dashboard
              </Typography>
            </Toolbar>
          </AppBar>

          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          >
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              <DrawerContent />
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
              open
            >
              <DrawerContent />
            </Drawer>
          </Box>

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              mt: 8,
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/vehicle" element={<VehicleStatus />} />
              <Route path="/maintenance" element={<Maintenance />} />
              <Route path="/fuel" element={<Fuel />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/planning" element={<Planning />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
