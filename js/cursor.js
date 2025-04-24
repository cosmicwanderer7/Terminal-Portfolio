document.addEventListener("DOMContentLoaded", () => {
  const gif = document.getElementById("cursor-cat-gif");

  if (gif) {
    gif.style.position = "fixed";
    gif.style.pointerEvents = "none";
    gif.style.zIndex = "9999";
    gif.style.width = "64px"; // You can adjust the size
    gif.style.height = "auto";

    // Mouse movement
    document.addEventListener("mousemove", (e) => {
      gif.style.left = `${e.clientX + 10}px`;
      gif.style.top = `${e.clientY + 10}px`;
    });

    // Touch movement (tap or drag)
    document.addEventListener("touchmove", (e) => {
      const touch = e.touches[0];
      gif.style.left = `${touch.clientX + 10}px`;
      gif.style.top = `${touch.clientY + 10}px`;
    });

    // On initial tap
    document.addEventListener("touchstart", (e) => {
      const touch = e.touches[0];
      gif.style.left = `${touch.clientX + 10}px`;
      gif.style.top = `${touch.clientY + 10}px`;
    });
  }
});
