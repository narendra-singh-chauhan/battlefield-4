import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useState } from "react";

const RightPanel = () => {
    const [selectedMenu, setSelectedMenu] = useState(2);

    const menus = [
        {
            id: 1,
            prefix: '+',
            img: '',
        },
        {
            id: 2,
            prefix: '+',
            img: '',
        },
        {
            id: 3,
            prefix: '+',
            img: '',
        },
    ];

    return (
        <Box
            sx={{
                maxWidth: '100px',
                height: '100%',
            }}
        >
            <Stack spacing={2} paddingTop="50px">
                {menus.map(({ id, prefix, img }) => (
                    <Stack spacing={1} key={id}>
                        <Box>
                            {prefix}
                        </Box>
                        <Avatar src={img} alt="+" variant="square"/>
                    </Stack>
                ))}
            </Stack>
        </Box>
    );
};

export default RightPanel;