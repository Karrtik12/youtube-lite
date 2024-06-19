import React from "react";
import { Link } from "react-router-dom";
import VideoLength from "../shared/videoLength";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";
import { CiStreamOn } from "react-icons/ci";

const VideoCard = ({ video }) => {
  const liveOrNot = video?.badges[0] === "LIVE";
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col mb-8">
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={video?.thumbnails[0]?.url}
            alt=""
          />

          <VideoLength time={video?.lengthSeconds} live={liveOrNot} />
        </div>
        <div className="flex text-white mt-3">
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={video?.author?.avatar[0]?.url}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-bold line-clamp-2">
              {video?.title}
            </span>
            <span className="text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
              )}
            </span>
            <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
              <span>
                {liveOrNot
                  ? `${abbreviateNumber(video?.stats?.viewers, 2)} watching`
                  : `${abbreviateNumber(video?.stats?.views, 2)} views`}
              </span>
              {!liveOrNot && (
                <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
                  .
                </span>
              )}

              {!liveOrNot && (
                <span className="truncate">{video?.publishedTimeText}</span>
              )}
            </div>
            <div className="flex font-semibold mt-1">
              {liveOrNot && (
                <div className="flex items-center bg-red-700 py-1 px-1.5 text-white text-xs rounded-sm">
                  <CiStreamOn className="mr-1" />
                  LIVE
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
