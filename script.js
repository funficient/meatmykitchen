function getScreenResolution() {
  const width = window.screen.width;
  const height = window.screen.height;
  
  console.log(`Screen resolution: ${width}x${height}`);
  
  // Optionally, display it on the webpage
  document.getElementById("resolutionDisplay").innerText = `Screen resolution: ${width}x${height}`;
}

// Run the function when the page loads
window.onload = getScreenResolution;
