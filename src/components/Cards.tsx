// imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {
    topVehicle,
    topPrimary,
    topClass,
    topSideArm
} from '../assets';
import Card from './Card';
import { Asset } from '../types';
import axios from 'axios';
import { useEffect, useState } from 'react';

// constants
const VITE_APP_API_BASE = import.meta.env.VITE_APP_API_BASE;

const IMG_MAP: Record<string, string> = {
    'top_vehicle': topVehicle,
    'top_primary': topPrimary,
    'top_class': topClass,
    'top_sidearm': topSideArm,
};

const Cards = () => {
    const [assets, setAssets] = useState<Asset[]>([]);

    const fetchAssets = async () => {
        try {
            const baseUrl = `${VITE_APP_API_BASE}/soldier/assets`;
            const response = await axios(baseUrl);
            if(response.data.success){
                setAssets(response.data?.data);
            }
        } catch (error) {
            console.error('Error while fetching the soldier assets:', error);
        }
    }

    useEffect(() => {
        fetchAssets();
    }, []);

    return (
        <Box
            sx={{width: '100%', maxWidth:{xs: '100%', md: '600px'}, marginTop: '30px'}}
        >
            <Grid container spacing={2}>
                {assets.map(asset => (
                    <Card key={asset.id} {...asset} img={IMG_MAP[asset.map]} />
                ))}
            </Grid>
        </Box>
    );
};

export default Cards;