import { VariantProps, cva, cx } from "cva";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-green-700 hover:bg-green-500",
        "border border-green-900",
        "text-white",
      ],
      neutral: [
        "bg-gray-700 hover:bg-gray-500",
        "border border-gray-900",
        "text-white",
      ],
    },
    size: {
      md: "px-4 py-2",
      sm: "px-2 py-1 text-sm",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  children,
  ...props
}) => {
  className = cx(className, "rounded-lg");

  return (
    <button className={button({ intent, size, className })} {...props}>
      {children}
    </button>
  );
};
