'use client'
import React, { useEffect, useState } from 'react';

const ContactUs = () => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        setIsAnimated(true);
    }, []);

    const containerStyle = {
        position: 'relative', // Ensure container is positioned relative for child positioning
        zIndex: 1, // Ensure container is above the video
        display: 'flex',
        flexDirection: 'row',
        height: 'auto',
        maxWidth: '900px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#ffffffcc',
        padding: '20px',
        boxSizing: 'border-box',
        borderRadius: '10px',
        animation: isAnimated ? 'fadeIn 1s ease-out' : 'none',
        flexWrap: 'wrap',
    };

    const panelStyle = {
        flex: '1 1 45%',
        padding: '20px',
        borderRadius: '10px',
        boxSizing: 'border-box',
        transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
        margin: '10px',
    };

    const leftPanelStyle = {
        ...panelStyle,
        backgroundColor: '#485566',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
        opacity: isAnimated ? 1 : 0,
        animation: isAnimated ? 'slideIn 1s ease-out' : 'none',
    };

    const rightPanelStyle = {
        ...panelStyle,
        backgroundColor: 'white',
        marginLeft: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box',
        transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
        opacity: isAnimated ? 1 : 0,
        animation: isAnimated ? 'slideIn 1s ease-out' : 'none',
    };

    const titleStyle = {
        fontSize: '24px',
        marginBottom: '10px',
        fontWeight: 'bold',
        transition: 'color 0.3s ease',
    };

    const textStyle = {
        fontSize: '14px',
        lineHeight: '1.5',
        marginBottom: '20px',
    };

    const contactInfoStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        fontSize: '14px',
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    };

    const inputStyle = {
        padding: '10px',
        fontSize: '14px',
        borderRadius: '5px',
        border: '1px solid #DADCE0',
        width: '100%',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    };

    const textareaStyle = {
        padding: '10px',
        fontSize: '14px',
        borderRadius: '5px',
        border: '1px solid #DADCE0',
        width: '100%',
        height: '100px',
        resize: 'none',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    };

    const buttonStyle = {
        padding: '10px',
        fontSize: '14px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#1A73E8',
        color: 'white',
        cursor: 'pointer',
        alignSelf: 'flex-start',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
    };

    const animationStyle = {
        opacity: isAnimated ? 1 : 0,
        transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 1s ease-out, transform 1s ease-out',
    };

    return (
        <div style={{ 
            position: 'relative', 
            minHeight: '90vh',
            overflow: 'hidden',
            ...animationStyle,
          }}
        ><br/><br/><br/><br/><br/><br/><br/><br/>
            <video 
                src="/assets/video/background.mp4" // Replace with your video URL
                autoPlay
                loop
                muted
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'blur(8px)',
                    zIndex: '-1',
                }}
            />
            <div style={containerStyle}>
                <div 
                    style={leftPanelStyle} 
                    onMouseEnter={() => { 
                        document.querySelector('#leftPanel').style.transform = 'scale(1.02)';
                        document.querySelector('#leftPanel').style.backgroundColor = '#4a5d6e';
                    }}
                    onMouseLeave={() => { 
                        document.querySelector('#leftPanel').style.transform = 'scale(1)';
                        document.querySelector('#leftPanel').style.backgroundColor = '#485566';
                    }}
                    id="leftPanel"
                >
                    <h1 style={titleStyle}>Contact Information</h1>
                    <p style={textStyle}>
                        Contact us about promoting the Bocchi the Rock anime.
                    </p>
                    <div style={contactInfoStyle}>
                        <p><i className="bi bi-telephone-fill"></i> 0123456789</p>
                        <p><i className="bi bi-envelope-fill"></i> simple@mail.com</p>
                    </div>
                </div>
                <div 
                    style={rightPanelStyle} 
                    onMouseEnter={() => { 
                        document.querySelector('#rightPanel').style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={() => { 
                        document.querySelector('#rightPanel').style.transform = 'scale(1)';
                    }}
                    id="rightPanel"
                >
                    <h2 style={titleStyle}>Contact Us</h2>
                    <form style={formStyle}>
                        <input type="text" placeholder="Enter your full name" style={inputStyle} required />
                        <input type="text" placeholder="Enter a subject" style={inputStyle} required />
                        <textarea placeholder="Enter your message" style={textareaStyle} required></textarea>
                        <button type="submit" style={buttonStyle}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
