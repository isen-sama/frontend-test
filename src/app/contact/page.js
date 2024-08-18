'use client'
import React, { useEffect, useState } from 'react';

const ContactUs = () => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        setIsAnimated(true);
    }, []);

    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
        height: 'auto',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#ffffffcc',
        padding: '20px',
        boxSizing: 'border-box',
        borderRadius: '10px',
        animation: isAnimated ? 'fadeIn 1s ease-out' : 'none',
        flexWrap: 'wrap',  // Ensures responsiveness on small screens
    };

    const leftPanelStyle = {
        flex: '1 1 45%',  // Allows it to grow and shrink based on the screen size
        backgroundColor: '#485566',
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
        transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
        transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
        opacity: isAnimated ? 1 : 0,
        animation: isAnimated ? 'slideIn 1s ease-out' : 'none',
        margin: '10px',  // Add margin for spacing
    };

    const rightPanelStyle = {
        flex: '1 1 45%',  // Allows it to grow and shrink based on the screen size
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        marginLeft: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box',
        transition: 'transform 0.3s ease-in-out',
        transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
        opacity: isAnimated ? 1 : 0,
        animation: isAnimated ? 'slideIn 1s ease-out' : 'none',
        margin: '10px',  // Add margin for spacing
    };

    const titleStyle = {
        fontSize: '24px',  // Adjusted for better readability on mobile
        marginBottom: '10px',
        fontWeight: 'bold',
        transition: 'color 0.3s ease',
    };

    const textStyle = {
        fontSize: '14px',  // Adjusted for better readability on mobile
        lineHeight: '1.5',
        marginBottom: '20px',
    };

    const contactInfoStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        fontSize: '14px',  // Adjusted for better readability on mobile
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
        height: '100px',  // Adjusted for better fit on mobile
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
            background: '#758694', 
            padding: '20px',
            minHeight: '50vh',
            ...animationStyle,
          }}>
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
                <h1 style={titleStyle}>Contact information</h1>
                <p style={textStyle}>
                Contact us about promoting the Bocchi the rock anime.
                </p>
                <div style={contactInfoStyle}>
                    <p><i class="bi bi-telephone-fill"></i> 0123456789</p>
                    <p><i class="bi bi-envelope-fill"></i> simple@mail.com</p>
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
                <h2 style={titleStyle}>ContactUs</h2>
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
