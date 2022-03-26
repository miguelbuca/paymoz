import { InputHTMLAttributes } from "react";

export interface Button extends InputHTMLAttributes<HTMLButtonElement> {
    label?: string
}