const merch = [
    {
      id: '1', 
      title: 'producto 1',
      description: 'descripcion prod 1',
      price: '500'
    },
  
    {
      id: '2', 
      title: 'producto 2',
      description: 'descripcion prod 2',
      price: '500'
    },
  
    {
      id: '3', 
      title: 'producto 3',
      description: 'descripcion prod 3',
      price: '500'
    }
  ]
  
  export const getMerch = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(merch);
      }, 800);
    })
  }