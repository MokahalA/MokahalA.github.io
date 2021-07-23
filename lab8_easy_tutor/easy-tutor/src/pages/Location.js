import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../styles/Location.css'

function Location() {
    return (
        <div>
            <div className="hh-heading">
                <h1 id="title" class="display-4">Our Location</h1>
                <p class="lead" id="hh-marketing"> Visit our study spaces located at 150 Louis-Pasteur Private in downtown Ottawa.</p>
            </div>
            <div className="gallery">
                <Carousel className="carousel"> 
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src='/images/algonquin.jpeg'
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Group study zone</h3>
                        <p>Moderate noise zone</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src='images/algonquin2.jpeg'
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Tutoring area</h3>
                        <p>Moderate noise zone</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="images/haverford.jpeg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Individual study area</h3>
                        <p>Quiet zone</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="images/cafe.jpeg"
                        alt="Fourth slide"
                        />

                        <Carousel.Caption>
                        <h3>Cafe study area</h3>
                        <p>Moderate noise zone</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}

export default Location
