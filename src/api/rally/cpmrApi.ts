import client from "../client";
import { components } from "../../types/api";

export type ClassificationDTO = components["schemas"]["ClassificationDTO"];

export async function getUsers(): Promise<ClassificationDTO[]> {
  const { data } = await client.get<ClassificationDTO[]>("/cpmr/classification/absolute/drivers");
  return data;
}