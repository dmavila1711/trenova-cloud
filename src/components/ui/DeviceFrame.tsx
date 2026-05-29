import Image, { type StaticImageData } from "next/image";

type DeviceFrameProps = {
  variant: "browser" | "phone";
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export function DeviceFrame({
  variant,
  src,
  alt,
  width,
  height,
  priority = false,
  sizes,
  className = "",
}: DeviceFrameProps) {
  if (variant === "phone") {
    return (
      <div
        className={`relative overflow-hidden rounded-[2rem] border border-stroke bg-ink p-2 shadow-2xl shadow-ink/50 ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className="rounded-[1.5rem] w-full h-auto"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-card border border-stroke bg-deep shadow-2xl shadow-ink/50 ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-stroke/60 bg-ink/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-stroke" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-stroke" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-stroke" aria-hidden="true" />
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className="w-full h-auto"
      />
    </div>
  );
}
