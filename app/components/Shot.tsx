/** A real Latch screenshot that follows the visitor's light or dark theme, like the app does. */
export function Shot({
  name,
  alt,
  width,
  height,
  priority = false,
  className,
}: {
  name: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <picture className={className}>
      <source srcSet={`/screens/${name}-dark.png`} media="(prefers-color-scheme: dark)" />
      {/* Plain img: <picture> swaps the light and dark PNGs, which next/image can't do. */}
      <img
        src={`/screens/${name}-light.png`}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );
}
