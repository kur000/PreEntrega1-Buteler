import Item from '../Item/Item'

const ItemList = (items) => {

    return(
        items.map(
            item =>
                <div>
                    <Item key={item.id} />
                </div>
        )
    )
}

export default ItemList