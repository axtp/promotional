import EmbeddedVideo from "./index";
import PropTypes from "prop-types";

export const PandaVideo = ({videoId, title, autoPlay}) => {
  const pandaVideoUrl = `https://player-vz-d98e38b8-596.tv.pandavideo.com.br/embed/?v=${videoId}&autoPlay=${autoPlay ? 'true' : 'false'}`
  return <EmbeddedVideo id={`panda-${videoId}`} videoUrl={pandaVideoUrl} title={title} />
}

PandaVideo.propTypes = {
  title: PropTypes.string,
  videoUrl: PropTypes.string,
  autoPlay: PropTypes.bool,
};

PandaVideo.defaultProps = {
  title: "Some Video",
  videoUrl: "",
  autoPlay: false,
}
