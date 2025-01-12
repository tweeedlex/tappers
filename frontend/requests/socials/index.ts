import apiRequest from "@/requests/config";
import {SocialsResponse} from "./types";

export const getSocials = async (): Promise<SocialsResponse> => {
  const response = await apiRequest<SocialsResponse>("GET", "/socials");
  return response.data;
};