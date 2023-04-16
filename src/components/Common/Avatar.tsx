import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

interface Props {
  size?:
    | "xxxs"
    | "xxs"
    | "xs"
    | "s"
    | "m"
    | "l"
    | "xl"
    | "xxl"
    | "xxxl"
    | "xxxxl";
  src: string;
  alt: string;
}
const sizes = {
  xxxs: "w-6 h-6",
  xxs: "w-8 h-8 ",
  xs: "w-10 h-10 ",
  s: "w-12 h-12 ",
  m: "w-16 h-16 ",
  l: "w-20 h-20",
  xl: "w-24 h-24",
  xxl: "w-28 h-28",
  xxxl: "w-56 h-56 ",
  xxxxl: "w-72 h-72",
};

const Avatar: React.FC<Props> = ({ size = "m", src, alt }) => {
  const avatarSize = sizes[size];
  const [isLoading, setLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${avatarSize} rounded-full`}>
      <Image
        layout="fill"
        src={src}
        alt={alt}
        objectFit="cover"
        onLoadingComplete={() => setLoading(false)}
        className={classNames(
          "duration-700 ease-in-out",
          isLoading
            ? "scale-110 animate-pulse blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        )}
      />
    </div>
  );
};

export default Avatar;
