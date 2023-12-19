// imports
import { StyledPage } from "../styles";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { soldierLook } from "../assets";
import Cookie from "../components/Cookie";
import Rows from "../components/Rows";
import Updates from "../components/Updates";
import Cards from "../components/Cards";

const Soldier = () => {
  return (
    <StyledPage>
      <Container maxWidth="xl" disableGutters>
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              lg: 'row'
            }
          }}
        >
          <Box
            component="img"
            src={soldierLook}
            alt="Soldier Look"
            sx={{
              objectFit: 'contain',
              maxHeight: {
                xs: '200px',
                lg: '240px',
                xl: '500px'
              },
              height: '100%',
            }}
          />

          <Box sx={{flexGrow: 1}}>
            <Cookie />
            <Grid container spacing={8}>
              <Grid item xs={12} lg={4}>
                <Rows />
              </Grid>
              <Grid item xs={12} lg={8}>
                <Updates />
                <Cards />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </StyledPage>
  );
};

export default Soldier;