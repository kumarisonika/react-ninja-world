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

function Home(props:any){
return(
<>

    <Container sx={{ mt: 9, mb: 4 }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {/* Chart */}
            <Grid item xs>
                <Paper sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 350,
                  }}>
                    {/* <h2>Nation list - Datte-bayyo!</h2> */}
                    <Card sx={{ maxWidth: 500}}>
                        <CardActionArea>
                            <CardMedia component="img" height="200" image="nation.jpg" alt="Great Nations" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    The Great Nations
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <Link to="/nation">

                                    <Button className="button_ip" variant="contained">
                                        View Nation List</Button>
                                    </Link>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs>
                <Paper sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 350,
                  }}>
                    <Card sx={{ maxWidth: 500}}>
                        <CardActionArea>
                            <CardMedia component="img" height="200" image="Hidden-Leaf-Village.jpg"
                                alt="Great Nations" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    The Ninja Villages
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <Link to="/village">

                                    <Button className="button_ip" variant="contained">
                                        View Villages List</Button>
                                    </Link>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Paper>
            </Grid>
        </Grid>

    </Container>

</>
)
}

export default Home