// Theme switcher code - only changes colors and background image
document.addEventListener("DOMContentLoaded", function () {
  // Randomly decide whether to use the anime theme (50% chance)
  const useAnimeTheme = Math.random() < 0.5;

  if (useAnimeTheme) {
    // Apply anime theme
    document.body.classList.add("theme-anime");
    console.log("Applied cherry blossom theme");
  } else {
    // Keep default cyber theme
    console.log("Using default theme");
  }
});
