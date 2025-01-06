import { GetMeta, Image } from "@/requests/types";

type SocialObject = {
  id: number;
  documentId: string;
  link: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  icon: Image;
};

export type SocialsResponse = {
  data: SocialObject[];
  meta: GetMeta;
};