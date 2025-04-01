import React from 'react';
import { Grid, Card, CardContent, CardHeader, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';

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
      { x: 'Jan', y: 45 },
      { x: 'Fév', y: 42 },
      { x: 'Mar', y: 48 },
      { x: 'Avr', y: 38 },
      { x: 'Mai', y: 40 },
      { x: 'Juin', y: 44 },
    ],
  },
];

const maintenanceData = [
  {
    id: 'Entretien régulier',
    value: 35,
    color: '#6366f1',
  },
  {
    id: 'Réparations',
    value: 25,
    color: '#ec4899',
  },
  {
    id: 'Pneus',
    value: 20,
    color: '#14b8a6',
  },
  {
    id: 'Autres',
    value: 20,
    color: '#f59e0b',
  },
];

// Données simulées pour le tableau
const tableData = [
  {
    id: 1,
    vehicle: 'Camion A',
    distance: '12,500 km',
    consumption: '8.5 L/100km',
    maintenance: '2,500 €',
    status: 'En service',
  },
  {
    id: 2,
    vehicle: 'Camion B',
    distance: '15,800 km',
    consumption: '9.2 L/100km',
    maintenance: '1,800 €',
    status: 'En maintenance',
  },
  {
    id: 3,
    vehicle: 'Camion C',
    distance: '9,300 km',
    consumption: '7.8 L/100km',
    maintenance: '3,200 €',
    status: 'En service',
  },
];

const Reports = () => {
  return (
    <Grid container spacing={3}>
      {/* Graphique de consommation */}
      <Grid item xs={12} md={8}>
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
          <CardContent>
            <Box sx={{ height: 400 }}>
              <ResponsiveLine
                data={consumptionData}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                curve="cardinal"
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
                colors={['#6366f1']}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                enableArea={true}
                areaOpacity={0.15}
                useMesh={true}
                legends={[
                  {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                  }
                ]}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Graphique des coûts de maintenance */}
      <Grid item xs={12} md={4}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Répartition des coûts"
            titleTypographyProps={{ 
              sx: { 
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'primary.light',
              } 
            }}
          />
          <CardContent>
            <Box sx={{ height: 400 }}>
              <ResponsivePie
                data={maintenanceData}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                colors={{ datum: 'data.color' }}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#ffffff"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor="#ffffff"
                legends={[
                  {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#ffffff',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                  }
                ]}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Tableau récapitulatif */}
      <Grid item xs={12}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Récapitulatif par véhicule"
            titleTypographyProps={{ 
              sx: { 
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'primary.light',
              } 
            }}
          />
          <CardContent>
            <TableContainer component={Paper} sx={{ bgcolor: 'background.paper' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Véhicule</TableCell>
                    <TableCell>Distance parcourue</TableCell>
                    <TableCell>Consommation moyenne</TableCell>
                    <TableCell>Coûts de maintenance</TableCell>
                    <TableCell>Statut</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.vehicle}</TableCell>
                      <TableCell>{row.distance}</TableCell>
                      <TableCell>{row.consumption}</TableCell>
                      <TableCell>{row.maintenance}</TableCell>
                      <TableCell>
                        <Typography
                          sx={{
                            color: row.status === 'En service' ? '#10b981' : '#f59e0b',
                            fontWeight: 500,
                          }}
                        >
                          {row.status}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Reports; 