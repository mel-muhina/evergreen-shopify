import { useState, useEffect } from 'react';
import Image from 'next/image'; 
import Link from 'next/link';

import denim from '../../../public/denim.png'; 
import jeans from '../../../public/jeans2.jpg';
import outwear from '../../../public/outwear.png';
import outwear2 from '../../../public/Outwear2.webp';
import pants from '../../../public/pants.png';
import woman1 from '../../../public/woman1.jpg';
import sweaters from '../../../public/sweaters.png';
import tees from '../../../public/tees.png';
import './Categories.css'

export default function Categories() {
  const [collection, setCollection] = useState([])

  useEffect(() => {
    getCollectionItems()
  }, [])

  useEffect(() => {
    console.log("Beep in Category", collection)
}, [collection])

  async function getCollectionItems() {
    try {
        const response = await fetch('https://mock.shop/api?query={collections(first:%206){edges%20{node%20{title%20image%20{altText%20url}}}}}')
        if (response.ok) {
            const data = await response.json();
            console.log("Collection data", data);
            setCollection(data.data.collections.edges)
        }

    } catch (err) {
        console.log(err)
     }
}

  return (
    <>
      {/* <div className='categories-container'>
        <h2>Shop by Category</h2>

        <div className='categories-img'>
          <div className='category-item'>
            <Image src={woman1} alt="Shirts"  className="category-image"/>
            <p>Shirts</p>
          </div>
          <div className='category-item'>
            <Image src={denim} alt="Denim"  width={300} height={300} className="category-image" /> 
            <p>Denim</p>
          </div>
          <div className='category-item'>
            <Image src={tees} alt="Tees" className="category-image"/>
            <p>Tees</p>
          </div>
          <div className='category-item'>
            <Image src={pants} alt="Pants" className="category-image" /> 
            <p>Pants</p>
          </div>
          <div className='category-item'>
            <Image src={sweaters} alt="Sweaters" className="category-image" /> 
            <p>Sweaters</p>
          </div>
          <div className='category-item'>
            <Image src={outwear2} alt="Outwear" className="category-image" /> 
            <p>Outwear</p>
          </div>
        </div>
      </div> */}

      <div className='categories-container'>
      <h2>Shop by Category</h2>
      <div className='categories-img'>
        {collection.map(item => 
            <div className='category-item'>
            <Link href={`/products/${item.node.title}`}>
              <Image src={item.node.image.url} alt={item.node.altText} width={300} height={300} className="category-image" />
            </Link>
            <p>{item.node.title}</p>
            </div>
        )}
      </div>

      </div>

    </>
  )
}
