"use client";
import { useRouter } from "next/navigation";

export function OpenEditorButton() {
  const router = useRouter();
  const openEditor = () => router.replace("/mobs");
  return (
    <button
      type="button"
      onClick={openEditor}
      className="border-red-500 border-4 rounded-xl bg-red-500 text-white my-2 p-1 transition-colors"
    >
      Open Editor
    </button>
  );
}
