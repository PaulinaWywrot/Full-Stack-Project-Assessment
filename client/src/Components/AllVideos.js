import VideoCard from "./VideoCard";

const AllVideos = ({ videos, setVideos }) => {
  const removeVideo = (video) => {
    fetch(`http://localhost:5000/${video.id}`, {
      method: "DELETE",
    }).then(() => {
      setVideos(videos.filter((oneVideo) => oneVideo !== video));
    });
  };
  return (
    <div className="row">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} removeVideo={removeVideo} />
      ))}
    </div>
  );
};

export default AllVideos;
