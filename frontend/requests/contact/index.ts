import apiRequest, {ApiResponse} from "@/requests/config";
import {Contact, ContactResponse} from "./types";

export const addContact = async (data: Contact): Promise<ApiResponse<ContactResponse>> => {
  return await apiRequest<ContactResponse>("POST", "/contacts", {}, {
    data
  });
};