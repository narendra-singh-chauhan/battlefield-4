// imports
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { QuestionIcon, PowerIcon } from '../assets';
import { StyledLeftPanel } from '../styles';
import battlefieldv from '../assets/battlefield_v.svg';
import battlefield1 from '../assets/battlefield_1.svg';
import battlefield4 from '../assets/battlefield_4.svg';
import battlefieldHardline from '../assets/battlefield_hardline.svg';
import career from '../assets/career.svg';
import watch from '../assets/watch.svg';
import news from '../assets/news.svg';
import { useState } from 'react';

const LeftPanel = () => {
    const [selectedMenu, setSelectedMenu] = useState(3);

    const bottomActions = [
        {
            id: 1,
            icon: <QuestionIcon />
        },
        {
            id: 2,
            icon: <PowerIcon />,
        },
    ];

    const menus = [
        {
            id: 1,
            img: battlefieldv,
            name: 'battlefield v'
        },
        {
            id: 2,
            img: battlefield1,
            name: 'battlefield 1'
        },
        {
            id: 3,
            img: battlefield4,
            name: 'battlefield 4'
        },
        {
            id: 4,
            img: battlefieldHardline,
            name: 'battlefield hardline'
        },
        {
            id: 5,
            img: career,
            name: 'career'
        },
        {
            id: 6,
            img: watch,
            name: 'watch'
        },
        {
            id: 7,
            img: news,
            name: 'news'
        },
    ];

    return (
        <StyledLeftPanel>
            <Grid container direction="column" height="100%">
                <Grid item xs={10} justifyContent="center" alignItems="center">
                    <Stack spacing={2} justifyContent="center" alignItems="center" height="100%" sx={{ position: 'relative' }}>
                        {menus.map(({ id, img }) => (
                            <Avatar
                                key={id}
                                src={img}
                                variant='rounded'
                                onClick={() => setSelectedMenu(id)}
                                sx={{
                                    cursor: 'pointer',
                                    opacity: selectedMenu === id ? 1 : 0.2,
                                }}
                            />
                        ))}
                    </Stack>
                </Grid>
                <Grid item xs={2}>
                    <Stack spacing={2}>
                        {bottomActions.map(({ id, icon }) => (
                            <IconButton key={id} size='small' disableRipple>
                                {icon}
                            </IconButton>
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </StyledLeftPanel>
    );
};

export default LeftPanel;