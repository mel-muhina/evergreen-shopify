import Button from 'react-bootstrap/Button';
import './Hero.css'


export default function Hero() {
  return (
    <>
        <div className='hero-container'>
          <div className='hero-text'>
            <h1>Your Cosy Era</h1>
            <p>Get peak comfy-chic with new winter essentials.</p>
            {/* <Button variant="primary">Shop Now</Button>{' '} */}
            <button
            type="submit"
            className="mt-4 flex w-5/6 items-center justify-center rounded-md border-transparent bg-orangey px-3 py-3 text-base font-xl text-white hover:bg-orange-600 transition focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Shop Now
            </button>
          </div>
        </div>
    </>
  )
}
