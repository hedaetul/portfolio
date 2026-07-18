import Image from "next/image";

import { portfolio } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

type ProfilePhotoProps = {
  className?: string;
};

export function ProfilePhoto({ className }: ProfilePhotoProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[320px]", className)}>
      <div className="profile-frame relative overflow-hidden rounded-2xl">
        <div className="absolute right-3 top-3 z-10 rounded-full border border-terminal/40 bg-background/90 px-2.5 py-1 font-mono text-[10px] text-terminal">
          ★ irl
        </div>
        <div className="relative aspect-[4/5] bg-zinc-900">
          <Image
            src={portfolio.profileImage}
            alt={`${portfolio.name} profile photo`}
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 768px) 320px, 320px"
          />
        </div>
      </div>
    </div>
  );
}
