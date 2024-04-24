import Slider from "react-slick";
import CardThor from '../../../constants/CardThour/CardThor';
import scss from "./CardTours.module.scss"
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.css";

export const MySlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  }
  return (
    <Slider {...settings}>
      <div className={scss.slide}><CardThor/></div>
      <div className={scss.slide}><CardThor/></div>
      <div className={scss.slide}><CardThor/></div>
    </Slider>
  );
};


 
