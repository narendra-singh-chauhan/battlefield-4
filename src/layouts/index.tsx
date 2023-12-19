// imports
import Box from '@mui/material/Box';
import Header from "./Header.tsx";
import RightPanel from "./RightPanle.tsx";
import LeftPanel from "./LeftPanel.tsx";
import { Outlet } from "react-router-dom";
import { StyledLayout, StyledContainer } from "../styles.ts";

const Layouts = () => {
    return (
        <StyledLayout>
            <LeftPanel />
            <StyledContainer>
                <Header />
                <Box 
                component="main" 
                sx={{
                    height: 'calc(100% - 110px)', 
                    overflow: 'auto',
                }}
                    >
                    <Outlet />
                </Box>
            </StyledContainer>
            <RightPanel />
        </StyledLayout>
    );
};

export default Layouts;