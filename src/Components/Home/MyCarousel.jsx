import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'

const MyCarousel = () => {
    return (
        <div id='Mycarousel'>

            <Carousel interval={3000}
            //  indicators={false} controls={false}
             >
                <Carousel.Item>

                    <div className="img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmZ2Z4XTjLSBTrCdX_M0bZR8O_sodHmoI0FAs5Zr3-9w&s=10" width={200} alt="" />

                    </div>
                    <Carousel.Caption className='Caption'>
                        <h3>First Slide</h3>
                        <p>Description here.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <div className="img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmZ2Z4XTjLSBTrCdX_M0bZR8O_sodHmoI0FAs5Zr3-9w&s=10" width={200} alt="" />

                    </div>
                    <Carousel.Caption className='Caption'>
                        <h3>Second Slide</h3>
                        <p>Description here.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <div className="img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmZ2Z4XTjLSBTrCdX_M0bZR8O_sodHmoI0FAs5Zr3-9w&s=10" width={200} alt="" />

                    </div>
                    <Carousel.Caption className='Caption'>
                        <h3>Third Slide</h3>
                        <p>Description here.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <div className="img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmZ2Z4XTjLSBTrCdX_M0bZR8O_sodHmoI0FAs5Zr3-9w&s=10" width={200} alt="" />

                    </div>
                    <Carousel.Caption className='Caption'>
                        <h3>Four Slide</h3>
                        <p>Description here.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <div className="img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmZ2Z4XTjLSBTrCdX_M0bZR8O_sodHmoI0FAs5Zr3-9w&s=10" width={200} alt="" />

                    </div>
                    <Carousel.Caption className='Caption'>
                        <h3>Five Slide</h3>
                        <p>Description here.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <div className="img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmZ2Z4XTjLSBTrCdX_M0bZR8O_sodHmoI0FAs5Zr3-9w&s=10" width={200} alt="" />

                    </div>
                    <Carousel.Caption className='Caption'>
                        <h3>Six Slide</h3>
                        <p>Description here.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        </div>
    )
}

export default MyCarousel