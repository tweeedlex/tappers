import apiRequest from "@/requests/config";
import {WorksResponse} from "./types";

export const getWorks = async (): Promise<WorksResponse> => {
  const response = await apiRequest<WorksResponse>("GET", "/works?populate=img");
  return response.data;
};