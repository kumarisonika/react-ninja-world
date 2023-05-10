import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea,Button } from '@mui/material';
import { Link } from 'react-router-dom';

function ScrollCards({Category, ScreenLink, buttonName, CardImage}:any){
    return(
    <>
          <Grid item xs>                  
                    <Card sx={{ maxWidth: 400}}>
                        <CardActionArea>
                            <CardMedia component="img" height="100" image={CardImage} alt="Great Nations" />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {Category}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <Link to={ScreenLink}>

                                    <Button className="button_ip" variant="contained">
                                        {buttonName}</Button>
                                    </Link>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Grid>

    </>)
}

export default ScrollCards;