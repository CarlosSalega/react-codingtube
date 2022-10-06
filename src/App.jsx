import { useState } from "react";
import "./App.css";
import photo1 from "../src/images/homer.png";
import photo2 from "../src/images/marge.png";
import photo3 from "../src/images/bart.png";
import { Testimonial } from "./components/Testimonial";
import Button from "./components/Button";

function App() {
  const [theme, setTheme] = useState("light");

  function onClickFn() {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className={"main-container " + theme}>
      <Button
        onClickFn={onClickFn}
        value={theme == "dark" ? "light" : "dark"}
      />
      <Testimonial
        img={photo1}
        name='Homer Simpson'
        stars='🌟🌟🌟🌟🌟'
        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quasi consequatur nam maiores. Fugit vitae atque rerum tenetur cumque odit totam facere culpa explicabo, nemo laudantium corrupti possimus aperiam nobis.'
      />
      <Testimonial
        img={photo2}
        name='Marge Simpson'
        stars='🌟🌟🌟☆☆'
        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quasi consequatur nam maiores. Fugit vitae atque rerum tenetur cumque odit totam facere culpa explicabo, nemo laudantium corrupti possimus aperiam nobis.'
      />
      <Testimonial
        img={photo3}
        name='Bart Simpson'
        stars='🌟🌟🌟🌟☆'
        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quasi consequatur nam maiores. Fugit vitae atque rerum tenetur cumque odit totam facere culpa explicabo, nemo laudantium corrupti possimus aperiam nobis.'
      />
    </div>
  );
}

export default App;
