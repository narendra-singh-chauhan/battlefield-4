// imports
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { Accessory } from '../types';

const Row = ({ name, total, count }: Accessory) => {
    return (
        <Stack 
        direction="row" 
        justifyContent="space-between" 
        alignItems="center"
        sx={{
            borderTop: '1px solid #ffffff1a',
            paddingInline:'10px',
            paddingBlock: '15px',
            borderRadius: '4px',
            '&:last-child': {
                borderBottom: '1px solid #ffffff1a',
                paddingBottom: '15px',
            },
            '&:hover': {
                backgroundColor: 'white',
                color:'black'
            }
        }}
        >
            <Typography sx={{fontSize: '18px', fontWeight: 500, textTransform:'uppercase'}}>
                {name}
            </Typography>
            {total && count ? (
                <Stack>
                    <Typography sx={{ textAlign: "end", fontSize: '18px', fontWeight: 500}}>
                        {count}/{total}
                    </Typography>

                    <LinearProgress
                        variant="determinate"
                        value={
                            Math.round((100 / total) * count)
                        }
                        sx={{
                            '&.MuiLinearProgress-root': {
                                width: '80px',
                                backgroundColor: '#101010'
                            },
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: '#EE930E'
                            }
                        }}
                    />
                </Stack>
            ) : null}
        </Stack>
    );
};

export default Row;