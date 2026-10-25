"use client";

import Image from "next/image";
import { useState } from "react";

// Two fixed renditions (2x the largest display size) so a photo's URL is
// known ahead of render and can be preloaded while thinking is on screen.
const WIDTHS = { hero: 760, thumb: 280 } as const;
export type PhotoSize = keyof typeof WIDTHS;

/** Unsplash resizes on its own CDN, so the Next optimiser is skipped. */
export function photoSrc(url: string, size: PhotoSize) {
  return `${url}?w=${WIDTHS[size]}&q=75&auto=format&fit=crop`;
}

/** Resolves once every photo is in the browser cache (or failed). Never rejects. */
export function preloadPhotos(photos: [url: string, size: PhotoSize][]) {
  return Promise.all(
    photos
      .filter(([url]) => url)
      .map(
        ([url, size]) =>
          new Promise<void>((resolve) => {
            const img = new window.Image();
            img.onload = img.onerror = () => resolve();
            img.src = photoSrc(url, size);
          }),
      ),
  );
}

type PhotoProps = {
  src: string;
  alt: string;
  size: PhotoSize;
  className?: string;
  priority?: boolean;
};

/** Fills its sized parent. Grey box while loading or when src is "". */
export function Photo({ src, alt, size, className = "", priority }: PhotoProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-line-soft ${className}`}>
      {src ? (
        <Image
          src={photoSrc(src, size)}
          alt={alt}
          fill
          unoptimized
          priority={priority}
          onLoad={() => setLoaded(true)}
          className={`photo object-cover group-hover:scale-[1.03] ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      ) : null}
    </div>
  );
}
