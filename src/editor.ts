"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Mob, useStore } from "./store";

export function useCurrentMob(): Mob | null {
  const mobs = useStore((state) => state.mobs);
  const elements = usePathElements();
  const id = useParams()["mob"];
  if (id === undefined) {
    return null;
  }
  return mobs.find((mob) => mob.id === id) ?? null;
}

function usePathElements() {
  return usePathname().split("/").filter(Boolean);
}

export function useEditMob(id: string) {
  const elements = usePathElements();
  const router = useRouter();
  const newPath = ["mobs", id, ...elements.slice(2)];
  return () => router.replace(newPath.join("/"));
}
