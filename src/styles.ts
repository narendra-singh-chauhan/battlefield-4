// imports
import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';
import bg from './assets/bg.svg';
// import femblem from './assets/femblem.svg';

export const StyledPage = styled(Box)({

});

export const StyledLayout = styled(Box)({
    position: 'relative',
    width: '100%',
    height: '100vh',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: 'black',
    '&::before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: -1,
        opacity: 0.3
    },
});

export const StyledLeftPanel = styled(Box)({
    maxWidth: '100px',
    borderRight: '1px solid',
    borderImage: 'linear-gradient(rgba(255, 255, 255, 0.15) 83.13%, rgba(255, 255, 255, 0.00) 106.54%) 1',
    height: '100%',
});