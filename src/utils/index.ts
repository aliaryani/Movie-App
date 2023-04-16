export { default as dateFormat } from "./date-format";
export { default as assetsUrl } from "./assets-url";

declare global {
  interface Window {
    gtag?: (event: string, action: string, options?: any) => void;
  }
}
