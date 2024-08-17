import Image from "next/image";
import styled from "styled-components";

export default function Footer() {
    return (
        <div style={{ 
            background: '#FFFFFFCC', 
            padding: '10px', // เพิ่ม padding เพื่อเพิ่มความน่าสนใจ
            margin: '0',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // เพิ่มเงาที่ด้านล่างของ footer
        }}>
            <div className="container-fluid">
                <footer className="py-2 my-2">
                    <ul
                        className="nav justify-content-center border-bottom pb-2 mb-2"
                        style={{
                            borderBottomColor: 'white',
                            borderBottomWidth: '2px', // เพิ่มความหนาของเส้นขอบด้านล่าง
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // เพิ่มเงาที่ด้านล่างของ ul
                        }}
                    >
                        <li className="ms-3"><a className="text-body-secondary" href="#"><i className="bi bi-facebook"></i></a></li>
                        <li className="ms-3"><a className="text-body-secondary" href="#"><i className="bi bi-youtube"></i></a></li>
                        <li className="ms-3"><a className="text-body-secondary" href="#"><i className="bi bi-instagram"></i></a></li>
                        <li className="ms-3"><a className="text-body-secondary" href="#"><i className="bi bi-twitter"></i></a></li>
                        <li className="ms-3"><a className="text-body-secondary" href="#"><i className="bi bi-discord"></i></a></li>
                    </ul>
                    <p className="text-center text-body-secondary">© 2024 Maocode Company, Inc</p>
                </footer>
            </div>
        </div>
    );
}
