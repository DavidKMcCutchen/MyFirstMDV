export interface Cidade {
  id: string;
  name: string;
  state: string;
  population: string;
  visited: boolean;
};

export const emptyCidade = {
  id: '',
  name: '',
  state: '',
  population: '',
  visited: false
};
