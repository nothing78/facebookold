// script.js

// Data video
const videos = {
  video1: {
    title: "Video 1",
    description: "Ini adalah video pertama",
  },
  video2: {
    title: "Video 2",
    description: "Ini adalah video kedua",
  },
  video3: {
    title: "Video 3",
    description: "Ini adalah video ketiga",
  },
};

// Fungsi untuk menampilkan detail video
function showVideoDetails(videoId) {
  const video = videos[videoId];
  if (video) {
    document.getElementById("video-title").textContent = video.title;
    document.getElementById("video-description").textContent =
      video.description;
  }
}
