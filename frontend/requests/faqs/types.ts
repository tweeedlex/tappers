import {GetMeta} from "@/requests/types";

type FAQObject = {
  id: number;
  documentId: string;
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export type FAQResponse = {
  data: FAQObject[];
  meta: GetMeta;
}