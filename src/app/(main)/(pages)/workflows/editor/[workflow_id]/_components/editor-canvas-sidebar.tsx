"use client";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EditorNodeType } from "@/lib/types";
import { useNodeConnections } from "@/providers/connections-provider";
import { useEditor } from "@/providers/editor-provider";
import React from "react";

type Props = {
  nodes: EditorNodeType[];
};

const EditorCanvasSidebar = ({ nodes }: Props) => {
  const { state } = useEditor();
  const { nodeConnection } = useNodeConnections();
  //WIP connect to db
  return (
    <aside className="">
      <Tabs defaultValue="actions" className="h-screen overflow-scroll pb-24">
        <TabsList className="bg-transparent">
          <TabsTrigger value="actions">Actions</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <Separator/>
        {/* <TabsContent>

        
        </TabsContent> */}
      </Tabs>
    </aside>
  );
};

export default EditorCanvasSidebar;
