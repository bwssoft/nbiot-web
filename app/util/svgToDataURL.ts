export function svgToDataURL(svg: any) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}