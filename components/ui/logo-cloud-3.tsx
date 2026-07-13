import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]",
        className,
      )}
      {...props}
    >
      <InfiniteSlider gap={64} duration={30} className="py-4">
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            width={logo.width ?? 120}
            height={logo.height ?? 40}
            className="h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity dark:invert"
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
