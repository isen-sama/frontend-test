import Image from "next/image";

export default function Footer() {
    const footerStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white background
        backdropFilter: 'blur(10px)', // Blurred background
        border: 'none', // No border
        borderRadius: '0', // No rounded corners
        boxShadow: 'none', // No shadow
        transition: 'background-color 0.3s ease', // Smooth transition for background color changes
        zIndex: 1000, // Ensure footer is above other elements
        position: 'relative', // Ensures proper positioning
    };

    const textStyle = {
        color: '#000', // Ensure text is fully visible
        margin: 0, // Remove default margins
    };

    return (
        <div style={footerStyle}>
            <div className="container-fluid">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        {/* Add footer links or content here if needed */}
                    </ul>
                    <p className="text-center" style={textStyle}>© Copyright 2024. Powered by MaoAnime</p>
                </footer>
            </div>
        </div>
    );
}
