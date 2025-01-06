import apiRequest from "@/requests/config";
import {ReviewResponse} from "./types";

export const getReviews = async (): Promise<ReviewResponse> => {
  const response = await apiRequest<ReviewResponse>("GET", "/reviews?populate=avatar");
  return response.data;
};