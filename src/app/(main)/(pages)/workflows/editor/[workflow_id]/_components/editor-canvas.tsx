"use client";
import { EditorCanvasCardType, EditorNodeType } from "@/lib/types";
import { useEditor } from "@/providers/editor-provider";
import React, { useCallback, useMemo, useState } from "react";
import ReactFlow, {
  Background,
  Connection,
  Controls,
  Edge,
  EdgeChange,
  MiniMap,
  NodeChange,
  ReactFlowInstance,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import EditorCardSingle from "./editor-canvas-single";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useToast } from "@/components/ui/use-toast";
import { usePathname } from "next/navigation";
import { v4 } from "uuid";
import { EditorCanvasDefaultCardTypes } from "@/lib/constant";
import { Loader } from "lucide-react";
import FlowInstance from "./flow-instance";
import EditorCanvasSidebar from "./editor-canvas-sidebar";

const initialNodes: EditorNodeType[] = [];
const initialEdges: { id: string; source: string; target: string }[] = [];

const EditorCanvas = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [isWorkFlowLoading, setIsWorkFlowLoading] = useState<boolean>(false);
  const { dispatch, state } = useEditor();
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance>();
  const { toast } = useToast();
  const pathname = usePathname();
  const nodeTypes = useMemo(
    () => ({
      Action: EditorCardSingle,
      Trigger: EditorCardSingle,
      Email: EditorCardSingle,
      Condition: EditorCardSingle,
      AI: EditorCardSingle,
      Slack: EditorCardSingle,
      "Google Drive": EditorCardSingle,
      Notion: EditorCardSingle,
      Discord: EditorCardSingle,
      "Custom Webhook": EditorCardSingle,
      "Google Calendar": EditorCardSingle,
      Wait: EditorCardSingle,
    }),
    []
  );

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();
      const type: EditorCanvasCardType["type"] = event.dataTransfer.getData(
        "application/reactflow"
      );

      if (typeof type === "undefined" || !type) {
        return;
      }

      const triggerAlreadyExists = state.editor.elements.find(
        (node) => node.type === "Trigger"
      );
      if (type === "Trigger" && triggerAlreadyExists) {
        toast({
          title: "Oops!",
          description: "Only one trigger can be added to automations",
        });
        return;
      }

      if (!reactFlowInstance) return;
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: v4(),
        type,
        position,
        data: {
          title: type,
          description: EditorCanvasDefaultCardTypes[type].description,
          completed: false,
          current: false,
          metadata: {},
          type: type,
        },
      };
      //@ts-ignore
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, state]
  );

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      //@ts-ignore
      setNodes((nds) => applyNodeChanges(changes, nds));
    },
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      //@ts-ignore
      setEdges((eds) => applyEdgeChanges(changes, eds));
    },
    [setEdges]
  );

  const onConnect = useCallback((params: Edge | Connection) => {
    setEdges((eds) => addEdge(params, eds));
  }, []);

  const handleClickCanvas = () => {
    dispatch({
      type: "SELECTED_ELEMENT",
      payload: {
        element: {
          data: {
            completed: false,
            current: false,
            description: "",
            metadata: {},
            title: "",
            type: "Trigger",
          },
          id: "",
          position: { x: 0, y: 0 },
          type: "Trigger",
        },
      },
    });
  };

  return (
    <ResizablePanelGroup direction="horizontal" className="">
      <ResizablePanel defaultSize={70}>
        <div className="flex h-full items-center justify-center">
          <div
            style={{ width: "100%", height: "100%", paddingBottom: "70px" }}
            className="relative"
          >
            {isWorkFlowLoading ? (
              <Loader className="animate-spin absolute left-1/2 top-1/2"/>
            ) : (
              <ReactFlow
              className="w-[300px]"
              onDrop={onDrop}
              onDragOver={onDragOver}
              nodes={state.editor.elements}
              onNodesChange={onNodesChange}
              edges={edges}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onInit={setReactFlowInstance}
              onClick={handleClickCanvas}
              nodeTypes={nodeTypes}
              fitView
            >
              <Controls position="top-left" />
              <MiniMap
                position="bottom-left"
                className="!bg-background"
                zoomable
                pannable
              />
              <Background
                //@ts-ignore
                variant="dots"
                gap={12}
                size={1}
              />
            </ReactFlow>
            )}
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={40} className="relative sm:block">
        {isWorkFlowLoading ? (
          <Loader className="animate-spin absolute left-1/2 top-1/2"/>
        ) : (
          <FlowInstance edges={edges} nodes={nodes}>
            <EditorCanvasSidebar nodes={nodes}/>
          </FlowInstance>
        )}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default EditorCanvas;
