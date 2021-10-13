const BASE_SIZE = 16;

export const remToPixels = (remAmount: number): number => {
  return remAmount * BASE_SIZE;
};
