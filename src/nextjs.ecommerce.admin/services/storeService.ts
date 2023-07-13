import { requests } from "@/services/axios";
import { StoreFormSchema, StoreSchema } from "@/types/store";

export const createStore = (body: StoreFormSchema): Promise<StoreSchema> => {
  return requests.post(`/api/stores`, body);
};

export const updateStore = (storeId: string, body: StoreFormSchema): Promise<StoreSchema> => {
  return requests.patch(`/api/stores/${storeId}`, body);
};

export const deleteStore = (storeId: string): Promise<StoreSchema> => {
  return requests.delete(`/api/stores/${storeId}`);
};
