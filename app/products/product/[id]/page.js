"use client"; 
import { useRouter } from 'next/navigation'; 
import { useEffect, useState } from 'react';
import Image from 'next/image'; 
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SingleProductPage.css'

import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import classNames from 'classnames';

function SingleProductPage({ params }) {
    const router = useRouter();
    const { id } = params
    const [item, setItem] = useState([])
    const [variants, setVariants] = useState([])
    const [img, setImgs] = useState([])
    const [newId, setNewId] = useState('')

 

    const product = {
        name: 'Basic Tee 6-Pack',
        price: '$192',
        href: '#',
        breadcrumbs: [
          { id: 1, name: 'Men', href: '#' },
          { id: 2, name: 'Clothing', href: '#' },
        ],
        images: [
          {
            src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
          },
          {
            src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
          },
          {
            src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
          },
          {
            src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
          },
        ],
        colors: [
          { name: 'Green', class: 'bg-green-700', selectedClass: 'ring-gray-900' },
          { name: 'Olive', class: 'bg-olive', selectedClass: 'ring-gray-900' },
          { name: 'Teal', class: 'bg-teal-800', selectedClass: 'ring-gray-900' },
        ],
        sizes: [
          { name: 'S', inStock: true },
          { name: 'M', inStock: true },
          { name: 'L', inStock: true },
          { name: 'XL', inStock: true },
        ],
        description:
          'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
          'Hand cut and sewn locally',
          'Dyed with our proprietary colors',
          'Pre-washed & pre-shrunk',
          'Ultra-soft 100% cotton',
        ],
        details:
          'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
      }
    const reviews = { href: '#', average: 4.5, totalCount: 117 }
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  
    useEffect(() => {
      getCollectionItems()
    }, [])
  
    useEffect(() => {
      console.log("item", item)
      console.log("img", img)
      console.log("variants", variants)
    }, [item])

  
    async function getCollectionItems() {
      try {
          const response = await fetch(`https://mock.shop/api?query={product(id:%20%22gid://shopify/Product/${id}%22){title%20description%20images(first:%203){edges%20{node%20{url}}}%20variants(first:%203){edges%20{cursor%20node%20{id%20title%20image%20{url}%20price%20{amount%20currencyCode}}}}}}`)
          if (response.ok) {
              const data = await response.json();
              console.log("img", data);
              setItem(data.data.product)
              setImgs(data.data.product.images.edges)
              setVariants(data.data.product.variants.edges)
          }
  
      } catch (err) {
          console.log(err)
       }
  }
  return (
    <>

    <nav aria-label="Breadcrumb">
        <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {product.breadcrumbs.map((breadcrumb) => (
            <li key={breadcrumb.id}>
            <div className="flex items-center">
                <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                {breadcrumb.name}
                </a>
                <svg
                fill="currentColor"
                width={16}
                height={20}
                viewBox="0 0 16 20"
                aria-hidden="true"
                className="h-5 w-4 text-gray-300"
                >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
            </div>
            </li>
        ))}
        <li className="text-sm">
            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
            {item?.title}
            </a>
        </li>
        </ol>
    </nav>


    <div className='single-product-container'>
        <div className='images-container'>
            {img.map(img => 
            <div className='image-container'>
                <Image src={img.node.url} alt={item.title} width={300} height={300} className="h-full w-full object-cover object-center" />
            </div>
            )}
        </div>
        {/* <Image src={item.images?.edges[0]?.node.url} alt={item.title} width={300} height={300} className="category-image" /> */}
        
        <div className='text-container'>

            <div className="lg:col-span-2 lg:border-l lg:border-gray-200 lg:pr-8">
             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left">{item?.title}</h1>
            </div>
    
              {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-2xl tracking-tight text-gray-900 text-left">£{item?.variants?.edges[0]?.node.price.amount}0</p>

            {/* Reviews */}
            <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center ">
                <div className="flex items-center " >
                    {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0 text-left',
                        )}
                    />
                    ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500 text-left">
                    {reviews.totalCount} reviews
                </a>
                </div>
            </div>
            </div>

            <form className="mt-10">

                
        {/* Colours */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 text-left">Colour</h3>

          <fieldset aria-label="Choose a color" className="mt-4">
            <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center space-x-3">
              {product.colors.map((color) => (
                <Radio
                  key={color.name}
                  value={color}
                  aria-label={color.name}
                  className={classNames(
                    'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
                    selectedColor.name === color.name 
                      ? `${color.selectedClass} ring-2`  // Apply selected class with ring
                      : 'ring-transparent'  // Default ring
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={classNames(
                      color.class,
                      'h-8 w-8 rounded-full border border-black border-opacity-10',
                    )}
                  />
                </Radio>
              ))}
            </RadioGroup>
          </fieldset>
        </div>

        {/* Sizes */}
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-900">Size</h3>
            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
              Size guide
            </a>
          </div>

          <fieldset aria-label="Choose a size" className="mt-4">
            <RadioGroup
              value={selectedSize}
              onChange={setSelectedSize}
              className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
            >
              {product.sizes.map((size) => (
                <Radio
                  key={size.name}
                  value={size}
                  disabled={!size.inStock}
                  className={classNames(
                    'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase focus:outline-none sm:flex-1 sm:py-6',
                    size.inStock
                        ? selectedSize.name === size.name
                        ? ' text-black ring-2 ring-orangey cursor-pointer'
                        : 'bg-white text-gray-900 cursor-pointer'
                        : 'cursor-not-allowed bg-gray-50 text-gray-200'
                    )}
                >
                  <span>{size.name}</span>
                  {size.inStock ? (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-orange-500"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                    >
                      <svg
                        stroke="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                      >
                        <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                      </svg>
                    </span>
                  )}
                </Radio>
              ))}
            </RadioGroup>
          </fieldset>
        </div>

        <br></br>

        <p>Shipping calculated at checkout.</p>
        
        <button
          type="submit"
          className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-orangey px-8 py-3 text-base font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Add to bag
        </button>
      </form>
      <br></br>
      <h3 className="text-sm font-medium text-gray-900">Description</h3>
            <br></br>
            <p>{item?.description}</p>
        </div>
    
    </div>




</>
  )
}

export default SingleProductPage