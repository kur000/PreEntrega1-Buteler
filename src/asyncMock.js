const merch = [
    {
      id: '1', 
      title: 'producto 1',
      category: 'mangas' ,
      description: 'descripcion prod 1',
      price: '500',
      pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/955/579/products/blamevol011-071d7f14657395417215905382598814-1024-10241-62d8b324f880efe31915965802207538-1024-1024.jpg'

    },
  
    {
      id: '2', 
      title: 'producto 2',
      category: 'mangas' ,
      description: 'descripcion prod 2',
      price: '500',
      pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/955/579/products/blamevol021-d6127667a8fd182cc315905383422563-1024-10241-b7d1c3ffb83164e81e15965804732810-640-0.jpg'
    },
  
    {
      id: '3', 
      title: 'producto 3',
      category: 'mangas' ,
      description: 'descripcion prod 3',
      price: '500',
      pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_694169-MLA43189851929_082020-O.jpg'
    },

    {
      id: '4', 
      title: 'producto 4',
      category: 'comics' ,
      description: 'descripcion prod 4',
      price: '500',
      pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Watchmen-cover.svg'
    },

    {
      id: '5', 
      title: 'producto 5',
      category: 'comics' ,
      description: 'descripcion prod 5',
      price: '500',
      pictureUrl: 'https://img.huffingtonpost.com/asset/5bb617a3240000510056a01f.jpeg?ops=scalefit_720_noupscale'
    }
  ]
  
  export const getMerch = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(merch);
      }, 800);
    })
  }
  
  export const getDetailById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(merch.find(
          prod => prod.id === id
        ));
      }, 800);
    })

  }
  export const getCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(merch.filter(
          prod => prod.category === categoryId
        ));
      }, 800);
    })
  }