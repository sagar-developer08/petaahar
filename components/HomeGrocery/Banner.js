import React from 'react';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="grocery-main-banner">
            <div className="grocery-banner-content">
                {/* <br/> */}
                {/* <h3>From Our Kitchen to Their Bowl - Pure Pet Pleasure!</h3> */}
                {/* <p>From Our Kitchen to Their Bowl - Pure Pet Pleasure!</p> */}
                {/* <h2>20% OFF</h2> */}
                <Link href="#">
                    <a className="default-btn">20% OFF Shop Now</a>
                </Link>
            </div>
        </div> 
    )
}

export default Banner;