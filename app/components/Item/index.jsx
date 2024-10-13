import React, { useEffect, useState } from 'react'
import './Item.css'

function Item() {
    const [item, setItem] = useState([])
    const [collection, setCollection] = useState([])

    useEffect(() => {
        getItem()
        getCollectionItems()
      
    }, [])

    async function getItem() {
     try{
        const response = await fetch('https://mock.shop/api?query={product(id:%20%22gid://shopify/Product/7982905098262%22){id%20title%20description%20featuredImage%20{id%20url}}}')
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setItem(data)
            } 
     } catch (err) {
        console.log(err)
     }
    
}


    async function getCollectionItems() {
        try {
            const response = await fetch('https://mock.shop/api?query={collection(id:%20%22gid://shopify/Collection/429512622102%22){id%20handle%20title%20description%20image%20{id%20url}%20products(first:%2020){edges%20{node%20{id%20title%20featuredImage%20{id%20url}}}}}}')
            if (response.ok) {
                const data = await response.json();
                console.log("Collection data", data);
                setCollection(data.data.collection)
            }

        } catch (err) {
            console.log(err)
         }
    }

  return (
    <>
       
    </>
  )
}

export default Item