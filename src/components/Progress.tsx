// imports
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { level } from '../assets';
import { StyledLevelImg } from '../styles';

const Progress = () => {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex', marginBottom:'-15px' }}>
            <StyledLevelImg
                src={level}
                alt="level"
            />
            <CircularProgress
                size={60}
                value={63}
                variant='determinate'
                sx={{color: '#EE930E'}}
            />
        </Box>
    );
};

export default Progress;