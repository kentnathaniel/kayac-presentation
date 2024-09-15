import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { IconArrowsDiagonal } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export default function ZoomableImage({
  src,
  alt,
  className,
}: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) {
  if (!src) return null;
  return (
    <Dialog>
      <DialogTrigger className="group relative overflow-hidden rounded-lg">
        <img
          src={src}
          alt={alt || ""}
          sizes="100vw"
          className={cn(className)}
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={100}
        />
        <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center opacity-0 transition-all group-hover:opacity-100">
          <div className="h-full w-full bg-neutral-500 opacity-80"></div>
          <p className="absolute mx-auto my-auto flex gap-2 text-lg text-neutral-700">
            <IconArrowsDiagonal />
            Click to view
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-7xl border-0 bg-transparent p-0">
        <div className="relative h-[calc(100vh-220px)] w-full overflow-clip rounded-md bg-transparent shadow-md">
          <img
            src={src}
            alt={alt || ""}
            className="h-full w-full object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
