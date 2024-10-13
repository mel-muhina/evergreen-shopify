"use client"; 
import { useRouter } from 'next/navigation'; 
import { useEffect, useState } from 'react';
import Image from 'next/image'; 
import Link from 'next/link';
import './Products.css'

export default function ProductPage({ params }) {
  const router = useRouter();
  const { id } = params
  const [collection, setCollection] = useState([])
  const [newId, setNewId] = useState('')

  useEffect(() => {
    getCollectionItems()
  }, [])

  async function getCollectionItems() {
    try {
        const response = await fetch(`https://mock.shop/api?query={products(first:%2010,%20query:%20%22tag:${id}%22){edges%20{node%20{id%20title%20tags%20description%20images(first:%201){edges%20{node%20{url}}}%20variants(first:%201){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}`)
        if (response.ok) {
            const data = await response.json();
            console.log("Collection data", data);
            setCollection(data.data.products.edges)
        }

    } catch (err) {
        console.log(err)
     }
}

  return (
    <>
      <div className='products-container'>
        <h1 className='font-large text-gray-500'> {id}</h1>
        <div className='products-img'>
         {collection.map(item => 
            <div className='products-item'>
                <Link href={`/products/product/${item.node.id.split('/').pop()}`}>
                 <Image src={item.node.images.edges[0].node.url} alt={item.node.title} width={300} height={300} className="category-image" />
                </Link>
                <h3>{item.node.title}</h3>
                <h2>£{item.node.variants.edges[0].node.price.amount}0</h2>
            </div>
         )}
        </div>
      </div>    
    </>
  )
}
