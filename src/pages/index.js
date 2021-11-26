import React from "react";
import Meta from "./../components/Meta";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import NewsletterSection from "./../components/NewsletterSection";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection
        bgColor="primary"
        size="large"
        bgImage="https://images.squarespace-cdn.com/content/v1/5de67da1631c6c6aca04d6d1/1609606031611-4HAH38DNKIQOBJKHTXFP/23521664293_b86c26ed5d_o.jpg"
        bgImageOpacity={0.7}
        title="Come, let us sing joyfully to the LORD"
        subtitle="You've heard it. You love it. Now, you can download the Gospel music from the talented singers and musicians from Epiphany Catholic Church."
        buttonText="Get them today"
        buttonColor="secondary"
        buttonPath="/music"
      />
      <FeaturesSection
        bgColor="secondary"
        size="normal"
        bgImage=""
        bgImageOpacity={1}
        title="Music that moves you"
        subtitle="All your favorites"
      />
      <NewsletterSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Epiphany Happenings"
        subtitle="Celebrate the Eucharist. Living the Gospel, Loving God and Loving Neighbor"
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
    </>
  );
}

export default IndexPage;
