export default function mouseMove(e: MouseEvent) {
  e.preventDefault();
  const { x, y } = document.body.getBoundingClientRect();
  const body: HTMLElement = document.body;
  body.style.setProperty("--x", `${e.clientX - x}`);
  body.style.setProperty("--y", `${e.clientY - y}`);
}
