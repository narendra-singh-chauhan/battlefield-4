// imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Asset } from '../types';

const Card = ({ name, img, title, value }: Asset) => {
    return (
        <Grid item xs={12} sm={6}>
            <Box
                sx={{
                    width: '283px',
                    height: '168px',
                    backgroundColor: '#0f0f0f80',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    borderRadius: '4px',
                }}
            >
                <Typography sx={{ fontSize: '16px', opacity: 0.6, fontWeight: 600, textTransform: 'uppercase' }}>
                    {name}
                </Typography>
                <Box component="img" src={img} alt="Asset" sx={{ width: '200px', height: '60px', objectFit: 'contain', margin:'auto' }} />
                <Box>
                    <Typography sx={{ fontSize: '16px', lineHeight: 0.8, fontWeight: 600, textTransform: 'uppercase' }}>
                        {title}
                    </Typography>
                    <Typography sx={{fontSize: '16px', fontWeight: 600, opacity: 0.6,}}>
                        {value}
                    </Typography>
                </Box>
            </Box>
        </Grid>
    );
};

export default Card;