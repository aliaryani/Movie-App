import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
}

const ImageMedia: React.FC<Props> = ({ src, alt }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      layout="fill"
      src={src}
      alt={alt}
      objectFit="cover"
      priority
      className={classNames(
        "duration-700 ease-in-out",
        isLoading
          ? "scale-110 animate-pulse blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
};

export default ImageMedia;
