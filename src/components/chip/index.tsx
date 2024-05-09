import { HTMLAttributes } from "react";

interface ChipProps {
    label: string;
    className?: string
    isSelected?: boolean
    onClick: () => void;
}

function Chip({label, className, onClick, isSelected = false}: ChipProps) {
    return (
        <button className={`px-6 py-2 border-2 border-gray-300 rounded-full text-gray-500 ${className}`} onClick={onClick}>
            {label}
        </button>
    )
}

export { Chip }