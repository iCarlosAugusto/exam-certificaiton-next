"use client";

import { Suspense } from "react";
import Select from 'react-select';
import { useRouter } from 'next/navigation'
import { ButtonComponent } from "../button";

interface SelectedQuestionType{
    value: string;
    label: string;
}

function SearchComponent() {

    const router = useRouter()

    const options = [
        { value: "1", label: "Não resolvi" },
        { value: "2", label: "Errei" },
        { value: "3", label: "Acertei" }
    ];

    const onChangeTypeQuestion = (question: SelectedQuestionType) => {
        router.replace(`?questionType=${question.value}`, {scroll: false});
    }
      
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
        <div className="flex flex-col items-start px-5 lg:px-0">
            <div className="flex flex-col lg:flex-row w-full">
                <div className="w-full lg:w-1/6">
                    <span className="font-bold">Questões que</span>
                    <div>
                        <Select
                            defaultValue={options[0]}
                            isClearable={false}
                            options={options}
                            onChange={(e) => onChangeTypeQuestion(e as SelectedQuestionType)}
                        />
                    </div>
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