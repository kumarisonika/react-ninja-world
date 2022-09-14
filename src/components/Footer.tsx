import { Link } from 'react-router-dom'
import { Button } from '@mui/material';


function Footer(){
return(
<>
    <footer className="footer_class">
        <h2>This is footer</h2>
        <Button className="button_ip" variant="contained">
            <Link to="..">Go back</Link></Button>
    </footer>
</>
)
}
export default Footer