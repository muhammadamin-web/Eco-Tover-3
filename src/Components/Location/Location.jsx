/* eslint-disable react/no-unescaped-entities */
import universal from "../../assets/images/location.png";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Location = () => {
  useEffect(() => {
    AOS.init({

      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="location">
      <div className="container">
        <div className="location_box">
          <div className="location_card_left" data-aos="fade-right" data-aos-offset="-200">
            <img src={universal} alt="" className="location_img" />
          </div>
          <div className="location_card1" data-aos="fade-left" data-aos-offset="-200">
            <h3 className="location_title"> Loyiha joylashuvi</h3>
            <p className="location_text">
            Turar-joy majmuasi oʻzining qulay joylashuvi bilan ajralib turadi. Bu nafaqat shahar markaziga yaqinlikni, balki tabiiy muhit va yashil hududlar bilan oʻralgan ideal yashash joyini taʼminlaydi.


            </p>
            <p className="location_text">
            Loyiha Fargʻona shahrining yuragida joylashgan boʻlib, barcha zarur infratuzilmalar, xizmatlar va koʻngilochar maskanlarga oson va tez yetib borishingizni taʼminlaydi.

            </p>
            <p className="location_text">
            Shahar markaziga yaqin joylashuvi bilan birga, majmua jamoat transporti bekatlari va asosiy yoʻllarga ham yaqin. Bu sizga shaharning istalgan nuqtasiga osonlik bilan yetib borish imkoniyatini beradi.            </p>
          </div>
          <div className="location_card2" data-aos="fade-left" data-aos-offset="-200">
            <p className="location_text2">
           <span>Eco Tower </span> — shahar markazining barcha qulayliklarini tabiiy goʻzallik bilan 
uygʻunlashtirgan mukammal makon. Bu yerda siz oʻz hayotingizni nafaqat 
qulay, balki tabiiy muhit bilan uygʻun holda kechira olasiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
