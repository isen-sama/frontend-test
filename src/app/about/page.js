import React from 'react';

const BochiTheRock = () => {
  return (
    <div style={{
      backgroundColor: '#0d1a34',
      color: '#fff',
      padding: '20px',
      borderRadius: '10px',
      animation: 'fadeIn 1s ease-in-out',
      maxWidth: '100%',
      boxSizing: 'border-box',
      minHeight: '90vh',
    }}>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .character-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position: relative;
            background-color: #542f8e;
            border: 2px solid #00a8ab;
            width: 100%;
            max-width: 120px;
            margin: 10px;
            border-radius: 5px;
          }

          .character-card:hover {
            transform: scale(1.1);
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.4);
          }

          .character-card img {
            width: 100%;
            height: auto;
            border-radius: 5px;
          }

          .character-card span {
            padding: 3px;
            line-height: 150%;
            background-color: #000000;
            border: 1px solid white;
            position: absolute;
            right: 5px;
            bottom: 5px;
            font-size: x-small;
            font-weight: bold;
            color: white;
          }

          @media (max-width: 600px) {
            .character-card {
              max-width: 90px;
            }

            .character-card span {
              font-size: xx-small;
            }

            .character-container {
              flex-direction: column;
              align-items: center;
            }
          }
        `}
      </style>
      <div style={{ marginBottom: '20px', animation: 'fadeIn 1.2s ease-in-out' }}>
        <br/><br/><br/><br/>
        <h2 style={{ color: '#8c52ff', textAlign: 'center', animation: 'fadeIn 1.4s ease-in-out' }}>Characters</h2><br/><br/>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }} className="character-container">
          <div className="character-card" style={{ animation: 'fadeIn 1.6s ease-in-out' }}>
            <div style={{ borderRadius: 3, overflow: 'hidden' }}>
              <a href="#" title="Hitori Gotoh">
                <img alt="Hitori Gotoh Profile" src="/assets/img/Hitori_Gotoh.png" decoding="async" loading="lazy" />
              </a>
            </div>
            <a href="#" title="Hitori Gotoh">
              <span>Hitori Gotoh</span>
            </a>
          </div>
          
          <div className="character-card" style={{ animation: 'fadeIn 1.8s ease-in-out' }}>
            <div style={{ borderRadius: 3, overflow: 'hidden' }}>
              <a href="#" title="Nijika Ijichi">
                <img alt="Nijika Ijichi Profile" src="/assets/img/Nijika_Ijichi.png" className="lazyloaded" />
              </a>
            </div>
            <a href="#" title="Nijika Ijichi">
              <span>Nijika Ijichi</span>
            </a>
          </div>

          <div className="character-card" style={{ animation: 'fadeIn 2s ease-in-out' }}>
            <div style={{ borderRadius: 3, overflow: 'hidden' }}>
              <a href="#" title="Ryo Yamada">
                <img alt="Ryo Yamada Profile" src="/assets/img/Ryo_Yamada.png" decoding="async" loading="lazy" />
              </a>
            </div>
            <a href="#" title="Ryo Yamada">
              <span>Ryo Yamada</span>
            </a>
          </div>

          <div className="character-card" style={{ animation: 'fadeIn 2.2s ease-in-out' }}>
            <div style={{ borderRadius: 3, overflow: 'hidden' }}>
              <a href="#" title="Ikuyo Kita">
                <img alt="Ikuyo Kita Profile" src="/assets/img/Ikuyo_Kita.png" decoding="async" loading="lazy" />
              </a>
            </div>
            <a href="#" title="Ikuyo Kita">
              <span>Ikuyo Kita</span>
            </a>
          </div>
        </div>
      </div>
      <br/><br/>
      <div style={{
        backgroundColor: '#401a8c',
        padding: '20px',
        borderRadius: '10px',
        animation: 'fadeIn 2.4s ease-in-out'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', animation: 'fadeIn 2.6s ease-in-out' }}>About the series</h2>
        <p style={{ animation: 'fadeIn 2.8s ease-in-out' }}>
          <strong>Bocchi the Rock!</strong> is a band comedy 4-koma manga series written and illustrated by <strong>Aki Hamazi</strong>. 
          The manga series serialized in <strong>Manga Time Kirara MAX</strong> by <strong>Houbunsha</strong> since the February 2018 issue and 
          collected five volumes in tankōbon format as of November 2022, and has an official translation by <strong>Yen Press</strong>, which 
          will debut on October 17, 2023. It became a popular series for its successor of <strong>K-ON!</strong> and ranked 8th place in the 
          <strong>Next Manga Awards</strong> 2019. An anime series produced by <strong>CloverWorks</strong> and premiered from October 9 to 
          December 25, 2022, and has two theater compilations, the first part was screened on June 7, 2024, and the second part will be 
          screened on August 9, 2024.
        </p>
        <p style={{ animation: 'fadeIn 3s ease-in-out' }}>
          In this story, <strong>Hitori Gotoh</strong> is a high school girl who's starting to learn to play the guitar because she dreams of 
          being in a band, but she's so shy that she hasn't made a single friend. However, her dream might come true after she meets 
          <strong>Nijika Ijichi</strong>, a girl who plays drums and is looking for a new guitarist for <strong>her band</strong>.
        </p>
      </div>
    </div>
  );
};

export default BochiTheRock;
