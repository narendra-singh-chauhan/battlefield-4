// imports
import Box from "@mui/material/Box";
import Progress from "../components/Progress";
import { StyledHeader, StyledProgressContainer } from "../styles";
import { logo } from "../assets";
import NavBar from "../components/NavBar";

const Header = () => {
    return (
        <StyledHeader>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: {
                        xs: 'column', md:'row'
                    },
                    gap: {
                        xs: '20px', md: '15px'
                    }
                }}
            >
                <NavBar />
                <StyledProgressContainer>
                    <Progress />
                    <Box
                        component="img"
                        src={logo}
                        sx={{ width: '150px' }}
                    />
                </StyledProgressContainer>
            </Box>
        </StyledHeader>
    );
};

export default Header;