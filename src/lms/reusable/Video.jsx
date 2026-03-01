import React from 'react';

const Video = ({ src, className }) => {
  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be');

  const getYouTubeEmbedUrl = (url) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\&\?]+)/);
    const videoId = match ? match[1] : '';
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;
  };

  return (
    <>
      {isYouTube ? (
        <iframe
          src={getYouTubeEmbedUrl(src)}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={` radius7 ${className}`}
        ></iframe>
      ) : (
        <video
          src={src}
          controls
          loop
          muted
          playsInline
          className={` radius7 ${className}`}
        />
      )}
    </>
  );
};

export default Video;
