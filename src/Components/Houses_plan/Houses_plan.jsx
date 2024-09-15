import { useState } from "react";
import room1_1 from "../../assets/images/1-xonali1.jpg";
import room1_2 from "../../assets/images/1-xonali2.jpg";
import room2_1 from "../../assets/images/2-xonali1.jpg";
import room2_2 from "../../assets/images/2-xonali2.jpg";
import room2_3 from "../../assets/images/2-xonali3.jpg";
import room3_1 from "../../assets/images/3-xonali1.jpg";
import room3_2 from "../../assets/images/3-xonali2.jpg";


const Houses_plan = () => {
  const [activeNumber, setActiveNumber] = useState("Hammasi");

  const handleNumberClick = (number) => {
    setActiveNumber(number);
  };

  return (
    <div className="houses">
      <div className="container">
        <div className="houses_box">
          <div className="houses_card_top">
            <h2 className="houses_title">Xonadonlarning o‘ylangan rejalari</h2>
            <div className="houses_card_number">
              {["Hammasi", "1-xonali", "2-xonali", "3-xonali"].map((number) => (
                <p
                  key={number}
                  className={`houses_number ${
                    activeNumber === number ? "active" : ""
                  }`}
                  onClick={() => handleNumberClick(number)}
                >
                  {number}
                </p>
              ))}
            </div>
          </div>

          {/* Showing corresponding content based on activeNumber */}
          {activeNumber === "Hammasi" && (
            <div className="houses_card_bottom">
              <img src={room2_1} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={room3_1} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={room1_1} alt="" className="houses_img" />
            </div>
          )}

          {activeNumber === "1-xonali" && (
            <div className="houses_card_bottom1">
              <img src={room1_1} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={room1_2} alt="" className="houses_img" />

            </div>
          )}

          {/* {activeNumber === "2-xonali" && (
            <div className="houses_card_bottom2">
              <img src={houses2} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={houses21} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={houses22} alt="" className="houses_img" />
            </div>
          )} */}
 {activeNumber === "2-xonali" && (
            <div className="houses_card_bottom1">
              <img src={room2_1} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={room2_2} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={room2_3} alt="" className="houses_img" />
            </div>
          )}
          {activeNumber === "3-xonali" && (
            <div className="houses_card_bottom2">
              <img src={room3_1} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={room3_2} alt="" className="houses_img" />

            </div>
          )}

          {/* You can continue adding more conditions for "3-xonali", "4-xonali", etc. */}
        </div>
      </div>
    </div>
  );
};

export default Houses_plan;
