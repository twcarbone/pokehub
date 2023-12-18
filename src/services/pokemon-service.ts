import create from "./http-service";

export interface Pokemon {
  id: number;
  name: string;
}

export default create("/pokemon");
