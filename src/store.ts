import { create } from "zustand";
import { combine } from "zustand/middleware";
import { nanoid } from "nanoid";

export const useStore = create(
  combine(
    {
      mobs: new Array<Mob>(
        {
          name: "Toxic Slime",
          id: "toxic-slime",
        },
        {
          name: "Fire Wizard",
          id: "fire-wizard",
        },
        {
          name: "Ender Creeper",
          id: "ender-creeper",
        }
      ),
    },
    (set, get) => ({
      createMob: (name: string) =>
        set({
          mobs: [...get().mobs, { name, id: nanoid() }],
        }),
    })
  )
);

export type Mob = {
  name: string;
  id: string;
};
