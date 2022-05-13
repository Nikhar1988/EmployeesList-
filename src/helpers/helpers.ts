type GenerateId = () => number;

export const generateId: GenerateId = () => (
  Math.random() + new Date().getTime()
);  