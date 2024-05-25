import { Fragment, HTMLInputTypeAttribute } from "react";

interface InputProps {
    placeholder?: string;
    className?: string;
    type?: HTMLInputTypeAttribute;
    name?: string;
    error?: string;
}

function Input({placeholder, className, name, error, type="text"}: InputProps) {
    return (
        <div className="mb-4">
            <input 
                type={type}
                name={name} 
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className}`}
                placeholder={placeholder}
            />
            {error && (
                <span className="text-red-500 font-bold">{error}</span>
            )}
        </div>

    )
}

export { Input }