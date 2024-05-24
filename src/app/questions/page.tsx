import { getQuestionsAction } from "@/actions/getQuestions.action";
import { ModalAuthentication } from "@/components/modal";
import { Pagination } from "@/components/pagination";
import { QuestionSingle } from "@/components/question";
import { QuestionMultiple } from "@/components/questionMultiple";
import { Search } from "@/components/search";
import { Pageable } from "@/entities/pagable.interface";
import { QuestionEntity, QuestionType } from "@/entities/question.entity";
import { Fragment } from "react/jsx-runtime";


export default async function Questions({searchParams }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    const currentPage = Number(searchParams?.page ?? "0");
    const questions: Pageable<QuestionEntity[]> = await getQuestionsAction(
        "e87164d1-fb2e-4c5e-b361-00634a895962",
        currentPage !== 0 ? currentPage - 1 : currentPage
    );
    return (
        <Fragment>
            <ModalAuthentication isOpen={false}/>
            <main className="px-6 md:px-32 lg:px-72">
                <h1>Questões AWS Cloud Patricioner TOTAL PAGES: {questions.totalPages}</h1>
                <Search/>
                {questions.content.map((question, index) => (
                    question.questionType === QuestionType.multipleReplies 
                        ? <QuestionMultiple {...question} key={index * Math.random()}/> 
                        : <QuestionSingle {...question} key={index * Math.random()}/>
                ))}
                <Pagination totalPages={questions.totalPages}/>
            </main>
        </Fragment>
    )
}