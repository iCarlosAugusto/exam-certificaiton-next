
"use client"

import { Button } from "@/app/components/button";
import { Chip } from "@/app/components/chip";
import { QuestionSingle } from "@/app/components/question";
import { QuestionMultiple } from "@/app/components/questionMultiple";
import { QuestionEntity, QuestionType } from "@/app/entities/question.entity";
import { useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";

function Questions() {

    const [questions, setQuestions] = useState<QuestionEntity[]>();

    const mockQuestions: QuestionEntity[] = [
        {
            id: "1",
            questionType: QuestionType.multipleReplies,
            text: "Questao 1",
            alternatives: [
                {
                    id: "123",
                    isCorrect: false,
                    text: "alternativa 1"
                },
                {
                    id: "321",
                    isCorrect: true,
                    text: "alternativa 2"
                },
                {
                    id: "300",
                    isCorrect: false,
                    text: "alternativa 3"
                },
                {
                    id: "400",
                    isCorrect: false,
                    text: "alternativa 4"
                }
            ]
        },
        {
            id: "2",
            questionType: QuestionType.uniqueReply,
            text: "Questao 2",
            alternatives: [
                {
                    id: "430",
                    isCorrect: true,
                    text: "alternativa 1"
                },
                {
                    id: "923",
                    isCorrect: false,
                    text: "alternativa 2"
                },
                {
                    id: "120",
                    isCorrect: false,
                    text: "alternativa 3"
                },
                {
                    id: "777",
                    isCorrect: false,
                    text: "alternativa 4"
                }
            ]
        }
    ];

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
        setQuestions(mockQuestions);
    }, [])
    //

    return (
        <main className="px-12">
            <h1>Questões AWS Cloud Patricioner</h1>

            <div className="flex flex-col items-start">
                <div className="flex">
                    <div>
                        <span>Questões que</span>
                        <div>
                            <Chip label="Não resolvi" className="mr-2" onClick={() => console.log("click!")}/>
                            <Chip label="Errei" className="mr-2" onClick={() => console.log("click!")}/>
                            <Chip label="Acertei" className="mr-2" onClick={() => console.log("click!")}/>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5">
                        <span>Prova</span>
                        <select name="" id="">
                            <option value="">CLF-01</option>
                            <option value="">CLF-01</option>
                        </select>
                    </div>
                    <div className="flex flex-col ml-5">
                        <span>Assunto</span>
                        <select name="" id="">
                            <option value="">CLF-01</option>
                            <option value="">CLF-01</option>
                        </select>
                    </div>
                </div>
                <Button
                    text="Buscar"
                    onClick={() => console.log("buscar!")}
                    className="mt-9"
                />
            </div>
            
            {questions?.map((question, index )=> (
                question.questionType === QuestionType.multipleReplies 
                    ? <QuestionMultiple {...question} key={index}/> 
                    : <QuestionSingle {...question} key={index}/>
            ))}

        </main>

    )
}

export { Questions }