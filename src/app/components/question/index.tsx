
import { AlternativeEntity } from "@/app/entities/alternative.entity";
import { QuestionEntity } from "@/app/entities/question.entity";
import { useState } from "react"
import { Alternative } from "../alternative";
import { Button } from "../button";
import { indexToLabel } from "@/app/utils/indexToAlternativeLabel";

function QuestionSingle({text, alternatives, lastUserReply}: QuestionEntity) {

    const [currentAlternativeSelected, setCurrentAlternativeSelected] = useState<AlternativeEntity | null>(null);
    const [showReply, setShowReply] = useState(false);

    const handlePickQuestion = (alternative: AlternativeEntity) => {
        if(showReply){
            setShowReply(false);
        }
        setCurrentAlternativeSelected(alternative);
    }

    const handleReplyQuestion = () => {
        setShowReply(true);
    }

    return(
        <div className="shadow-md w-full rounded-lg mt-10">
            <div className="bg-blue-300 flex rounded-t-lg">
                <div className="bg-blue-600 h-full p-4 rounded-tl-lg">
                    <span className="text-white font-bold">Questão 25</span>
                </div>
                <div className="flex items-center ml-5">
                    <span className="text-white font-bold">AWS - ACL-02 - Segurança</span>
                </div>
            </div>

            <div className="p-6">
                <p>{text}</p>
                {alternatives.map((alternative, index) =>
                    <div className="ml-6 mt-2" onClick={() => handlePickQuestion(alternative)}>
               
                        <Alternative
                            isSelected={alternative.id === currentAlternativeSelected?.id}
                            text={alternative.text}
                            label={indexToLabel(index)}
                        />
                    </div>
                )}

                <div className="flex items-center mt-12">
        
                    <Button text="Confirmar resposta" onClick={handleReplyQuestion} isDisabled={currentAlternativeSelected == null}/>
                    {showReply && (
                        <div className={`${currentAlternativeSelected?.isCorrect ? "bg-green-200" : "bg-red-200"} rounded-xl p-4 ml-5`}>
                            <span className={`${currentAlternativeSelected?.isCorrect ? "text-green-600" : "text-red-600"} font-bold`}>
                                {currentAlternativeSelected?.isCorrect ? "Parabéns, você acertou!" : `Ops. A alternativa correta é a [TO-DO]`}
                            </span>
                        </div> 
                    )}
                </div>
            </div>
        </div>
    )
}

export { QuestionSingle }