import React from "react";
import logo from "./logo.svg";
import "./App.css";

import CardImage1 from "../components/images/family.png";
import CardImage2 from "../components/images/Door.jpg";
import CardImage3 from "../components/images/Earth.jpg";
import CardImage4 from "../components/images/Grabstätte.jpg";
import CardImage5 from "../components/images/Lichter.jpg";
import CardImage6 from "../components/images/Strand.jpg";
import CardImage7 from "../components/images/Wald.jpg";
import CardImage8 from "../components/images/Weg.jpg";
import CardImage9 from "../components/images/Winter.jpg";
import CardImage10 from "../components/images/Baby.jpg";
import CardImage11 from "../components/images/china.jpg";
import CardImage12 from "../components/images/AbuDhabi.jpg"
import CardImage13 from "../components/images/Ramadan.jpg"
import CardImage14 from "../components/images/Smiley.jpg"
import CardImage15 from "../components/images/Quran.jpg"

function App() {
  const quote1 = () => {
    alert("Wie hilft Dir deine Familie in dieser schweren Zeit?");
  };

  const quote2 = () => {
    alert("Wenn Gott eine Tür schließt, öffnet sich eine andere. Welche Türen haben sich für dich verschlossen und welche öffnen sich?");
  };

  const quote3 = () => {
    alert("Was verbindest du in deiner Situation mit dem Begriff 'Ewigkeit'?");
  };

  const quote4 = () => {
    alert("Der Prophet legte uns ans Herz, die Gräber oft zu besuchen. Wie sieht dein Ritual aus wenn du den Friedhof betrittst?");
  };

  const quote5 = () => {
    alert("Allah ist das Licht, der Himmel und der Erde (Sure 24:35)");
  };

  const quote6 = () => {
    alert("Welcher Ort bringt dir denn in deiner Situation am meisten Ruhe?");
  };

  const quote7 = () => {
    alert("Trauernde finden verschiedene Aktivitäten um sich abzulenken. Welcher Aktivität gehst du in deiner Situation nach?");
  };

  const quote8 = () => {
    alert("Welche Person begleitet Dich zur Zeit auf deinem Weg?");
  };

  const quote9 = () => {
    alert("Erzähle wie du dich im Moment fühlst? Was kann dir in deiner Situation helfen?");
  };

  const quote10 = () => {
    alert("'Wo ein Leben endet, beginnt ein neues.'");
  };

  const quote11 = () => {
    alert("Wohin führt Dich dein Weg? Hast du irgendwelche Erwartungen an das Leben?");
  };

  const quote12 = () => {
    alert("Helfen Dir deine Gebete in schweren Zeiten? Gibt es noch andere Rituale die du machst in deiner jetzigen Situation?");
  };

  const quote13 = () => {
    alert("'Allah ist schön und liebt die Schönheit.' (Hadith) Schaue Dir schöne Dinge an die Dir Freude bereiten.");
  };

  const quote14 = () => {
    alert("Ich umgebe mich mit Menschen die Mir gut tun und meide Menschen die mir nicht gut tun.");
  };

  const quote15 = () => {
    alert("Gibt es einen Vers oder ein Hadith der dir in deiner Situation Kraft gibt?");
  };

  return (
    <>
      <div className="title">
        <h1 className="subtitle">Bedeutsame Karten</h1>
      </div>

      <div className="cardfield-row-one">
        <div className="flipcard">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={CardImage1} className="img" alt="family" />
            </div>
            <div className="flip-card-back">
              <h1>1</h1>
              <p>Familie</p>
              <button onClick={quote1}>Öffnen</button>
            </div>
          </div>
        </div>

        <div className="flipcard">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={CardImage2} className="img" alt="family" />
            </div>
            <div className="flip-card-back">
              <h1>2</h1>
              <p>Tür</p>
              <button onClick={quote2}>Öffnen</button>
            </div>
          </div>
        </div>

        <div className="flipcard">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={CardImage3} className="img" alt="family" />
            </div>
            <div className="flip-card-back">
              <h1>3</h1>
              <p>Erde</p>
              <button onClick={quote3}>Öffnen</button>
            </div>
          </div>
        </div>

        <div className="flipcard">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={CardImage4} className="img" alt="family" />
            </div>
            <div className="flip-card-back">
              <h1>4</h1>
              <p>Friedhof</p>
              <button onClick={quote4}>Öffnen</button>
            </div>
          </div>
        </div>

        <div className="flipcard">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={CardImage5} className="img" alt="family" />
            </div>
            <div className="flip-card-back">
              <h1>5</h1>
              <p>Licht</p>
              <button onClick={quote5}>Öffnen</button>
            </div>
          </div>
        </div>
      </div>
      <div className="cardfield-row-two">
        <div className="flipcard">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={CardImage6} className="img" alt="family" />
            </div>
            <div className="flip-card-back">
              <h1>6</h1>
              <p>Strand</p>
              <button onClick={quote6}>Öffnen</button>
            </div>
          </div>
        </div>

        <div className="flipcard">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={CardImage7} className="img" alt="family" />
            </div>
            <div className="flip-card-back">
              <h1>7</h1>
              <p>Wald</p>
              <button onClick={quote7}>Öffnen</button>
            </div>
          </div>
        </div>

        <div className="flipcard">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={CardImage8} className="img" alt="family" />
            </div>
            <div className="flip-card-back">
              <h1>8</h1>
              <p>Weg</p>
              <button onClick={quote8}>Öffnen</button>
            </div>
          </div>
        </div>

        <div className="flipcard">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={CardImage9} className="img" alt="family" />
            </div>
            <div className="flip-card-back">
              <h1>9</h1>
              <p>Schnee</p>
              <button onClick={quote9}>Öffnen</button>
            </div>
          </div>
        </div>

        <div className="flipcard">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={CardImage10} className="img" alt="family" />
            </div>
            <div className="flip-card-back">
              <h1>10</h1>
              <p>Neues Leben</p>
              <button onClick={quote10}>Öffnen</button>
            </div>
          </div>
        </div>
      </div>

      <div className="cardfield-row-three">
        <div className="flipcard">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={CardImage11} className="img" alt="family" />
            </div>
            <div className="flip-card-back">
              <h1>11</h1>
              <p>Pfad</p>
              <button onClick={quote11}>Öffnen</button>
            </div>
          </div>
        </div>

        <div className="flipcard">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={CardImage12} className="img" alt="family" />
            </div>
            <div className="flip-card-back">
              <h1>12</h1>
              <p>Moschee</p>
              <button onClick={quote12}>Öffnen</button>
            </div>
          </div>
        </div>

        <div className="flipcard">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={CardImage13} className="img" alt="family" />
            </div>
            <div className="flip-card-back">
              <h1>13</h1>
              <p>Ornamentik</p>
              <button onClick={quote13}>Öffnen</button>
            </div>
          </div>
        </div>

        <div className="flipcard">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={CardImage14} className="img" alt="family" />
            </div>
            <div className="flip-card-back">
              <h1>14</h1>
              <p>Emotionen</p>
              <button onClick={quote14}>Öffnen</button>
            </div>
          </div>
        </div>

        <div className="flipcard">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={CardImage15} className="img" alt="family" />
            </div>
            <div className="flip-card-back">
              <h1>15</h1>
              <p>Koran</p>
              <button onClick={quote15}>Öffnen</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
