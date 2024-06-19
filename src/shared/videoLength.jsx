import React from "react";
import moment from "moment";

const VideoLength = ({ time, live }) => {
  const videoLengthInSeconds = (timeInSec) =>
    moment().startOf("day").seconds(timeInSec).format("HH:mm:ss");

  return live ? (
    <div className="absolute bottom-2 right-2 bg-red-700 py-1 px-1.5 font-semibold text-white text-xs rounded-sm">
      LIVE
    </div>
  ) : (
    time && (
      <div className="absolute bottom-2 right-2 bg-black py-1 px-1.5 text-white text-xs rounded-md">
        {videoLengthInSeconds(time)}
      </div>
    )
  );
};

export default VideoLength;
