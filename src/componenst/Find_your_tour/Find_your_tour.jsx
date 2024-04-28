import { useState } from "react"
import scss from "./Find_your_tour.module.scss"
import arrow from "./images/arrow.svg"
import { MySlider } from "../Find_your_tour/CardTours/CardTours"
import CardThor from "../../constants/CardThour/CardThor"
import arrowbtn from "../Find_your_tour/images/arrowBtn.svg"

const tour = ["Most popular","Trekking","Multi - active","Horse riding","Winter torus","Road trip","Moto trip","Horse riding","Cultural","Horse riding","Horse riding","Horse riding"]

export const Find_your_tour = () => {
    const [color, setColor] = useState(0)

    const handleClick = (index) => {
        setColor(index)
    }

    const Buttons = () => tour.map((el, index) => {
    return(
        <button onClick={() => handleClick(index)} className={index === color ? scss.button_active : scss.button} key={index}> {el} </button>
    )
   })
  return (
    <section className={scss.s1}>
        <main className={scss.s1_main}>
            <div className={scss.s1_tour}>
                <h1>Find your tour</h1>
                <p>Choose the sections of the tour that are <br />
                 suitable for you and we will show you cool  <br />
                 tours</p>
                 <span>Watch more tours<img src={arrow} alt="" /></span>
                 <button>Most popular <img src={arrowbtn} alt="" /></button>
            </div>
            <div className={scss.btn_tours}>
                {Buttons()}
            </div>
        </main>
        <div className={scss.s1_tour__cards}> 
            <MySlider card={<CardThor/>}/>
        </div> 
    </section>
  )
}

