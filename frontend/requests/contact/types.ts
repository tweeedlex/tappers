export interface Contact {
  name: string;
  budget: string;
  email: string;
  message: string;
}

type ContactObject = {
  id: number,
  name: string,
  budget: string,
  email: string,
  message: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string
}

export type ContactResponse = {
  data: ContactObject,
  meta: object
}
