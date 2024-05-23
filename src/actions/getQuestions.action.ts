"use server";

import { httpRequest } from "@/api/axios.helper";
import { Pageable } from "@/entities/pagable.interface";
import { QuestionEntity } from "@/entities/question.entity";


export const getQuestionsAction = async (courseId: string, page: string) => {
    const { data } = await httpRequest.get<Pageable<QuestionEntity[]>>(`/courses/${courseId}/questions?page=${page}`);
    return data;
}

