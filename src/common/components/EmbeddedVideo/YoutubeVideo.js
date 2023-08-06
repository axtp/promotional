import EmbeddedVideo from "./index";
import PropTypes from "prop-types";

export const YoutubeVideo = ({videoId, title, autoPlay}) => {
  const youtubeVideoUrl = `https://www.youtube.com/embed/${videoId}${
    autoPlay ? "?autoplay=1" : ""
  }`;
  return <EmbeddedVideo id={`yt-${videoId}`} videoUrl={youtubeVideoUrl} title={title} />
}

YoutubeVideo.propTypes = {
  title: PropTypes.string,
  videoUrl: PropTypes.string,
  autoPlay: PropTypes.bool,
};

YoutubeVideo.defaultProps = {
  title: "Some Video",
  videoUrl: "",
  autoPlay: false,
}
