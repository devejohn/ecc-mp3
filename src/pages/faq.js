import React from "react";
import Meta from "./../components/Meta";
import FaqSection from "./../components/FaqSection";
import CtaSection from "./../components/CtaSection";

function FaqPage(props) {
  return (
    <>
      <Meta title="Faq" />
      <FaqSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Frequently Asked Questions"
        subtitle=""
      />
      <CtaSection
        bgColor="primary"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Ready to get the music?"
        subtitle=""
        buttonText="Let's go"
        buttonColor="secondary"
        buttonPath="https://epiphanycatholicchurch.weshareonline.org/"
      />
    </>
  );
}

export default FaqPage;
