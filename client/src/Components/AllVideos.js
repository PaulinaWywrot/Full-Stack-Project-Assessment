import VideoCard from "./VideoCard";

const AllVideos = ({ videos, setVideos }) => {
  const removeVideo = (video) => {
    fetch(
      `https://paulina-full-stack-project-server.onrender.com/videos/${video.id}`,
      {
        method: "DELETE",
      }
    )
      .then(() => {
        setVideos(videos.filter((oneVideo) => oneVideo !== video));
      })
      .catch((error) => console.log(error));
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
