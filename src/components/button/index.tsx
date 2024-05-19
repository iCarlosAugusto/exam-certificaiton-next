interface ButtonProps {
    text: string;
    onClick?: () => void;
    isDisabled?: boolean;
    className?: string;
    type?:  "submit" | "reset" | "button" | undefined;
}

function Button({text, onClick, isDisabled = false, type="button", className }: ButtonProps) {
    return (
        <button 
            type={type}
            className={`w-full md:w-auto bg-orange-500 text-white p-3 rounded-lg ${isDisabled ? "opacity-50" : "opacity-100 hover:opacity-70 transition-opacity"} ${className}`}
            //onClick={() => isDisabled ? null : onClick?.()}
        >
            <span className="font-semibold">{text}</span>
        </button>
    )
}

export { Button }