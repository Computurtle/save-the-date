"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="container">
        <Image
          className="background"
          src="/background.png"
          alt="background"
          layout="responsive"
          width={100}
          height={200}
        />
        <div className="textContainer">
          <div className="glowEffect" />
          <h2>Save the Date</h2>
          <h3>October 15th</h3>
          <h4>2026</h4>
        </div>
      </div>
      <div className="infoContainer">
        <div className="info">
          <h2
            style={{
              textAlign: "center",
              fontSize: "6vw",
              color: "rgb(173, 211, 193)",
            }}
          >
            Josh & Lina&apos;s
            <br />
            Wedding
          </h2>
          <br />
          <br />
          <h2>The Details</h2>
          <p>
            We are so excited for you to join us! To make sure everyone can
            celebrate with us, please book the dates October 14th, 15th, and
            16th, 2026 off! We have booked accommodation at the venue for two
            nights.
          </p>
          <br />
          <h4>The 14th</h4>
          <p>
            Arrive at the venue, see your the cabin where you will be staying
            and just chill out, enjoy the ammenities and the view. No need to
            stress because you will be already be on site for the big day!
          </p>
          <br />
          <h4>The 15th</h4>
          <p>
            This is the big day! The wedding ceremony will be held in the
            afternoon so you have plenty of time to get ready. After the
            ceremony its party time, accompanied by music, food, and drinks,
            whenever you feel like crashing just pop off to your cabin.
          </p>
          <br />
          <h4>The 16th</h4>
          <p>
            Enjoy a little sleep in after the big night, jump in the sauna, or
            hop in the woodfired hottubs. After checkout we will all go have
            brunch!
          </p>
          <br />
          <h2>Invitations & Cost</h2>
          <p>
            Formal invitations with all the key details, including times and
            locations will be sent out early next year. We snagged a great deal
            in the heart of Margeret River for our venue, including the two
            night accommodation. To cover the cost of accommodation we have
            split up the cost between the adults, the cost per adult is $400, so
            start saving, more info on payment will be in the invitations!
          </p>
          <br />
          <br />
          <p style={{ fontStyle: "italic" }}>
            Any concerns or questions
            <br /> Please message Joshua on Messenger or SMS
          </p>
        </div>
      </div>
      {showScroll && (
        <div className="scrollContainer">
          <p className="scrollText">Scroll Down</p>
        </div>
      )}
    </div>
  );
}
