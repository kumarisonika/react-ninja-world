import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea,Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ScrollCards from './ScrollCards';

function Home(props:any){
return(
<>

    <Container sx={{ mt: 9, mb: 4 }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {/* Chart */}
            <ScrollCards 
             Category={"The Great Nations"}
             ScreenLink={"/nation"}
             buttonName={"VIEW NATION LIST"}
             CardImage={"nation.jpg"}
             />
             <ScrollCards 
             Category={"The Ninja Villages"}
             ScreenLink={"/village"}
             buttonName={"VIEW VILLAGE LIST"}
             CardImage={"Hidden-Leaf-Village.jpg"}
             />

           <ScrollCards 
             Category={"The Great Nations"}
             ScreenLink={"/nation"}
             buttonName={"VIEW NATION LIST"}
             CardImage={"nation.jpg"}
             />
             <ScrollCards 
             Category={"The Ninja Villages"}
             ScreenLink={"/village"}
             buttonName={"VIEW VILLAGE LIST"}
             CardImage={"Hidden-Leaf-Village.jpg"}
             />
        </Grid>

    </Container>

</>
)
}

export default Home