'use client';
import React, { useEffect, useState } from 'react';

const ContactUs = () => {
    const [isAnimated, setIsAnimated] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Trigger animation after component mounts
        setIsAnimated(true);

        // Function to handle window resize
        const handleResize = () => setWindowWidth(window.innerWidth);

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Define responsive styles
    const containerStyle = {
        display: 'flex',
        flexDirection: windowWidth < 768 ? 'column' : 'row',
        flexWrap: 'wrap', // Allow wrapping for smaller screens
        height: 'auto',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#ffffffcc',
        padding: '20px',
        boxSizing: 'border-box',
        borderRadius: '10px',
        animation: isAnimated ? 'fadeIn 1s ease-out' : 'none',
    };

    const panelStyle = {
        flex: 1,
        minWidth: '300px', // Ensure minimum width on small screens
        padding: windowWidth < 768 ? '10px' : '20px',
        borderRadius: '10px',
        boxSizing: 'border-box',
        transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
        transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
        opacity: isAnimated ? 1 : 0,
        animation: isAnimated ? 'slideIn 1s ease-out' : 'none',
    };

    const leftPanelStyle = {
        ...panelStyle,
        backgroundColor: '#485566',
        color: 'white',
        marginRight: windowWidth < 768 ? '0' : '20px',
    };

    const rightPanelStyle = {
        ...panelStyle,
        backgroundColor: 'white',
        marginLeft: windowWidth < 768 ? '0' : '20px',
    };

    const titleStyle = {
        fontSize: windowWidth < 768 ? '24px' : '36px', // Adjust font size for smaller screens
        marginBottom: '15px',
        fontWeight: 'bold',
        transition: 'color 0.3s ease',
    };

    const textStyle = {
        fontSize: windowWidth < 768 ? '14px' : '16px', // Adjust font size for smaller screens
        lineHeight: '1.5',
        marginBottom: '20px',
    };

    const contactInfoStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        fontSize: windowWidth < 768 ? '14px' : '16px', // Adjust font size for smaller screens
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    };

    const inputStyle = {
        padding: '10px',
        fontSize: windowWidth < 768 ? '14px' : '16px', // Adjust font size for smaller screens
        borderRadius: '5px',
        border: '1px solid #DADCE0',
        width: '100%',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    };

    const textareaStyle = {
        padding: '10px',
        fontSize: windowWidth < 768 ? '14px' : '16px', // Adjust font size for smaller screens
        borderRadius: '5px',
        border: '1px solid #DADCE0',
        width: '100%',
        height: windowWidth < 768 ? '120px' : '150px', // Adjust height for smaller screens
        resize: 'none',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    };

    const buttonStyle = {
        padding: '10px',
        fontSize: windowWidth < 768 ? '14px' : '16px', // Adjust font size for smaller screens
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
            background: '#758694', 
            padding: windowWidth < 768 ? '10px' : '20px', // Adjust padding for smaller screens
            minHeight: '50vh',
            ...animationStyle,
          }}><br/><br/><br/>
        <div style={containerStyle}>
            <div style={leftPanelStyle} 
                 onMouseEnter={() => { 
                    document.querySelector('#leftPanel').style.transform = 'scale(1.02)';
                    document.querySelector('#leftPanel').style.backgroundColor = '#4a5d6e';
                 }}
                 onMouseLeave={() => { 
                    document.querySelector('#leftPanel').style.transform = 'scale(1)';
                    document.querySelector('#leftPanel').style.backgroundColor = '#485566';
                 }}
                 id="leftPanel">
                <h1 style={titleStyle}>Contact Information</h1>
                <p style={textStyle}>
                Contact us about promoting the Bocchi the Rock anime.
                </p>
                <div style={contactInfoStyle}>
                    <p>📞 0123456789</p>
                    <p>✉️ simple@mail.com</p>
                </div>
            </div>
            <div style={rightPanelStyle} 
                 onMouseEnter={() => { 
                    document.querySelector('#rightPanel').style.transform = 'scale(1.02)';
                 }}
                 onMouseLeave={() => { 
                    document.querySelector('#rightPanel').style.transform = 'scale(1)';
                 }}
                 id="rightPanel">
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
