import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import { StyledRightPanel,StyledStatusAvatar } from "../styles";
import {
    squad,
    join,
    online,
    maryjane,
    offline,
    sunny,
} from '../assets';

const RightPanel = () => {
    const menus = [
        {
            id: 1,
            prefix: squad,
            img: join,
            status: 'join'
        },
        {
            id: 2,
            prefix: online,
            img: maryjane,
            status: 'online',
        },
        {
            id: 3,
            prefix: offline,
            img: sunny,
            status: 'offline'
        },
    ];

    return (
        <StyledRightPanel>
            <Stack spacing={2} paddingTop="50px">
                {menus.map(({ id, prefix, img, status }) => (
                    <Stack spacing={1} key={id}>
                        <Box>
                            <Box component="img" src={prefix} />
                        </Box>
                        <StyledStatusAvatar
                            src={img}
                            alt={status}
                            variant="square"
                            status={status}
                        />
                    </Stack>
                ))}
            </Stack>
        </StyledRightPanel>
    );
};

export default RightPanel;