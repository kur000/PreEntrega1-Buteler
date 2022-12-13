import { useState, useEffect } from 'react'
import { getDetailById } from '../../asyncMock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([])

    const { productId } = useParams()

    useEffect(() => {
        getDetailById(productId)
            .then(response => 
                setDetail(response))
            .catch(error => console.log(error))
    }, [productId]);
    return (
        <div>
            <h1>{detail.title}</h1>
            <img src={detail.pictureUrl} style={{width: 300}} alt={detail.title} />
            <p>{ detail.description }</p>
        </div>
    )
}

export default ItemDetailContainer