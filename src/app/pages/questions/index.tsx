
"use client"

import { Button } from "@/app/components/button";
import { Chip } from "@/app/components/chip";
import { Navbar } from "@/app/components/navbar";
import { QuestionSingle } from "@/app/components/question";
import { QuestionMultiple } from "@/app/components/questionMultiple";
import { Search } from "@/app/components/search";
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
        <Fragment>
            <Navbar/>
            <main className="px-6 md:px-32 lg:px-72">
                <h1>Questões AWS Cloud Patricioner</h1>
                <Search/>
                {questions?.map((question, index )=> (
                    question.questionType === QuestionType.multipleReplies 
                        ? <QuestionMultiple {...question} key={index}/> 
                        : <QuestionSingle {...question} key={index}/>
                ))}

            </main>
        </Fragment>

    )
}

export { Questions }