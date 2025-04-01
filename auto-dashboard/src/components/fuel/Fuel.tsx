import React from 'react';
import { Grid, Card, CardContent, CardHeader, Typography, Box } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';

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
const consumptionData = [
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
];

const monthlyConsumptionData = [
  {
    mois: 'Jan',
    consommation: 180,
    cout: 320,
  },
  {
    mois: 'Fév',
    consommation: 165,
    cout: 290,
  },
  {
    mois: 'Mar',
    consommation: 190,
    cout: 340,
  },
  {
    mois: 'Avr',
    consommation: 170,
    cout: 300,
  },
];

const Fuel = () => {
  return (
    <Grid container spacing={3}>
      {/* Niveau actuel et statistiques */}
      <Grid item xs={12} md={6} lg={3}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Niveau actuel"
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
              75%
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Autonomie estimée
              </Typography>
              <Typography variant="h4" color="primary.light">
                450 km
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Prochain plein estimé
              </Typography>
              <Typography variant="h6" color="warning.main">
                Dans 3 jours
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Consommation moyenne */}
      <Grid item xs={12} md={6} lg={3}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Consommation moyenne"
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
              7.2 L/100km
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="success.main" gutterBottom>
                -5% par rapport au mois dernier
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Objectif mensuel
              </Typography>
              <Typography variant="h6" color="primary.light">
                7.0 L/100km
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Coût mensuel */}
      <Grid item xs={12} md={6} lg={3}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Coût mensuel"
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
              320 €
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="warning.main" gutterBottom>
                +8% par rapport au mois dernier
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Budget mensuel
              </Typography>
              <Typography variant="h6" color="primary.light">
                350 €
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Stations favorites */}
      <Grid item xs={12} md={6} lg={3}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Stations favorites"
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
              <Typography variant="body1" color="primary.light" gutterBottom>
                Total - Avenue de la République
              </Typography>
              <Typography variant="body2" color="success.main">
                1.85 €/L
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" color="primary.light" gutterBottom>
                Shell - Boulevard Victor Hugo
              </Typography>
              <Typography variant="body2" color="text.secondary">
                1.89 €/L
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" color="primary.light" gutterBottom>
                Esso - Rue Jean Jaurès
              </Typography>
              <Typography variant="body2" color="text.secondary">
                1.87 €/L
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Graphique de consommation hebdomadaire */}
      <Grid item xs={12} lg={8}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Consommation hebdomadaire"
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
              data={consumptionData}
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

      {/* Statistiques mensuelles */}
      <Grid item xs={12} lg={4}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Statistiques mensuelles"
            titleTypographyProps={{ 
              sx: { 
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'primary.light',
              } 
            }}
          />
          <CardContent sx={{ height: 400 }}>
            <ResponsiveBar
              data={monthlyConsumptionData}
              keys={['consommation', 'cout']}
              indexBy="mois"
              margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
              padding={0.3}
              valueScale={{ type: 'linear' }}
              indexScale={{ type: 'band', round: true }}
              colors={['#6366f1', '#ec4899']}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              axisTop={null}
              axisRight={null}
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
              labelSkipWidth={12}
              labelSkipHeight={12}
              legends={[
                {
                  dataFrom: 'keys',
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 120,
                  translateY: 0,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: 'left-to-right',
                  itemOpacity: 0.85,
                  symbolSize: 20,
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
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
                legends: {
                  text: {
                    fill: 'rgba(255, 255, 255, 0.7)',
                  },
                },
              }}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Fuel; 