import ItemList from '../ItemList/ItemList'
import { getCategory, getMerch } from '../../asyncMock'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

 
const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        if(categoryId){            
            getCategory(categoryId)
            .then(response => {
                setItems(response)
            })
            .catch(error => {
                console.log(error)
            })
        } else {
            getMerch()
            .then(response => {
                setItems(response)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }, [categoryId])
    



    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList items={items} />
        </div>
        )
}

export default ItemListContainer