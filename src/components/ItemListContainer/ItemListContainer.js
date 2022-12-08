import ItemList from '../ItemList/ItemList'
import { getMerch } from '../../asyncMockn'
import { useState } from 'react'
import { useEffect } from 'react'

 
const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        getMerch()
            .then(response => {
                setItems(response)
            })
    }, []);

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList items={items} />
        </div>
        )
}

export default ItemListContainer