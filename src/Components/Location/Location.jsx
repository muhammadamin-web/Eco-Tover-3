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
            Yaqinlar turar-joy majmuasi Qoʻqon shahri Zamondosh koʻchasi 28-uy manzilida qad rostlamoqda. Yon-atrofda maktab, bogʻcha, masjid va turli kafelar mavjud.


            </p>
            <p className="location_text">
            Majmua shahar markaziga yaqin, rivojlangan infratuzilmaga ega hududda joylashgan. Loyihaning joylashgan oʻrni jamoat transporti va asosiy yoʻllarga yaqin boʻlib, bu har qanday joyga tez va oson yetib borish imkoniyatini beradi.

            </p>
            <p className="location_text">
            Loyihada zamonaviy energiya samaradorlik tizimlari, xavfsizlik tizimlari va boshqa innovatsion texnologiyalar qoʻllangan. Bu nafaqat qulaylik, balki barqaror hayot tarzini ham taʼminlaydi.
            </p>
          </div>
          <div className="location_card2" data-aos="fade-left" data-aos-offset="-200">
            <p className="location_text2">
              <span>Yaqinlar</span>  - Oila bagʻrida tinch va totuv hayot kechirish uchun moʻljallangan 
              uylar. Har bir rezident uchun eng qulay imkoniyatlar taqdim etamiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
