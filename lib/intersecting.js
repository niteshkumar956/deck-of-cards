export function intersecting (r1, r2) {
  const x1 = r1.x;
  const y1 = r1.y;
  const w1 = r1.width;
  const h1 = r1.height;

  const x2 = r2.x;
  const y2 = r2.y;
  const w2 = r2.width;
  const h2 = r2.height;

  return (
    (x1 + w1 >= x2) &&
    (x1 <= x2 + w2) &&
    (y1 + h1 >= y2) &&
    (y1 <= y2 + h2)
  );
}