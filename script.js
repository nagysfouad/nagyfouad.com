// JavaScript for smooth hover interaction and dynamic movement
const bubbles = document.querySelectorAll('.bubble');

bubbles.forEach(bubble => {
  bubble.addEventListener('mouseenter', (e) => {
    const distanceX = Math.random() * 30 - 15;
    const distanceY = Math.random() * 30 - 15;
    e.target.style.transform = `scale(1.1) translate(${distanceX}px, ${distanceY}px)`;
  });

  bubble.addEventListener('mouseleave', (e) => {
    e.target.style.transform = `scale(1) translate(0, 0)`;
  });
});
