'use client'
import { useState } from 'react';
import Image from 'next/image';

export default function Card() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [hoveredButton, setHoveredButton] = useState(null);

    const handleCardMouseEnter = (index) => setHoveredCard(index);
    const handleCardMouseLeave = () => setHoveredCard(null);

    const handleButtonMouseEnter = (index) => setHoveredButton(index);
    const handleButtonMouseLeave = () => setHoveredButton(null);

    const cardStyle = (index) => ({
        transition: 'transform 0.3s, box-shadow 0.3s',
        transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
        boxShadow: hoveredCard === index ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
    });

    const buttonStyle = (cardIndex) => ({
        width: '100%',
        textAlign: 'center',
        display: 'inline-block',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '25px',
        background: hoveredButton === cardIndex 
            ? 'linear-gradient(45deg, #ff6f61, #de1c1c)' 
            : 'linear-gradient(45deg, #ff8e53, #ff6f61)', 
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '16px',
        textDecoration: 'none',
        boxShadow: hoveredButton === cardIndex ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 2px 6px rgba(0, 0, 0, 0.2)',
        transition: 'background 0.3s, transform 0.3s, box-shadow 0.3s',
        transform: hoveredButton === cardIndex ? 'scale(1.1)' : 'scale(1)',
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <div 
                        className="card" 
                        style={cardStyle(1)}
                        onMouseEnter={() => handleCardMouseEnter(1)}
                        onMouseLeave={handleCardMouseLeave}
                    >
                        <Image src="/assets/img/card1.jpg" layout="responsive" className="card-img-top" width={100} height={100} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Bocchi the Rock! ( ぼっち・ざ・ろっく )</h5>
                            <p className="card-text">
                                Kyuuzou Band’s new song “Now, I, From the Underground” has been chosen as the ending theme for the first part of “Theatrical Compilation Bocchi the Rock!”
                            </p>
                            <br />
                            <a 
                                href="https://bocchi.rocks" 
                                target="_blank" 
                                style={buttonStyle(1)}
                                onMouseEnter={() => handleButtonMouseEnter(1)}
                                onMouseLeave={handleButtonMouseLeave}
                            >
                                Visit
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div 
                        className="card" 
                        style={cardStyle(2)}
                        onMouseEnter={() => handleCardMouseEnter(2)}
                        onMouseLeave={handleCardMouseLeave}
                    >
                        <Image src="/assets/img/card2.jpg" layout="responsive" className="card-img-top" width={100} height={100} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Bocchi the Rock! ( ぼっち・ざ・ろっく )</h5>
                            <p className="card-text">
                                The original soundtrack included in the bonus CDs of the Blu-ray and DVD volumes 1 and 2 of the TV anime “Bocchi the Rock!” will be available for download and streaming. All 53 songs will be available for streaming from June 9th.
                            </p>
                            <a 
                                href="https://bocchi.rocks" 
                                target="_blank" 
                                style={buttonStyle(2)}
                                onMouseEnter={() => handleButtonMouseEnter(2)}
                                onMouseLeave={handleButtonMouseLeave}
                            >
                                Visit
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div 
                        className="card" 
                        style={cardStyle(3)}
                        onMouseEnter={() => handleCardMouseEnter(3)}
                        onMouseLeave={handleCardMouseLeave}
                    >
                        <Image src="/assets/img/card3.jpg" layout="responsive" className="card-img-top" width={100} height={100} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Bocchi the Rock! ( ぼっち・ざ・ろっく )</h5>
                            <p className="card-text">
                                The release of the mini album “Re: Yusakubando” has also been decided. It will include 6 songs including the opening, ending and coupling songs from the theatrical compilation, and will be released on August 14th.
                            </p>
                            <a 
                                href="https://bocchi.rocks" 
                                target="_blank" 
                                style={buttonStyle(3)}
                                onMouseEnter={() => handleButtonMouseEnter(3)}
                                onMouseLeave={handleButtonMouseLeave}
                            >
                                Visit
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
