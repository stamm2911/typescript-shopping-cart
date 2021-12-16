import { ProductsDataType } from '../../App'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Grid from '@mui/material/Grid'

interface ItemProps {
    item: ProductsDataType,
}

const Item: React.FC<ItemProps> = ({ item }) => {
    return (
        // <Grid item xs={4} sx={{ margin: 1, backgroundColor: 'green' }}>
            <Card sx={{ maxWidth: 420,  margin: 1, borderRadius: 5, display: "flex", flexDirection: "column" }}>
                <CardMedia component='img' height='140' image={item.image} alt='alt' sx={{ mt: 2, objectFit: 'contain', height: 300,}} />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div' fontWeight='bold'>
                        {item.title}
                    </Typography>
                    <Typography variant='body2' color='warning'>
                        {item.description}
                    </Typography>
                    <Typography variant='h6' color='warning' fontWeight='bold' sx={{ mt: 2 }}>
                        ${item.price}
                    </Typography>
                </CardContent>
                <CardActions sx={{ padding: 0, marginTop: "auto" }}>
                    <Button size='large' endIcon={<ShoppingCartIcon />} sx={{ width: '100%', color: 'black',}}>Add ti cart</Button>
                </CardActions>
            </Card>
        // </Grid>
    )
}

export default Item