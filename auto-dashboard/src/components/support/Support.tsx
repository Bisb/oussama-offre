import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  TextField,
  Button,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';

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

// FAQ données
const faqData = [
  {
    question: 'Comment puis-je planifier une maintenance ?',
    answer: 'Vous pouvez planifier une maintenance en utilisant la section Planning. Sélectionnez une date disponible, remplissez les détails nécessaires et confirmez la réservation.',
  },
  {
    question: 'Comment suivre la consommation de carburant ?',
    answer: 'La consommation de carburant peut être suivie dans la section Rapports. Vous y trouverez des graphiques détaillés et des statistiques sur la consommation de chaque véhicule.',
  },
  {
    question: 'Que faire en cas de panne ?',
    answer: 'En cas de panne, contactez immédiatement notre service d\'assistance en utilisant le formulaire de contact ci-dessous. Notre équipe technique vous répondra dans les plus brefs délais.',
  },
  {
    question: 'Comment mettre à jour les informations d\'un véhicule ?',
    answer: 'Les informations des véhicules peuvent être mises à jour dans la section Véhicules. Cliquez sur le véhicule concerné, puis sur le bouton "Modifier" pour mettre à jour ses informations.',
  },
];

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler l'envoi du formulaire
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Grid container spacing={3}>
      {/* Formulaire de contact */}
      <Grid item xs={12} md={6}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Contactez-nous"
            titleTypographyProps={{ 
              sx: { 
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'primary.light',
              } 
            }}
          />
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {showSuccess && (
                  <Grid item xs={12}>
                    <Alert severity="success" sx={{ mb: 2 }}>
                      Votre message a été envoyé avec succès !
                    </Alert>
                  </Grid>
                )}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nom"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Sujet"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{
                      bgcolor: 'primary.main',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                    }}
                  >
                    Envoyer
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>

      {/* FAQ */}
      <Grid item xs={12} md={6}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Questions fréquentes"
            titleTypographyProps={{ 
              sx: { 
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'primary.light',
              } 
            }}
          />
          <CardContent>
            <Box sx={{ mt: -2 }}>
              {faqData.map((faq, index) => (
                <Accordion 
                  key={index}
                  sx={{
                    bgcolor: 'background.paper',
                    '&:before': {
                      display: 'none',
                    },
                    '&:not(:last-child)': {
                      borderBottom: 1,
                      borderColor: 'divider',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      '&:hover': {
                        bgcolor: 'rgba(99, 102, 241, 0.08)',
                      },
                    }}
                  >
                    <Typography color="primary.light" fontWeight={500}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="text.secondary">
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Informations de contact */}
      <Grid item xs={12}>
        <Card {...commonCardProps}>
          <CardHeader 
            title="Nos coordonnées"
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
              <Grid item xs={12} md={4}>
                <Typography variant="h6" color="primary.light" gutterBottom>
                  Adresse
                </Typography>
                <Typography color="text.secondary">
                  123 Rue de la Flotte<br />
                  75001 Paris<br />
                  France
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" color="primary.light" gutterBottom>
                  Téléphone
                </Typography>
                <Typography color="text.secondary">
                  Support technique: +33 1 23 45 67 89<br />
                  Service client: +33 1 23 45 67 90
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" color="primary.light" gutterBottom>
                  Horaires
                </Typography>
                <Typography color="text.secondary">
                  Lundi - Vendredi: 9h00 - 18h00<br />
                  Samedi: 9h00 - 12h00<br />
                  Dimanche: Fermé
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Support; 