import create from "./http-service";

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  baseExperience: number;
  abilityCount: number;
  spriteURL: string;
}

export default create("/pokemon");
