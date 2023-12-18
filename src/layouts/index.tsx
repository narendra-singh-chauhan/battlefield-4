// imports
import Header from "./Header.tsx";
import RightPanel from "./RightPanle.tsx";
import LeftPanel from "./LeftPanel.tsx";
import { Outlet } from "react-router-dom";
import { StyledLayout } from "../styles.ts";
import Grid from '@mui/material/Grid';

const Layouts = () => {
    return (
        <StyledLayout>
            <Grid container columns={24} height="100vh">
                <Grid item xs={3} sm={2} md={1}>
                    <LeftPanel />
                </Grid>
                <Grid item xs={18} sm={20} md={22}>
                    <Grid item xs={24}>
                        <Header />
                    </Grid>
                    <Grid item xs={24}>
                        <main>
                            <Outlet />
                        </main>
                    </Grid>
                </Grid>
                <Grid item xs={3} sm={2} md={1}>
                    <RightPanel />
                </Grid>
            </Grid>
        </StyledLayout>
    );
};

export default Layouts;