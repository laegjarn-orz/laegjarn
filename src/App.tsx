import { Link, Typography, Box } from "@mui/material";
import Layout from './components/layout'
import QClock from './components/q_clock';
import './App.css';

function App() {
  return (
    <Layout>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: 'center'
      }}>
        <Typography variant="h1" gutterBottom component="div">
          Welcome to <Link href="/">Lægjarn!</Link>
        </Typography>
        <QClock />
      </Box>
    </Layout>
  )
}

export default App
