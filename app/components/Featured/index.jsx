import Image from 'next/image';
import { Card, Button } from 'react-bootstrap';
import Woman1 from '../../../public/woman1.jpg'
import Woman2 from '../../../public/woman2.jpg'
import Woman3 from '../../../public/woman3.jpg'
import Woman4 from '../../../public/Woman4.jpg'
import Man1 from '../../../public/man1.jpg'
import './Featured.css'

export default function Featured() {
  return (
    <>
    <div className='featured-container'>
        <div className='featured-item'>
            <Card className="bg-dark text-white">
            <Image src={Woman2} alt="New Arrivals" className='featured-img' />
            <Card.ImgOverlay>
                <Card.Title>New Arrivals</Card.Title>
                <Button variant="primary">Shop The Latest</Button>
            </Card.ImgOverlay>
            </Card>
        </div>
        <div className='featured-item'>
            <Card className="bg-dark text-white">
            <Image src={Man1} alt="Best Sellers" className='featured-img' />
            <Card.ImgOverlay>
                <Card.Title>Best Sellers</Card.Title>
                <Button variant="primary">Shop Your Favourites</Button>
            </Card.ImgOverlay>
            </Card>
        </div>
        <div className='featured-item'>
            <Card className="bg-dark text-white">
            <Image src={Woman3} alt="Holiday Outfits" className='featured-img' />
            <Card.ImgOverlay>
                <Card.Title>Holiday Outfits</Card.Title>
                <Button variant="primary">Shop Occasion</Button>
            </Card.ImgOverlay>
            </Card>
        </div>
    </div>
    </>
  )
}
