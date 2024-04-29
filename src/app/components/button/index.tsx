interface ButtonProps {
    text: string;
    onClick: () => void;
    isDisabled?: boolean
}

function Button({text, onClick, isDisabled = false }: ButtonProps) {
    return (
        <button 
            className={`w-full md:w-auto bg-orange-500 text-white p-3 rounded-lg ${isDisabled ? "opacity-50" : "opacity-100" }`}
            onClick={() => isDisabled ? null : onClick()}
        >
            {text}
        </button>
    )
}

export { Button }