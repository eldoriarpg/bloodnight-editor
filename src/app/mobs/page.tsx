"use client";
import clsx from "clsx";
import { Mob, useStore } from "../../store"
import { Icon } from "@iconify/react";

export default function Page() {
  const mobs = useStore(state => state.mobs);
  return <div className="grid grid-cols-12 h-full">
    <div className="col-span-2 flex flex-col border-r shadow">
      {mobs.map(mob => <MobItem key={mob.id} mob={mob} />)}
    </div>
    <EditorSide className="col-span-10" />
  </div>
}

function MobItem({ mob }: { mob: Mob }) {
  const currentMobId = useStore(state => state.currentEditorMob);
  return <div className="flex flex-row justify-between items-center p-4 text-l shadow">
    <span>{mob.name}</span>
    {currentMobId !== mob.id ? <EditIcon mob={mob} /> : <CloseIcon mob={mob} />}
  </div>
}

function EditIcon({ mob }: { mob: Mob }) {
  const edit = useStore(state => state.openMobInEditor);
  return <button type="button" onClick={() => {
    edit(mob.id)
  }}>
    <Icon icon="ic:outline-edit" width={30} />
  </button>;
}

function CloseIcon({ mob }: { mob: Mob }) {
  const close = useStore(state => state.closeMobEditor);
  return <button type="button" onClick={close}>
    <Icon icon="material-symbols:close" width={30} />
  </button>
}

function EditorSide({ className }: { className?: string }) {
  const currentEditorMob = useStore(state => state.currentEditorMob);
  const mobs = useStore(state => state.mobs);

  if (currentEditorMob === null) {
    return <div className={
      clsx(className, "flex justify-center items-center")
    }>
      <p>Select a Mob to edit.</p>
    </div>;
  }

  const mob = mobs.find(mob => mob.id === currentEditorMob);

  return <div className={className}>
    Editor for Mob {mob?.name}
  </div>
}
