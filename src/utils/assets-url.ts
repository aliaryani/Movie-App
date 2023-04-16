export default function assetsUrl(path?: string) {
  if (!path) return "";

  return `${process.env.NEXT_PUBLIC_ASSETS_URL}${path}`;
}
