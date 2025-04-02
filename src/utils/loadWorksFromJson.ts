import { WorkData } from "../types/Work";

export const loadWorksFromJson = async (): Promise<WorkData[]> => {
  const response = await fetch("/data/works.json");

  if (!response.ok) {
    throw new Error("No se pudo cargar works.json");
  }

  const data: WorkData[] = await response.json();
  return data;
};
