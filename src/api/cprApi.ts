import client from "./client";
import { components } from "../types/api";

export type CprDTO = components["schemas"]["CPRAbsDriversDTO"];

export async function getUsers(): Promise<CprDTO[]> {
  const { data } = await client.get<CprDTO[]>("/cpr/classification/absolute/drivers");
  return data;
}