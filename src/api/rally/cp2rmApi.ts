import client from "../client";
import { components } from "../../types/api";

export type ClassificationDTO = components["schemas"]["ClassificationDTO"];

export async function getCP2RMAbsDriversClassification(): Promise<ClassificationDTO[]> {
  const { data } = await client.get<ClassificationDTO[]>("/cp2rm/classification/absolute/drivers");
  return data;
}

export async function getRC4Classification(): Promise<ClassificationDTO[]> {
  const { data } = await client.get<ClassificationDTO[]>("/cp2rm/classification/rc4/drivers");
  return data;
}