import { requests } from "@/services/axios";
import { StoreFormSchema, StoreSchema } from "@/types/store";

export const createStore = (body: StoreFormSchema): Promise<StoreSchema> => {
  return requests.post(`/api/stores`, body);
};
