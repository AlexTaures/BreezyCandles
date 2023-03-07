import React from 'react';
import "../styles/candle.css"
import "../styles/home.css"
import homeText from "../resources/hometext.json"
import { useNavigate } from 'react-router';
import homeImage1 from "../img/candle.jpg";
import homeImage2 from "../img/candle2.jpg"

export default function Home() {
  const navigate = useNavigate();

  const goShop = (event) => {
    event.preventDefault();
    return navigate("/products");
  }

  const contactUS = (event) => {
    event.preventDefault();
    alert("Dear customer, you can use your email here")
  }
  
  return (
    <div className="container">
      <div className="tittle">
          <div className="candleContainer">
          <div class="holder">
            <div class="candle">
              <div class="blinking-glow"></div>
              <div class="thread"></div>
              <div class="glow"></div>
              <div class="flame"></div>
            </div>
          </div>
          </div>
          <div className='tittleText'><h1 className="part1">{homeText.tittle.part1}</h1><h1 className="part2">{homeText.tittle.part2}</h1></div>
          <div className="flag"><h5>{homeText.text0}</h5></div>
      </div>
      <div className="information">
        <h3>{homeText.text1}</h3>
        <button onClick={goShop}><i class="fa-solid fa-fire"></i>{homeText.button}</button>
      </div>
      <div className="information">
        <h4>{homeText.text2}</h4>
        <div className="image"><img src={homeImage1} alt="" /></div>
        <div className="image"><img src={homeImage2} alt="" /></div>
      </div>
      <div className='contactUS' ><button onClick={contactUS}><i class="fa-solid fa-id-badge"></i>Contact US</button></div>
      <div className="footer"><p>&copy; {homeText.footer}</p></div>
    </div>
  )
}
