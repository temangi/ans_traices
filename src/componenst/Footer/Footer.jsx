import img1 from "./images/img1.svg"
import img2 from "./images/img2.svg"
import img3 from "./images/img3.svg"
import img4 from "./images/img4.svg"
import scss from "./Footer.module.scss"

export const Footer = () => {
    return(
        <section>
            <main>
            <div className={scss.text_main}>
                <h1>Kyrgyz Traces</h1>
                <p>
                We are proudly the Best Inside Travel DMCs <br />
                & Tour Operators in each destination where <br />
                you travel to, our. Operat... <span>Read more</span>
                </p>

            </div>    
            <div className={scss.contact}>
                <h1>CONTACT US</h1>
                <p><span>Email:</span> experts@kyrgyzriders.kg</p>
                <p><span>Hotline:</span> +996 (555) 55-55-55</p>
                <p><span>Contact form:</span> Send us a message</p>
            </div>  
            <div className={scss.follow_us}>
                <h1>Follow us</h1>
                <div>
                <button><img src={img1} alt="" /></button>
                <button><img src={img2} alt="" /></button>
                <button><img src={img3} alt="" /></button>
                <button><img src={img4} alt="" /></button>
                </div>
            </div>     
            </main>
            <div className={scss.text_bottom}>
                <p>@ 2023 Kyrgyz Riders. All rights reserved</p>
                <p>Design by @SolidDevs</p>
            </div> 
        </section>
    )
}
