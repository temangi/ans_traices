import scss from "./CardThor.module.scss"
import picture from "./image/Picture 1.svg"

const CardThor = () => {
  return (
    <div className={scss.card}>
          <span>12 days</span>
          <img src={picture} alt="" />
          <div className={scss.card_main}>
          <p>Tour name:</p>
            <h4>Discover Karakol</h4>
            <p>Tour class:</p>
            <div className={scss.card_btn}>
              <button className={scss.btn1}>Trekking</button>
              <button className={scss.btn2}>Horses</button>
              <button className={scss.btn3}>Popular</button>
            </div>
          </div>
        </div>
  )
}
export default CardThor