import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "./components/carousel";
import Card from "./components/card";

export default function Home() {
  return (
    <>
      <div style={{ 
        background: 'linear-gradient(to right, #405D72, #758694)', 
        padding: '20px', 
        minHeight: '100vh',
      }}>
      <br/><br/><br/>
      <Carousel/>
      <br/>
      <Card/>
      <br/>
      </div>
    </>
  );
}
