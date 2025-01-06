import { GetMeta, Image } from "@/requests/types";

type WorkObject = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  img: Image;
};

export type WorksResponse = {
  data: WorkObject[];
  meta: GetMeta;
};