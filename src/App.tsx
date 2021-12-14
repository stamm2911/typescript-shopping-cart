import { useQuery } from 'react-query'
import LinearProgress from '@mui/material/LinearProgress';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "yellow",
    },
  },
});

interface ProductsDataType {
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

  return (
    <div>
      {isLoading ? <LinearProgress className={classes.root} sx={{ width: 900, backgroundColor: 'red' }} /> : String(data)}
    </div>
  );
}

export default App;
