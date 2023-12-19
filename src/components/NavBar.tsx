// imports
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { StyledNavBar, StyledTabs } from '../styles';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const links: string[] = [
    'home',
    'multiplayer',
    'campaign',
    'soldier',
    'store',
    'more'
];

const NavBar = () => {
    const navigate = useNavigate();
    const [selectedLink, setSelectedLink] = useState<number>(3);

    useEffect(() => {
        navigate(links[selectedLink]);
    }, [selectedLink]);

    return (
        <StyledNavBar>
            <Box sx={{maxWidth: {
                xs: 270, sm: 460, lg: 800
            }}}>
                <StyledTabs
                    value={selectedLink}
                    onChange={(_event, newLink: number) => setSelectedLink(newLink)}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="pages"
                    textColor='inherit'
                >
                    {links.map(link => (
                        <Tab key={link} label={link} disableRipple/>
                    ))}
                </StyledTabs>
            </Box>
        </StyledNavBar>
    );
};

export default NavBar;