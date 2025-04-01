import React from 'react';
import { Grid, Card, CardContent, CardHeader, Typography, Box, LinearProgress } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveRadar } from '@nivo/radar';

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

// Données simulées pour les graphiques
const speedData = [
  {
    id: 'vitesse',
    data: [
      { x: '0', y: 0 },
      { x: '10', y: 40 },
      { x: '20', y: 80 },
      { x: '30', y: 110 },
      { x: '40', y: 130 },
      { x: '50', y: 140 },
      { x: '60', y: 145 },
    ],
  },
];

const performanceData = [
  {
    metric: 'Accélération',
    value: 85,
  },
  {
    metric: 'Freinage',
    value: 90,
  },
  {
    metric: 'Tenue de route',
    value: 88,
  },
  {
    metric: 'Consommation',
    value: 75,
  },
  {
    metric: 'Confort',
    value: 82,
  },
];

const Performance = () => {
  return (
    <Grid container spacing={3}>
      {/* Vitesse maximale */}
      <Grid item xs={12} md={6} lg={3}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Vitesse maximale"
            titleTypographyProps={{ 
              sx: { 
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'primary.light',
              } 
            }}
          />
          <CardContent>
            <Typography variant="h3" align="center" color="primary.light" gutterBottom>
              220 km/h
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Vitesse moyenne
              </Typography>
              <Typography variant="h5" color="primary.light">
                75 km/h
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Accélération */}
      <Grid item xs={12} md={6} lg={3}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Accélération 0-100"
            titleTypographyProps={{ 
              sx: { 
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'primary.light',
              } 
            }}
          />
          <CardContent>
            <Typography variant="h3" align="center" color="primary.light" gutterBottom>
              8.5s
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="success.main" gutterBottom>
                +5% plus rapide que la moyenne
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Puissance */}
      <Grid item xs={12} md={6} lg={3}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Puissance"
            titleTypographyProps={{ 
              sx: { 
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'primary.light',
              } 
            }}
          />
          <CardContent>
            <Typography variant="h3" align="center" color="primary.light" gutterBottom>
              180 ch
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Couple maximal
              </Typography>
              <Typography variant="h5" color="primary.light">
                320 Nm
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Score de performance */}
      <Grid item xs={12} md={6} lg={3}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Score de performance"
            titleTypographyProps={{ 
              sx: { 
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'primary.light',
              } 
            }}
          />
          <CardContent>
            <Typography variant="h3" align="center" color="primary.light" gutterBottom>
              85/100
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="success.main" gutterBottom>
                Excellent état
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Graphique d'accélération */}
      <Grid item xs={12} lg={8}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Courbe d'accélération"
            titleTypographyProps={{ 
              sx: { 
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'primary.light',
              } 
            }}
          />
          <CardContent sx={{ height: 400 }}>
            <ResponsiveLine
              data={speedData}
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
              xScale={{ type: 'point' }}
              yScale={{ type: 'linear', min: 0, max: 160 }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Temps (secondes)',
                legendOffset: 36,
                legendPosition: 'middle',
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Vitesse (km/h)',
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
              colors={['#6366f1']}
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
          </CardContent>
        </Card>
      </Grid>

      {/* Radar des performances */}
      <Grid item xs={12} lg={4}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Analyse des performances"
            titleTypographyProps={{ 
              sx: { 
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'primary.light',
              } 
            }}
          />
          <CardContent sx={{ height: 400 }}>
            <ResponsiveRadar
              data={performanceData}
              keys={['value']}
              indexBy="metric"
              maxValue={100}
              margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
              curve="linearClosed"
              borderWidth={2}
              borderColor={{ from: 'color' }}
              gridLevels={5}
              gridShape="circular"
              gridLabelOffset={36}
              enableDots={true}
              dotSize={10}
              dotColor={{ theme: 'background' }}
              dotBorderWidth={2}
              dotBorderColor={{ from: 'color' }}
              enableDotLabel={true}
              dotLabel="value"
              dotLabelYOffset={-12}
              colors={['#6366f1']}
              fillOpacity={0.25}
              blendMode="multiply"
              animate={true}
              theme={{
                dots: {
                  text: {
                    fill: '#f8fafc',
                  },
                },
                grid: {
                  line: {
                    stroke: 'rgba(255, 255, 255, 0.1)',
                  },
                },
                labels: {
                  text: {
                    fill: 'rgba(255, 255, 255, 0.7)',
                  },
                },
              }}
            />
          </CardContent>
        </Card>
      </Grid>

      {/* Indicateurs de performance */}
      <Grid item xs={12}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Indicateurs détaillés"
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
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" color="text.secondary">
                    Efficacité du moteur
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Box sx={{ flexGrow: 1, mr: 1 }}>
                      <LinearProgress 
                        variant="determinate" 
                        value={92} 
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
                    <Typography variant="body2" color="primary.light">92%</Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" color="text.secondary">
                    Réponse à l'accélération
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
              </Grid>

              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" color="text.secondary">
                    Efficacité du freinage
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

                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Stabilité en virage
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Box sx={{ flexGrow: 1, mr: 1 }}>
                      <LinearProgress 
                        variant="determinate" 
                        value={85} 
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
                    <Typography variant="body2" color="primary.light">85%</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Performance; 