"use client";

//@ts-ignore
import useSound from "use-sound";
import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    const [play] = useSound("/audios/click-button.mp3");

    return (
      <button
        onMouseDown={play}
        className={cn(
          "neu active:neu-pressed focus-visible:neu-pressed inline-block rounded-sm bg-success px-4 py-1 text-sm font-medium",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
