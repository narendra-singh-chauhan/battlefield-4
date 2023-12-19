// imports
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Update } from '../types';

// constants
const VITE_APP_API_BASE = import.meta.env.VITE_APP_API_BASE;

const Updates = () => {
    const [updates, setUpdates] = useState<Update[]>([]);

    const fetchUpdates = async () => {
        try {
            const baseUrl = `${VITE_APP_API_BASE}/soldier/updates`;
            const response = await axios(baseUrl);
            if(response.data.success){
                setUpdates(response.data?.data);
            }
        } catch (error) {
            console.error('Error while fetching the soldier updates:', error);
        }
    }

    useEffect(() => {
        fetchUpdates();
    }, []);
    
    return (
        <Stack direction="row" spacing={1} gap={10} alignItems="center">
            {updates.map(({ id, name, value }) => (
                <Box key={id}>
                    <Typography sx={{lineHeight: 0.5, fontSize: '20px', fontWeight: 500, textTransform: 'uppercase'}}>
                        {name}
                    </Typography>
                    <Typography sx={{fontSize: '38px', fontWeight: 700}}>
                        {value}
                    </Typography>
                </Box>
            ))}
        </Stack>
    );
};

export default Updates;