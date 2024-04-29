import { AlternativeEntity } from "./alternative.entity";

export enum QuestionType { multipleReplies, uniqueReply }

export interface QuestionEntity {
    id: string;
    text: string;
    alternatives: AlternativeEntity[];
    lastUserReply?: AlternativeEntity;
    questionType: QuestionType
}
