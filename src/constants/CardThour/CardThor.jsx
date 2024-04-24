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
              <button>Trekking</button>
              <button>Horses</button>
              <button>Popular</button>
            </div>
          </div>
        </div>
  )
}
export default CardThor