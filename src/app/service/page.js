import Image from 'next/image';

export default function Carousel() {
    // Inline style for the carousel container
    const carouselStyle = {
        maxWidth: '100%',
        margin: '0 auto',
        position: 'relative',
    };

    // Inline style for the images
    const imageStyle = {
        borderRadius: '15px', // Adjust the value as needed
        width: '100%', // Make sure the image scales with the container
        height: 'auto', // Maintain aspect ratio
    };

    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" style={carouselStyle}>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="1500">
                    <Image 
                        src="/assets/img/carousel_1.jpg" 
                        layout="responsive" 
                        className="d-block" 
                        width={1920} 
                        height={960} 
                        alt="Carousel Image 1" 
                        style={imageStyle} 
                    />
                </div>
                <div className="carousel-item" data-bs-interval="1500">
                    <Image 
                        src="/assets/img/carousel_2.jpg" 
                        layout="responsive" 
                        className="d-block" 
                        width={1920} 
                        height={960} 
                        alt="Carousel Image 2" 
                        style={imageStyle} 
                    />
                </div>
                <div className="carousel-item" data-bs-interval="1500">
                    <Image 
                        src="/assets/img/carousel_3.png" 
                        layout="responsive" 
                        className="d-block" 
                        width={1920} 
                        height={960} 
                        alt="Carousel Image 3" 
                        style={imageStyle} 
                    />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
