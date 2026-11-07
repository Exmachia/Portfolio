"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

// An image that shows a soft shimmer until it has loaded, so a slow connection
// shows a placeholder instead of an empty hole. The image itself is never
// hidden (no opacity trick), so it still paints as soon as it can. Use it with
// `fill` inside a positioned parent, which should clip it (overflow-hidden).
export function SkeletonImage({ onLoad, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <span aria-hidden className="skeleton absolute inset-0" />}
      {/* eslint-disable-next-line jsx-a11y/alt-text -- alt arrives through props */}
      <Image
        {...props}
        ref={(el) => {
          // Cached images can finish before hydration, so onLoad never fires.
          if (el?.complete && el.naturalWidth > 0) setLoaded(true);
        }}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
      />
    </>
  );
}
