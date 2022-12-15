import { ButtonHTMLAttributes } from "react";

export const Button = ({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`hover:bg-slate-700 active:bg-slate-500 px-1 ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const LightButton = ({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`px-2 bg-slate-600 hover:bg-slate-500 rounded-sm ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};
