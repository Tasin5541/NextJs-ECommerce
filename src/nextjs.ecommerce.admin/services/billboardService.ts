import { BillboardFormSchema, BillboardSchema } from "@/types/billboard";

import { requests } from "./axios";

export const createBillboard = (
  storeId: string,
  body: BillboardFormSchema
): Promise<BillboardSchema> => {
  return requests.post(`/api/${storeId}/billboards`, body);
};

export const updateBillboard = (
  storeId: string,
  billboardId: string,
  body: BillboardFormSchema
): Promise<BillboardSchema> => {
  return requests.patch(`/api/${storeId}/billboards/${billboardId}`, body);
};

export const deleteBillboard = (storeId: string, billboardId: string): Promise<BillboardSchema> => {
  return requests.delete(`/api/${storeId}/billboards/${billboardId}`);
};
