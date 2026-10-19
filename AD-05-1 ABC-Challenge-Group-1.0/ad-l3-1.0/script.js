const colors = ['green', 'blue', 'red'];

// Choose randomly from the other colors so every click visibly changes the heading.
function changeRandomColor(heading) {
  const currentColor = heading.dataset.color || 'green';
  const availableColors = colors.filter((color) => color !== currentColor);
  const nextColor = availableColors[Math.floor(Math.random() * availableColors.length)];
  heading.style.color = nextColor;
  heading.dataset.color = nextColor;
}

document.querySelectorAll('h5').forEach((heading) => {
  heading.addEventListener('click', () => changeRandomColor(heading));
});
