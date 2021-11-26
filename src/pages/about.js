import React from "react";
import Meta from "./../components/Meta";
import HeroSection2 from "./../components/HeroSection2";
import Choir from "./../components/Choir";
import CtaSection from "./../components/CtaSection";

function AboutPage(props) {
  return (
    <>
      <Meta title="About" description="Learn about our company and team" />
      <HeroSection2
        bgColor="default"
        size="large"
        bgImage=""
        bgImageOpacity={1}
        title="Music that moves you"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
      />
      <Choir
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Choir"
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

export default AboutPage;
