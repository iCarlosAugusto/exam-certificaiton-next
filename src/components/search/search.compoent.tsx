"use client";

import { Suspense } from "react";
import { ButtonComponent } from "../button";
import { ToggleButtonQuestionTypeComponent } from "../toggleButton";

function SearchComponent() {



    return (
        <Suspense fallback={<h1>Loading...</h1>}>
        <div className="flex flex-col items-start px-5 lg:px-0">
            <div className="flex flex-col lg:flex-row w-full">
                <div className="w-full lg:w-1/6">
                    <span className="font-bold">Questões que</span>
                    <ToggleButtonQuestionTypeComponent/>
                </div>
            </div>
            <ButtonComponent
                text="Buscar"
                onClick={() => console.log("buscar!")}
                className="mt-9"
            />
        </div>
        </Suspense>
    )
}

export { SearchComponent }