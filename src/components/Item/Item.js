import { Link } from 'react-router-dom'

const Item = ({ item }) => {
    return(
        <div style={{
                display: 'flex' ,
                flexDirection: 'column' ,
                alignItems: 'center'}}>
            <h1>{item.title}</h1>
            <img src={ item.pictureUrl } alt='product' style={{width: 200}} />
            <Link to={`/detail/${item.id}`} style={{ display: 'block', padding: '10' }}>Detail</Link>
        </div>
    )
}

export default Item