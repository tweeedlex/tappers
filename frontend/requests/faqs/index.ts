import apiRequest from "@/requests/config";
import {FAQResponse} from "./types";

export const getFaqs = async (): Promise<FAQResponse> => {
  const response = await apiRequest<FAQResponse>("GET", "/faqs");
  console.log("response", response)
  return response.data;
};