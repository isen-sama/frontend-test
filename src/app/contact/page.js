import React from 'react';

const ContactUs = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#E5F0FA',
        padding: '20px',
        boxSizing: 'border-box',
    };

    const leftPanelStyle = {
        flex: 1,
        backgroundColor: '#1A2A40',
        color: 'white',
        padding: '50px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
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
    };

    const titleStyle = {
        fontSize: '36px',
        marginBottom: '20px',
        fontWeight: 'bold',
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
    };

    const textareaStyle = {
        padding: '15px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #DADCE0',
        width: '100%',
        height: '150px',
        resize: 'none',
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
    };

    return (
        <div style={containerStyle}>
            <div style={leftPanelStyle}>
                <h1 style={titleStyle}>ข้อมูลในการติดต่อ</h1>
                <p style={textStyle}>
                    ...
                </p>
                <div style={contactInfoStyle}>
                    <p>📞 0123456789</p>
                    <p>✉️ simple@mail.com</p>
                </div>
            </div>
            <div style={rightPanelStyle}>
                <h2 style={titleStyle}>ContactUs</h2>
                <form style={formStyle}>
                    <input type="text" placeholder="Name" style={inputStyle} required />
                    <input type="text" placeholder="หัวข้อในการติดต่อ" style={inputStyle} required />
                    <textarea placeholder="โปรดระบุข้อความ" style={textareaStyle} required></textarea>
                    <button type="submit" style={buttonStyle}>ส่งข้อความ</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
