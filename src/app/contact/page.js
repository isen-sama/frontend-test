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
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#ffffffcc',
        padding: '20px',
        boxSizing: 'border-box',
        borderRadius: '10px',
        animation: isAnimated ? 'fadeIn 1s ease-out' : 'none',
    };

    const leftPanelStyle = {
        flex: 1,
        backgroundColor: '#485566',
        color: 'white',
        padding: '50px',
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
    };

    const rightPanelStyle = {
        flex: 1,
        backgroundColor: 'white',
        padding: '50px',
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
    };

    const titleStyle = {
        fontSize: '36px',
        marginBottom: '20px',
        fontWeight: 'bold',
        transition: 'color 0.3s ease',
    };

    const textStyle = {
        fontSize: '16px',
        lineHeight: '1.5',
        marginBottom: '30px',
    };

    const contactInfoStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        fontSize: '16px',
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    };

    const inputStyle = {
        padding: '15px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #DADCE0',
        width: '100%',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    };

    const textareaStyle = {
        padding: '15px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #DADCE0',
        width: '100%',
        height: '150px',
        resize: 'none',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    };

    const buttonStyle = {
        padding: '15px',
        fontSize: '16px',
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
            padding: '100px', 
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
