import { QuestionEntity } from "@/entities/question.entity";
import { AlternativesComponent } from "./alternatives";

function QuestionSingle({text, alternatives, lastUserReply}: QuestionEntity) {
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
                <div className="flex flex-col">

                    <div className="border-2 border-red-500 self-end p-3 rounded-full">
                        <span className="text-red-500">
                            Resolvi errado!
                        </span>
                    </div>
                    <p className="text-base font-medium mt-4">{text}</p>
                </div>

                <AlternativesComponent alternatives={alternatives}/>
            </div>
        </div>
    )
}

export { QuestionSingle }