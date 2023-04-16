import { useMedia } from "react-use";
import theme from "@/theme";

const useBreakpoint = () => {
  const isDesktop = useMedia(`(min-width: ${theme.screens.md})`);
  const isMobile = useMedia(`(max-width: ${theme.screens.md})`);

  return {
    isDesktop,
    isMobile,
  };
};

export default useBreakpoint;
