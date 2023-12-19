// imports
import Box from '@mui/material/Box';
import Row from './Row';
import { Accessory } from '../types';
import axios from 'axios';
import { useEffect, useState } from 'react';

// constants
const VITE_APP_API_BASE = import.meta.env.VITE_APP_API_BASE;

const Rows = () => {
    const [accessories, setAccessories] = useState<Accessory[]>([]);

    const fetchAccessories = async () => {
        try {
            const baseUrl = `${VITE_APP_API_BASE}/soldier/accessories`;
            const response = await axios(baseUrl);
            if(response.data.success){
                setAccessories(response.data?.data);
            }
        } catch (error) {
            console.error('Error while fetching the soldier accessories:', error);
        }
    }

    useEffect(() => {
        fetchAccessories();
    }, []);

    return (
        <Box>
            {accessories.map(accessorie => (
                <Row key={accessorie.id} {...accessorie} />
            ))}
        </Box>
    );
};

export default Rows;