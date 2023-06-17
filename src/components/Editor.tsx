"use client";
import { useCallback } from "react";
import { Background, BackgroundVariant, Connection, Controls, MiniMap, NodeTypes, ReactFlow, addEdge, useEdgesState, useNodesState } from "reactflow";
import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: {}, type: "bloodnight" },
  { id: '2', position: { x: 0, y: 100 }, data: {}, type: "bloodnight" },
];

export type EditorProps = {
  nodeTypes: NodeTypes
}

export function Editor({
  nodeTypes = {}
}: EditorProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChanges] = useEdgesState([]);

  const onConnect = useCallback((params: Connection) => setEdges(eds => addEdge(params, eds)), [setEdges]);

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChanges}
        onConnect={onConnect}
        nodesDraggable={true}
        edgesUpdatable={true}
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Lines} gap={12} size={1} />
      </ReactFlow>
    </div>
  )
}
