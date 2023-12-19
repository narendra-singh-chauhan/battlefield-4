// imports
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Progress from "./Progress";
import { Cookie as ICookie } from '../types';
import axios from 'axios';
import { useEffect, useState } from 'react';

// constants
const VITE_APP_API_BASE = import.meta.env.VITE_APP_API_BASE;
const initialCookie = {
    value: 0,
    totalRank: '0',
    currentRank: '0',
    time: '0h'
};

const Cookie = () => {
    const [cookie, setCookie] = useState<ICookie>(initialCookie);

    const fetchCookie = async () => {
        try {
            const baseUrl = `${VITE_APP_API_BASE}/soldier/cookie`;
            const response = await axios(baseUrl);
            if (response.data.success) {
                setCookie(response.data?.data);
            }
        } catch (error) {
            console.error('Error while fetching the soldier cookie:', error);
        }
    }

    useEffect(() => {
        fetchCookie();
    }, []);


    return (
        <Box
            sx={{
                display: 'flex',
                gap: '15px',
                alignItems: 'center',
                marginBottom: '50px'
            }}
        >
            <Progress />
            <Box>
                <Typography
                    sx={{
                        fontSize: '36px',
                        fontWeight: 800
                    }}
                >
                    Cookie
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row'
                        },
                        gap: {
                            xs: '5px',
                            lg: '15px'
                        }
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            gap: {
                                xs: '5px',
                                lg: '15px'
                            }
                        }}
                    >

                        <Typography
                            sx={{
                                border: '1px solid #ffffff4d',
                                paddingInline: '25px',
                                fontWeight: 500,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            {cookie.value}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '18px',
                                fontWeight: 500
                            }}
                        >
                            {cookie.currentRank} / {cookie.totalRank}
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            fontSize: '18px',
                            fontWeight: 500,
                            opacity: 0.5
                        }}
                    >
                        - Estimated rank up in {cookie.time}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Cookie;