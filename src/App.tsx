import { useQuery } from 'react-query'
import LinearProgress from '@mui/material/LinearProgress';
import { makeStyles } from '@mui/styles';
import Item from './Components/Item/Item.component'
import Grid from '@mui/material/Grid'

const useStyles = makeStyles({
  root: {
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "yellow",
    },
  },
});

export interface ProductsDataType {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title: string,
  amount: number,
}

const url: string = 'https://fakestoreapi.com/products'

const getProducts = async (): Promise<ProductsDataType[] | undefined> => {
  try {
    const restaurantData = await fetch(url)
    const jsonData = await restaurantData.json()
    return jsonData
  } catch (error) {
    console.log(error)
  }
}


function App() {
  const classes = useStyles();
  const { data, isLoading, error } = useQuery<ProductsDataType[] | undefined>('products', getProducts)

  console.log(data)

  if (isLoading) return <LinearProgress className={classes.root} sx={{ width: 900, backgroundColor: 'red' }} />
  if (error) return <h1>Opps, something is wrong!</h1>

  return (
    <Grid container spacing={5}>
      {data?.map(item => {
        return (
          <Grid item xs={12} sm={4} >
            <Item key={item.id} item={item} />
          </Grid>
        )
      })
      }
    </Grid>
  );
}

export default App;
