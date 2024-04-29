import { AlternativeEntity } from "@/app/entities/alternative.entity";
import { QuestionEntity } from "@/app/entities/question.entity";
import { useState } from "react"
import { Button } from "../button";
import { Alternative } from "../alternative";
import { indexToLabel } from "@/app/utils/indexToAlternativeLabel";

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
            <div className="bg-blue-300 flex p-6 rounded-t-lg">
                <div>
                    <span className="text-white">Questão 25 (Multipla) - </span>
                </div>
                <div>
                    <span className="text-white">AWS - ACL-02 - </span>
                    <span className="text-white">Segunça</span>
                </div>

            </div>

            <div className="p-6">
                <p>{text}</p>
                {alternatives.map((alternative, index) =>
                    <div className="ml-6 mt-2" onClick={() => handlePickQuestion(alternative)}>
                        <Alternative 
                            isSelected={currentAlternativeSelected.includes(alternative)}
                            text={alternative.text}
                            label={indexToLabel(index)}
                        />
                    </div>
                )}
                {JSON.stringify(currentAlternativeSelected)}

                <div className="flex items-center mt-12">
        
                    <Button text="Confirmar resposta" onClick={handleReplyQuestion} isDisabled={currentAlternativeSelected == null}/>
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