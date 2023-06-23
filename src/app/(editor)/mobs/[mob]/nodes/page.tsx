"use client";

import { useCurrentMob } from "../../../../../editor";

export default function Page() {
  const mob = useCurrentMob();
  return <p>Node Editor for {mob?.name}</p>;
}
