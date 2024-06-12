import { getQuestionsAction } from "@/actions/getQuestions.action";
import { PaginationComponent } from "@/components/pagination";
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
        "c33a59d7-6770-4359-8bfa-1c199100f794",
        currentPage !== 0 ? currentPage - 1 : currentPage
    );
    return (
        <Fragment>

            <main className="px-6 md:px-32 lg:px-72">
                <h1>Questões AWS Cloud Patricioner TOTAL PAGES: {questions.totalPages}</h1>
                <Search/>
                {questions.content.map((question, index) => (
                    question.questionType === QuestionType.multipleReplies 
                        ? <QuestionMultiple {...question} key={index * Math.random()}/> 
                        : <QuestionSingle {...question} key={index * Math.random()}/>
                ))}
                <PaginationComponent totalPages={questions.totalPages}/>
            </main>
        </Fragment>
    )
}