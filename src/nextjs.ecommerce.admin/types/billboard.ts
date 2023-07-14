import { Billboard } from "@prisma/client";

export type BillboardFormSchema = {
  label: string;
  imageUrl: string;
};

export type BillboardSchema = Billboard;
