import { Button } from "../button";
import { Chip } from "../chip";

function SearchComponent() {
    return (
        <div className="flex flex-col items-start px-5 lg:px-0">
            <div className="flex flex-col lg:flex-row w-full">
                <div>
                    <span>Questões que</span>
                    <div>
                        <Chip label="Não resolvi" className="mr-2" onClick={() => console.log("click!")}/>
                        <Chip label="Errei" className="mr-2" onClick={() => console.log("click!")}/>
                        <Chip label="Acertei" className="mr-2" onClick={() => console.log("click!")}/>
                    </div>
                </div>
                <div className="flex flex-col ml-5">
                    <label htmlFor="hs-select-label" className="block text-sm font-medium mb-2">Label</label>
                    <select id="hs-select-label" className="py-3 px-4 block w-full border-gray-300 border-2  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                        <option selected={true}>Open this select menu</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="flex flex-col ml-5">
                    <label htmlFor="hs-select-label" className="block text-sm font-medium mb-2">Label</label>
                    <select id="hs-select-label" className="py-3 px-4 block w-full border-gray-300 border-2  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                        <option selected={true}>Open this select menu</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
            </div>
            <Button
                text="Buscar"
                onClick={() => console.log("buscar!")}
                className="mt-9"
            />
        </div>
    )
}

export { SearchComponent }