import client from "../client";
import { components } from "../../types/api";

export type ClassificationDTO = components["schemas"]["ClassificationDTO"];

export async function getAbsClassification(): Promise<ClassificationDTO[]> {
  const { data } = await client.get<ClassificationDTO[]>("/cpr/classification/absolute/drivers");
  return data;
}

export async function getR2Classification(): Promise<ClassificationDTO[]> {
  const { data } = await client.get<ClassificationDTO[]>("/cpr/classification/rally2/drivers");
  return data;
}