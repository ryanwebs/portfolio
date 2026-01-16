function masonryLayout() {
  const container = document.querySelector(".entries-list");
  if (!container) return;

  const items = Array.from(container.children);
  const gap = 24; // px — match your CSS gap
  const columns = window.innerWidth <= 768 ? 1 : 2;

  const containerWidth = container.clientWidth;
  const columnWidth = (containerWidth - gap * (columns - 1)) / columns;

  const columnHeights = Array(columns).fill(0);

  items.forEach(item => {
    item.style.width = columnWidth + "px";

    const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
    const x = shortestColumn * (columnWidth + gap);
    const y = columnHeights[shortestColumn];

    item.style.transform = `translate(${x}px, ${y}px)`;

    columnHeights[shortestColumn] += item.offsetHeight + gap;
  });

  container.style.height = Math.max(...columnHeights) + "px";
}

window.addEventListener("load", masonryLayout);
window.addEventListener("resize", () => {
  clearTimeout(window._masonryTimer);
  window._masonryTimer = setTimeout(masonryLayout, 150);
});
