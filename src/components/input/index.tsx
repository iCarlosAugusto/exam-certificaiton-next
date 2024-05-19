import { HTMLInputTypeAttribute } from "react";

interface InputProps {
    placeholder?: string;
    className?: string;
    type?: HTMLInputTypeAttribute;
    name?: string;
}

function Input({placeholder, className, name, type="text"}: InputProps) {
    return (
        <input 
            type={type}
            name={name} 
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className}`}
            placeholder={placeholder}
        />

    )
}

export { Input }