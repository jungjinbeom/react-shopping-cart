import { MIN } from "../../../domain/constant";

export const isMinVaildate = (num: number) => {
  return MIN >= num;
};
