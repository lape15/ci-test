import React, { ButtonHTMLAttributes } from "react";
interface AccessibleButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}
function AccessibleButton({ label, ...rest }: AccessibleButtonProps) {
  return (
    <button aria-label={label} {...rest}>
      {label}
    </button>
  );
}
export default AccessibleButton;
