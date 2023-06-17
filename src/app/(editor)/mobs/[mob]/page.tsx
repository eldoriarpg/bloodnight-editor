"use client";

import { useCurrentMob } from "../../../../editor";

export default function Page() {
  const mob = useCurrentMob();
  return <p>Editor for {mob?.name}</p>;
}
