interface InputProps {
    placeholder?: string;
}

function Input({placeholder}: InputProps) {
    return (
        <div className="mb-6">
            <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder={placeholder}
            />
        </div>
    )
}

export { Input }