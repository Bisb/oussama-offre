import React from 'react';
import { Grid, Card, CardContent, CardHeader, Typography, Box, Divider, Button } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ScheduleIcon from '@mui/icons-material/Schedule';

const commonCardProps = {
  sx: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
};

const MaintenanceItem = ({ title, date, description, status, km }: {
  title: string;
  date: string;
  description: string;
  status: 'completed' | 'pending' | 'upcoming';
  km?: string;
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return 'success.main';
      case 'pending':
        return 'warning.main';
      case 'upcoming':
        return 'text.secondary';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon sx={{ color: 'success.main', mr: 1 }} />;
      case 'pending':
        return <BuildIcon sx={{ color: 'warning.main', mr: 1 }} />;
      case 'upcoming':
        return <ScheduleIcon sx={{ color: 'text.secondary', mr: 1 }} />;
    }
  };

  return (
    <Box sx={{ mb: 3, p: 2, bgcolor: 'background.paper', borderRadius: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        {getStatusIcon()}
        <Typography variant="h6" color={getStatusColor()}>
          {title}
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        {date} {km && `• ${km}`}
      </Typography>
      <Typography variant="body1">
        {description}
      </Typography>
    </Box>
  );
};

const Maintenance = () => {
  return (
    <Grid container spacing={3}>
      {/* Prochaines maintenances */}
      <Grid item xs={12} lg={6}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Prochaines maintenances"
            titleTypographyProps={{ 
              sx: { 
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'primary.light',
              } 
            }}
            action={
              <Button 
                variant="contained" 
                size="small"
                sx={{ 
                  bgcolor: 'primary.main',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  }
                }}
              >
                Planifier
              </Button>
            }
          />
          <CardContent>
            <MaintenanceItem
              title="Vidange d'huile"
              date="15 Avril 2024"
              description="Vidange d'huile moteur et remplacement du filtre à huile"
              status="pending"
              km="Dans 2,500 km"
            />
            <MaintenanceItem
              title="Plaquettes de frein"
              date="1 Mai 2024"
              description="Remplacement des plaquettes de frein avant"
              status="upcoming"
              km="Dans 5,000 km"
            />
            <MaintenanceItem
              title="Révision générale"
              date="15 Juin 2024"
              description="Contrôle général du véhicule et mise à jour du logiciel"
              status="upcoming"
              km="Dans 10,000 km"
            />
          </CardContent>
        </Card>
      </Grid>

      {/* Historique des maintenances */}
      <Grid item xs={12} lg={6}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Historique des maintenances"
            titleTypographyProps={{ 
              sx: { 
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'primary.light',
              } 
            }}
          />
          <CardContent>
            <MaintenanceItem
              title="Changement des pneus"
              date="1 Mars 2024"
              description="Remplacement des 4 pneus et équilibrage"
              status="completed"
            />
            <MaintenanceItem
              title="Révision des 40,000 km"
              date="15 Février 2024"
              description="Contrôle général, changement des filtres et des bougies"
              status="completed"
            />
            <MaintenanceItem
              title="Vidange d'huile"
              date="1 Janvier 2024"
              description="Vidange d'huile moteur et remplacement du filtre à huile"
              status="completed"
            />
          </CardContent>
        </Card>
      </Grid>

      {/* Statistiques de maintenance */}
      <Grid item xs={12}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Statistiques de maintenance"
            titleTypographyProps={{ 
              sx: { 
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'primary.light',
              } 
            }}
          />
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <Typography variant="h3" color="primary.light" gutterBottom>
                    42,530
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Kilométrage actuel
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <Typography variant="h3" color="primary.light" gutterBottom>
                    12
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Interventions cette année
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <Typography variant="h3" color="primary.light" gutterBottom>
                    98%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Taux de maintenance préventive
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Maintenance; 