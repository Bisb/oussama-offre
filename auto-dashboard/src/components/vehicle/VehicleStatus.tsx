import React from 'react';
import { Grid, Card, CardContent, CardHeader, Typography, Box, LinearProgress } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';

// Données simulées pour les graphiques
const temperatureData = [
  {
    id: 'temperature',
    data: [
      { x: '00:00', y: 85 },
      { x: '00:10', y: 87 },
      { x: '00:20', y: 90 },
      { x: '00:30', y: 88 },
      { x: '00:40', y: 86 },
      { x: '00:50', y: 89 },
      { x: '01:00', y: 87 },
    ],
  },
];

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

const VehicleStatus = () => {
  return (
    <Grid container spacing={3}>
      {/* État général */}
      <Grid item xs={12} md={6} lg={4}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="État général"
            titleTypographyProps={{ 
              sx: { 
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'primary.light',
              } 
            }}
          />
          <CardContent>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" color="text.secondary">
                État du moteur
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <Box sx={{ flexGrow: 1, mr: 1 }}>
                  <LinearProgress 
                    variant="determinate" 
                    value={95} 
                    sx={{ 
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: 'rgba(99, 102, 241, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#6366f1',
                      }
                    }}
                  />
                </Box>
                <Typography variant="body2" color="primary.light">95%</Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" color="text.secondary">
                État de la batterie
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <Box sx={{ flexGrow: 1, mr: 1 }}>
                  <LinearProgress 
                    variant="determinate" 
                    value={88} 
                    sx={{ 
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: 'rgba(99, 102, 241, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#6366f1',
                      }
                    }}
                  />
                </Box>
                <Typography variant="body2" color="primary.light">88%</Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" color="text.secondary">
                État des freins
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <Box sx={{ flexGrow: 1, mr: 1 }}>
                  <LinearProgress 
                    variant="determinate" 
                    value={75} 
                    sx={{ 
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: 'rgba(99, 102, 241, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#6366f1',
                      }
                    }}
                  />
                </Box>
                <Typography variant="body2" color="primary.light">75%</Typography>
              </Box>
            </Box>

            <Box>
              <Typography variant="body2" color="text.secondary">
                État des pneus
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <Box sx={{ flexGrow: 1, mr: 1 }}>
                  <LinearProgress 
                    variant="determinate" 
                    value={82} 
                    sx={{ 
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: 'rgba(99, 102, 241, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#6366f1',
                      }
                    }}
                  />
                </Box>
                <Typography variant="body2" color="primary.light">82%</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Température du moteur */}
      <Grid item xs={12} md={6} lg={4}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Température du moteur"
            titleTypographyProps={{ 
              sx: { 
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'primary.light',
              } 
            }}
          />
          <CardContent>
            <Typography variant="h3" align="center" gutterBottom>
              87°C
            </Typography>
            <Box sx={{ height: 200, mt: 2 }}>
              <ResponsiveLine
                data={temperatureData}
                margin={{ top: 20, right: 20, bottom: 30, left: 40 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 70, max: 100 }}
                curve="cardinal"
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                }}
                enablePoints={false}
                enableGridX={false}
                colors={['#6366f1']}
                animate={true}
                enableArea={true}
                areaOpacity={0.15}
                theme={{
                  axis: {
                    ticks: {
                      text: {
                        fill: 'rgba(255, 255, 255, 0.7)',
                      },
                    },
                  },
                  grid: {
                    line: {
                      stroke: 'rgba(255, 255, 255, 0.1)',
                    },
                  },
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Diagnostics */}
      <Grid item xs={12} md={6} lg={4}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Diagnostics"
            titleTypographyProps={{ 
              sx: { 
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'primary.light',
              } 
            }}
          />
          <CardContent>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" color="success.main" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                ✓ Système de freinage
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Fonctionnement optimal
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" color="success.main" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                ✓ Système électrique
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Aucune anomalie détectée
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" color="warning.main" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                ! Niveau d'huile
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Vidange recommandée dans 2,500 km
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1" color="success.main" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                ✓ Système de refroidissement
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Température normale
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Pressions des pneus */}
      <Grid item xs={12}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Pressions des pneus"
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
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                  <Box>
                    <Typography variant="body1" color="text.secondary">
                      Avant gauche
                    </Typography>
                    <Typography variant="h4" color="primary.light">
                      2.3 bar
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" color="text.secondary">
                      Avant droit
                    </Typography>
                    <Typography variant="h4" color="primary.light">
                      2.3 bar
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="body1" color="text.secondary">
                      Arrière gauche
                    </Typography>
                    <Typography variant="h4" color="primary.light">
                      2.5 bar
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" color="text.secondary">
                      Arrière droit
                    </Typography>
                    <Typography variant="h4" color="primary.light">
                      2.5 bar
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Recommandations :
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  • Pression recommandée avant : 2.3 bar
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  • Pression recommandée arrière : 2.5 bar
                </Typography>
                <Typography variant="body2" color="success.main" sx={{ mt: 2 }}>
                  ✓ Toutes les pressions sont conformes
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default VehicleStatus; 