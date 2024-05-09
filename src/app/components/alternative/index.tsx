interface AlternativeProps {
    isSelected: boolean;
    text: string;
    label: string;
}

function Alternative({ isSelected, text, label }: AlternativeProps) {
    return (
        <div className={ `${isSelected ? "bg-slate-100" : "bg-white"} flex mt-8 items-center cursor-pointer p-2 rounded-md hover:bg-slate-100`}>
            <div className="border-orange-600 border-2 w-10 h-10 rounded-full flex items-center justify-center">
                <span className="font-bold text-orange-600">{label}</span>
            </div>
            <span className="ml-5">
                {text}
            </span>
        </div>
    )
}

export { Alternative }