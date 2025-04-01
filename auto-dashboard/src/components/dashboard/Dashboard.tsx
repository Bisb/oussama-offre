import React from 'react';
import { Grid, Card, CardContent, CardHeader, Typography, Box } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';

// Données simulées pour les graphiques
const speedData = [
  {
    id: 'vitesse',
    data: [
      { x: '00:00', y: 0 },
      { x: '00:05', y: 30 },
      { x: '00:10', y: 45 },
      { x: '00:15', y: 60 },
      { x: '00:20', y: 55 },
      { x: '00:25', y: 40 },
      { x: '00:30', y: 35 },
    ],
  },
];

const fuelData = [
  {
    id: 'Restant',
    value: 75,
    color: '#6366f1',
  },
  {
    id: 'Utilisé',
    value: 25,
    color: 'rgba(248, 250, 252, 0.1)',
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

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      {/* Vitesse actuelle avec graphique */}
      <Grid item xs={12} md={6} lg={3}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Vitesse actuelle"
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
              55 km/h
            </Typography>
            <Box sx={{ height: 100, mt: 2 }}>
              <ResponsiveLine
                data={speedData}
                margin={{ top: 10, right: 10, bottom: 20, left: 30 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 0, max: 100 }}
                curve="cardinal"
                axisBottom={null}
                axisLeft={null}
                enablePoints={false}
                enableGridX={false}
                enableGridY={false}
                colors={['#6366f1']}
                animate={true}
                enableArea={true}
                areaBaselineValue={0}
                areaOpacity={0.15}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Niveau de carburant avec graphique */}
      <Grid item xs={12} md={6} lg={3}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Niveau de carburant"
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
              75%
            </Typography>
            <Box sx={{ height: 100, mt: 2 }}>
              <ResponsivePie
                data={fuelData}
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                innerRadius={0.7}
                padAngle={0.5}
                cornerRadius={3}
                colors={{ datum: 'data.color' }}
                enableArcLabels={false}
                enableArcLinkLabels={false}
                animate={true}
                motionConfig="gentle"
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Kilométrage */}
      <Grid item xs={12} md={6} lg={3}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Kilométrage"
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
              45,230
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Moyenne quotidienne: 42 km
            </Typography>
            <Typography 
              variant="caption" 
              sx={{ 
                display: 'block',
                textAlign: 'center',
                mt: 2,
                color: 'success.main'
              }}
            >
              +12% ce mois
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* État du moteur */}
      <Grid item xs={12} md={6} lg={3}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="État du moteur"
            titleTypographyProps={{ 
              sx: { 
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'primary.light',
              } 
            }}
          />
          <CardContent>
            <Typography variant="h3" align="center" sx={{ color: 'success.main' }} gutterBottom>
              Normal
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              flexDirection: 'column',
              mt: 2
            }}>
              <Typography variant="body2" color="text.secondary">
                Température: 90°C
              </Typography>
              <Box sx={{ 
                width: '80%', 
                height: 4, 
                bgcolor: 'rgba(255,255,255,0.1)', 
                mt: 1,
                borderRadius: 2,
                overflow: 'hidden'
              }}>
                <Box sx={{ 
                  width: '60%', 
                  height: '100%', 
                  bgcolor: 'success.main',
                  borderRadius: 2
                }} />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Graphique de consommation détaillé */}
      <Grid item xs={12} lg={8}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Consommation de carburant"
            titleTypographyProps={{ 
              sx: { 
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'primary.light',
              } 
            }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Box sx={{ height: 400 }}>
              <ResponsiveLine
                data={[
                  {
                    id: 'consommation',
                    data: [
                      { x: 'Lun', y: 7.2 },
                      { x: 'Mar', y: 6.8 },
                      { x: 'Mer', y: 7.5 },
                      { x: 'Jeu', y: 6.9 },
                      { x: 'Ven', y: 8.1 },
                      { x: 'Sam', y: 7.3 },
                      { x: 'Dim', y: 6.5 },
                    ],
                  },
                ]}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 5, max: 9 }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'Jours de la semaine',
                  legendOffset: 36,
                  legendPosition: 'middle',
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'Consommation (L/100km)',
                  legendOffset: -40,
                  legendPosition: 'middle',
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                enableArea={true}
                areaOpacity={0.15}
                colors={['#00bcd4']}
                theme={{
                  axis: {
                    legend: {
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

      {/* Prochaine maintenance */}
      <Grid item xs={12} lg={4}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Prochaine maintenance"
            titleTypographyProps={{ 
              sx: { 
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'primary.light',
              } 
            }}
          />
          <CardContent>
            <Typography variant="body1" paragraph>
              Vidange d'huile
            </Typography>
            <Typography variant="h4" color="primary.light" gutterBottom>
              Dans 2,500 km
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Autres interventions prévues :
              </Typography>
              <Box sx={{ pl: 2 }}>
                <Typography variant="body2" color="warning.main" sx={{ mt: 1 }}>
                  • Changement des plaquettes de frein (5,000 km)
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  • Révision générale (10,000 km)
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard; 