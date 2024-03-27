"use client"
import { EditorNodeType } from "@/lib/types";
import { useEditor } from "@/providers/editor-provider";
import React, { useMemo } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import EditorCardSingle from "./editor-canvas-single";

const initialNodes: EditorNodeType[] = [];
const initialEdges: { id: string; source: string; target: string }[] = [];

const EditorCanvas = () => {
  const { dispatch, state } = useEditor();
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

  return <div>EditorCanvas</div>;
};

export default EditorCanvas;
