document.addEventListener("DOMContentLoaded", () => {
  const gif = document.getElementById("cursor-cat-gif");

  if (gif) {
    gif.style.position = "fixed";
    gif.style.pointerEvents = "none";
    gif.style.zIndex = "9999";
    gif.style.width = "64px";
    gif.style.height = "auto";

    // Move handler
    const moveGif = (x, y) => {
      gif.style.left = `${x + 10}px`;
      gif.style.top = `${y + 10}px`;
    };

    // Mouse - fast enough, no throttling needed
    document.addEventListener("mousemove", (e) => {
      moveGif(e.clientX, e.clientY);
    });

    // Touch - throttle updates
    let lastTouchTime = 0;
    const TOUCH_THROTTLE = 50; // milliseconds

    const throttledTouchMove = (e) => {
      const now = Date.now();
      if (now - lastTouchTime > TOUCH_THROTTLE) {
        const touch = e.touches[0];
        moveGif(touch.clientX, touch.clientY);
        lastTouchTime = now;
      }
    };

    document.addEventListener("touchmove", throttledTouchMove, {
      passive: true,
    });

    // On initial tap, move instantly
    document.addEventListener("touchstart", (e) => {
      const touch = e.touches[0];
      moveGif(touch.clientX, touch.clientY);
      lastTouchTime = Date.now();
    });
  }
});
