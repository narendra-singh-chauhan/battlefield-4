import axios from "axios";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from '@mui/material/styles/styled';

// envs
const VITE_APP_API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

// styles
const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  width: '100%',
  height: '100vh',
});

const App = () => {
  const [test, setTest] = useState('');

  const fetchSoldierTest = async () => {
    try {
      const response = await axios(`${VITE_APP_API_BASE_URL}/soldier/test`);
      if (response.data?.success) {
        setTest(response.data?.message);
      }
    } catch (error) {
      console.error('Error while fetching the soldier test: ', error);
    }
  };

  useEffect(() => {
    fetchSoldierTest();
  }, []);

  return (
    <StyledBox>
      <Typography>
        BattleField 4
      </Typography>
      <Typography variant="caption">
        {test}
      </Typography>
    </StyledBox>
  )
}

export default App;
