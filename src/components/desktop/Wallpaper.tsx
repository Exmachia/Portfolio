import Image from "next/image";
import { MAT } from "@/lib/desk-objects";

// The desk: graph paper in warm white (light) or near black (dark), with a
// tilted piece of a designer's cutting mat fixed at the top. The mat can't be
// moved; the objects on it can. Its box is pure CSS (`.desk-mat`) so it
// renders on the server too.
export function Wallpaper() {
  return (
    <div
      aria-hidden
      className="desk-surface absolute inset-0 overflow-hidden"
    >
      <Image
        src={MAT.src}
        alt=""
        width={MAT.w}
        height={MAT.h}
        priority
        sizes="70vw"
        draggable={false}
        className="desk-mat"
      />
    </div>
  );
}
