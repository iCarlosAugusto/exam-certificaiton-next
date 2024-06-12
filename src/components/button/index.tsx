import { Button } from "@mui/material";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    isDisabled?: boolean;
    className?: string;
    type?:  "submit" | "reset" | "button" | undefined;
}

function ButtonComponent({text, onClick, isDisabled = false, type="button", className }: ButtonProps) {
    return (
        <Button 
            variant="contained"
            type={type}
            className={className}
            onClick={() => isDisabled ? null : onClick?.()}
        >
            {text}
        </Button>
    )
}

export { ButtonComponent }