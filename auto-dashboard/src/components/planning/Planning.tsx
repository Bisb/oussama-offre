import React, { useState } from 'react';
import { Grid, Card, CardContent, CardHeader, Typography, Box, Button, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import fr from 'date-fns/locale/fr';

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

// Données simulées pour les rendez-vous
const appointments = [
  {
    id: 1,
    title: 'Vidange d\'huile',
    date: '2024-04-15',
    time: '14:30',
    description: 'Vidange d\'huile et remplacement du filtre',
    location: 'Garage Central',
  },
  {
    id: 2,
    title: 'Contrôle technique',
    date: '2024-04-20',
    time: '10:00',
    description: 'Contrôle technique obligatoire',
    location: 'Centre de contrôle technique',
  },
  {
    id: 3,
    title: 'Changement des pneus',
    date: '2024-05-05',
    time: '09:15',
    description: 'Remplacement des pneus avant',
    location: 'Garage Express',
  },
];

const Planning = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <Grid container spacing={3}>
      {/* Calendrier */}
      <Grid item xs={12} md={8}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Calendrier des rendez-vous"
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
                Nouveau rendez-vous
              </Button>
            }
          />
          <CardContent>
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
              <DateCalendar 
                value={selectedDate}
                onChange={(newValue: Date | null) => setSelectedDate(newValue)}
                sx={{
                  width: '100%',
                  '& .MuiPickersDay-root': {
                    color: 'text.primary',
                    '&.Mui-selected': {
                      backgroundColor: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                      },
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </CardContent>
        </Card>
      </Grid>

      {/* Prochains rendez-vous */}
      <Grid item xs={12} md={4}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Prochains rendez-vous"
            titleTypographyProps={{ 
              sx: { 
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'primary.light',
              } 
            }}
          />
          <CardContent>
            {appointments.map((appointment) => (
              <Box 
                key={appointment.id} 
                sx={{ 
                  mb: 3, 
                  p: 2, 
                  bgcolor: 'background.paper', 
                  borderRadius: 2,
                  border: '1px solid rgba(99, 102, 241, 0.1)',
                }}
              >
                <Typography variant="h6" color="primary.light" gutterBottom>
                  {appointment.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {appointment.date} à {appointment.time}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {appointment.location}
                </Typography>
                <Typography variant="body2">
                  {appointment.description}
                </Typography>
              </Box>
            ))}
          </CardContent>
        </Card>
      </Grid>

      {/* Formulaire de rendez-vous */}
      <Grid item xs={12}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Planifier un rendez-vous"
            titleTypographyProps={{ 
              sx: { 
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'primary.light',
              } 
            }}
          />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Titre"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Heure"
                  type="time"
                  InputLabelProps={{ shrink: true }}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Lieu"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Description"
                  variant="outlined"
                  multiline
                  rows={4}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button 
                    variant="contained"
                    sx={{ 
                      bgcolor: 'primary.main',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      }
                    }}
                  >
                    Planifier le rendez-vous
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Planning; 