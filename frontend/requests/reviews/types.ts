import {GetMeta, Image} from "@/requests/types";

type ReviewObject = {
  id: number;
  documentId: string;
  company: string;
  name: string;
  position: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  avatar: Image;
};

export type ReviewResponse = {
  data: ReviewObject[];
  meta: GetMeta;
};
