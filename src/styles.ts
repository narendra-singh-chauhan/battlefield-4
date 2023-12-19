// imports
import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import bg from './assets/bg.svg';

// types
type StatusAvatar = {
    status: string;
};

export const StyledPage = styled(Box)({
    marginTop: '50px'
});

export const StyledLayout = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
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

export const StyledLeftPanel = styled(Box)(({ theme }) => ({
    maxWidth: '50px',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '70px',
    },
    width: '100%',
    borderRight: '1px solid',
    borderImage: 'linear-gradient(rgba(255, 255, 255, 0.15) 83.13%, rgba(255, 255, 255, 0.00) 106.54%) 1',
    height: '100%',
}));

export const StyledRightPanel = styled(Box)(({ theme }) => ({
    maxWidth: '50px',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '70px',
    },
    width: '100%',
    borderRight: '1px solid',
    borderImage: 'linear-gradient(rgba(255, 255, 255, 0.15) 83.13%, rgba(255, 255, 255, 0.00) 106.54%) 1',
    height: '100%',
}));

export const StyledStatusAvatar = styled(Avatar, {
    shouldForwardProp: (prop) => prop !== "status"
})<StatusAvatar>(({ status }) => ({
    cursor: 'pointer',
    ...(status !== 'join' && {
        borderLeftWidth: '3px',
        borderLeftStyle: 'solid',
    }),
    ...(status === 'online' && {
        borderLeftColor: '#23C13A'
    }),
    ...(status === 'offline' && {
        borderLeftColor: '#FFF',
        opacity: 0.2
    }),
}));

export const StyledHeader = styled(Box)(() => ({
    // height: '60px',
}));

export const StyledNavBar = styled(Box)({
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    height: '60px',
    borderBottomColor: '#f5f5f547',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'end',
    flexGrow: 1,
});

export const StyledContainer = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    marginInline: '15px',
    [theme.breakpoints.up('sm')]: {
        marginInline: '30px'
    }
}));

export const StyledTitle = styled(Typography)(() => ({

}));

export const StyledLevelImg = styled('img')({
    top: 13,
    left: 13,
    bottom: 0,
    right: 0,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '35px',
});

export const StyledProgressContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    [theme.breakpoints.up('md')]:{
        maxWidth: '230px',
    },
    width: '100%'
}));

export const StyledTabs = styled(Tabs)({
    marginBottom: '-1px',
    '& .MuiTabs-indicator': {
        backgroundColor: '#FFF',
        height: '1px',
        borderRadius: '10px'
    },
    '& .MuiTab-root': {
        minWidth: 'unset',
        padding: '12px 0px',
        fontSize: '20px',
        fontWeight: 500
    },
    '& .MuiTabs-flexContainer': {
        gap: '35px',
    }
});