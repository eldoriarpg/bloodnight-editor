"use client";
import { ReactNode } from "react";
import clsx from "clsx";
import Icon from "../../../components/Icon";
import { useCurrentMob, useEditMob } from "../../../editor";
import { Mob, useStore } from "../../../store";
import { Col, Container, ListGroup } from "react-bootstrap";

export default function Layout({ children }: { children: ReactNode }) {
  const mobs = useStore((state) => state.mobs);
  return (
    <ListGroup>
  {
    mobs.map(mob => (
      <ListGroup.Item key={mob.id}>
        {mob.name}
      </ListGroup.Item>
    ))
  }
    </ListGroup >
  );
}

function MobItem({ mob }: { mob: Mob }) {
  const currentMob = useCurrentMob();
  const isCurrentMob = currentMob?.id === mob.id;
  return (
    <div className="flex flex-row justify-between items-center p-4 text-l shadow">
      <span className={clsx(isCurrentMob && "text-red-500")}>{mob.name}</span>
      <EditIcon mob={mob} visible={!isCurrentMob} />
    </div>
  );
}

function EditIcon({ mob, visible }: { mob: Mob; visible: boolean }) {
  const edit = useEditMob(mob.id);
  return (
    <button
      type="button"
      onClick={edit}
      className={clsx(!visible && "invisible")}
    >
      <Icon icon="ic:outline-edit" width={30} />
    </button>
  );
}
