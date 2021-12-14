import { useQuery } from 'react-query'

interface fetchDataType {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title: string,
  amount: number,
}

const url: string = 'https://fakestoreapi.com/products'

const fetchData = async () => {
  const fetchRestaurantData = await fetch(url)
  const data = await fetchRestaurantData.json()
  console.log(data)
}

fetchData()

function App() {
  return (
    <div>
      start
    </div>
  );
}

export default App;
