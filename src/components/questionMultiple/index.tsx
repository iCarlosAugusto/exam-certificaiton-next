"use client";

import { useState } from "react"
import { Alternative } from "../alternative";
import { QuestionEntity } from "@/entities/question.entity";
import { AlternativeEntity } from "@/entities/alternative.entity";
import { indexToLabel } from "@/utils/indexToAlternativeLabel";
import { ButtonComponent } from "../button";

function QuestionMultiple({text, alternatives, lastUserReply}: QuestionEntity) {

    const [currentAlternativeSelected, setCurrentAlternativeSelected] = useState<AlternativeEntity[]>([]);
    const [showReply, setShowReply] = useState(false);

    const handlePickQuestion = (alternative: AlternativeEntity) => {
        if(showReply){
            setShowReply(false);
        }

        if(!currentAlternativeSelected.includes(alternative)){
            setCurrentAlternativeSelected(oldState => {
                if(oldState.length === 2) {
                    currentAlternativeSelected.shift();
                }
    
                return [...oldState, alternative]
            });
        }
    }

    const handleReplyQuestion = () => {
        setShowReply(true);
    }

    return(
        <div className="shadow-md w-full rounded-lg mt-10">
            <div className="bg-blue-300 flex rounded-t-lg">
                <div className="bg-blue-600  h-full p-4 rounded-tl-lg">
                    <span className="text-white font-bold">Questão 24 </span>
                </div>
                <div className="flex items-center ml-5">
                    <span className="text-white font-bold">AWS - ACL-02 - Segunça</span>
                </div>

            </div>

            <div className="p-6">
                <div className="flex flex-col">
                    <div className="border-2 border-red-500 self-end p-3 rounded-full">
                        <span className="text-red-500">
                            Resolvi errado!
                        </span>
                    </div>
                    <p className="text-base font-medium mt-4">{text}</p>
                </div>

                {alternatives.map((alternative, index) =>
                    <div className="ml-6 mt-2" onClick={() => handlePickQuestion(alternative)}>
                        <Alternative 
                            isSelected={currentAlternativeSelected.includes(alternative)}
                            text={alternative.textAlternative}
                            label={indexToLabel(index)}
                        />
                    </div>
                )}
                {JSON.stringify(currentAlternativeSelected)}

                <div className="flex items-center mt-12">
        
                    <ButtonComponent text="Confirmar resposta" onClick={handleReplyQuestion} isDisabled={currentAlternativeSelected == null}/>
                    {/* {showReply && (
                        <div className={`${currentAlternativeSelected?.isCorrect ? "bg-green-200" : "bg-red-200"} rounded-xl p-4 ml-5`}>
                            <span className={`${currentAlternativeSelected?.isCorrect ? "text-green-600" : "text-red-600"} font-bold`}>
                                {currentAlternativeSelected?.isCorrect ? "Parabéns, você acertou!" : `Ops. A alternativa correta é a [TO-DO]`}
                            </span>
                        </div> 
                    )} */}

                </div>

            </div>
        </div>
    )
}

export { QuestionMultiple }