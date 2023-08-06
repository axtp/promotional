import React, {useState, useEffect, useCallback, useRef} from "react";
import PropTypes from "prop-types";

const EmbeddedVideo = ({videoUrl, title, id}) => {
  const iframeRef = useRef(null);
  const defaultHeight = 495;
  const [videoHeight, setVideoHeight] = useState(
    iframeRef.current ? iframeRef.current.offsetWidth * 0.5625 : defaultHeight
  );

  const handleChangeVideoWidth = useCallback(() => {
    const ratio =
      window.innerWidth > 990
        ? 1.0
        : window.innerWidth > 522
          ? 1.2
          : window.innerWidth > 400
            ? 1.45
            : 1.85;
    const height = iframeRef.current
      ? iframeRef.current.offsetWidth * 0.5625
      : defaultHeight;
    return setVideoHeight(Math.floor(height * ratio));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleChangeVideoWidth);
    const ratio =
      window.innerWidth > 990
        ? 1.0
        : window.innerWidth > 522
          ? 1.2
          : window.innerWidth > 400
            ? 1.45
            : 1.85;
    const height = iframeRef.current
      ? iframeRef.current.offsetWidth * 0.5625
      : defaultHeight;

    console.log("heigt, width", height, iframeRef.current.offsetWidth)

    setVideoHeight(Math.floor(height * ratio));
    return function cleanup() {
      window.removeEventListener("resize", handleChangeVideoWidth);
    };
  }, [videoHeight, handleChangeVideoWidth]);

  return (
    <iframe
      id={id}
      ref={iframeRef}
      title={title}
      width="100%"
      height={`${videoHeight}px`}
      src={videoUrl}
      frameBorder={'none'}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      fetchpriority="high"
    />
  );
};

export default EmbeddedVideo;

EmbeddedVideo.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  videoUrl: PropTypes.string,
};

EmbeddedVideo.defaultProps = {
  title: "Some Video",
  videoUrl: "",
  id: "video-id"
}
