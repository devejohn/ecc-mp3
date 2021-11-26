import React from "react";
import Meta from "./../components/Meta";
import Details from "./../components/Details";

function MusicPage(props) {
  return (
    <>
      <Meta title="Music" />
      <Details
        bgColor="secondary"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="How do you get the music?"
        subtitle="For a small donation to help defray the costs of producing the music, you can download the music. "
      />
    </>
  );
}

export default MusicPage;
