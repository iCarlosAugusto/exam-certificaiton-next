"use client";

import { Alternative } from "@/components/alternative";
import { Button } from "@/components/button";
import { ModalAuthentication } from "@/components/modal";
import { AlternativeEntity } from "@/entities/alternative.entity";
import { indexToLabel } from "@/utils/indexToAlternativeLabel";
import { Fragment, useState } from "react";

interface AlternativesProps {
    alternatives: AlternativeEntity[]
}

function AlternativesComponent({alternatives}: AlternativesProps) {
    const [currentAlternativeSelected, setCurrentAlternativeSelected] = useState<AlternativeEntity | null>(null);
    const [showReply, setShowReply] = useState(false);
    const [showModalAuthentication, setShowModalAuthentication] = useState(false);

    const handlePickQuestion = (alternative: AlternativeEntity) => {
        if(showReply){
            setShowReply(false);
        }
        setCurrentAlternativeSelected(alternative);
    }

    const handleReplyQuestion = () => {
        toggleModalAuthentication();
        setShowReply(true);
    }

    const toggleModalAuthentication = () => {
        setShowModalAuthentication(oldState => !oldState);
    }

    return (
        <Fragment>
            <ModalAuthentication
                isOpen={showModalAuthentication}
                closeModal={toggleModalAuthentication}
            />
            {alternatives.map((alternative, index) =>
                <div className="ml-6 mt-2" onClick={() => handlePickQuestion(alternative)}>
                    <Alternative
                        isSelected={alternative.id === currentAlternativeSelected?.id}
                        text={alternative.textAlternative}
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
        </Fragment>
    )
}

export { AlternativesComponent }