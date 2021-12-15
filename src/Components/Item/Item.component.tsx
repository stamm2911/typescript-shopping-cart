import { Fragment } from 'react'
import { ProductsDataType } from '../../App'
import Button from '@mui/material/Button';


interface ItemProps {
    item: ProductsDataType,
}

const Item: React.FC<ItemProps> = ({ item }) => {
    return (
        <Fragment>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <img src={item.image} alt={item.title} />
            <h3>${item.price}</h3>
            <Button variant="contained">Add to cart</Button>
        </Fragment>
    )
}

export default Item