export const About = () => {
  const el = document.querySelector(".about");
  if (!el) return;

  const videos = document.querySelectorAll(".video > div");

  videos.forEach((video) => {
    video.addEventListener("mouseenter", () => {
      video.querySelector("video").play();
    });
    video.addEventListener("mouseleave", () => {
      video.querySelector("video").pause();
    });
  });
};
