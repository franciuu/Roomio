// Iconițe line-art pentru M5, desenate cu culoarea textului
const PATHS = {
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
  phone: "M8 3h8v18H8zM11 18h2",
  bell: "M6 16V11a6 6 0 0 1 12 0v5l2 2H4zM10 20a2 2 0 0 0 4 0",
  shield: "M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6zM9 12l2 2 4-4",
  chart: "M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6",
  funnel: "M4 5h16l-6 7v6l-4 2v-8z",
  play: "M5 4h14v16H5zM10 9l5 3-5 3z",
  page: "M5 12h14M5 7h14M5 17h9",
  group: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20a6 6 0 0 1 12 0M16 11a3 3 0 1 0 0-6M21 20a6 6 0 0 0-4-5.6",
  reddit: "M12 20c4.4 0 8-2.2 8-5s-3.6-5-8-5-8 2.2-8 5 3.6 5 8 5zM9 14h.01M15 14h.01M9.5 17c1.5 1 3.5 1 5 0M12 10l1-5 4 1",
  camera: "M4 8h4l2-3h4l2 3h4v11H4zM12 17a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z",
  star: "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z",
};

export function Icon({ name, size = 22 }) {
  return (
    <svg className="m5-icon" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d={PATHS[name]} />
    </svg>
  );
}
