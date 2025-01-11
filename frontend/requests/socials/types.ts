import { GetMeta } from "@/requests/types";

type SocialObject = {
  id: number;
  documentId: string;
  link: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  icon: string;
};

export type SocialsResponse = {
  data: SocialObject[];
  meta: GetMeta;
};