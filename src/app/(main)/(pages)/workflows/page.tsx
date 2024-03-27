import React from "react";
import WorkflowButton from "./_components/workflow-button";
import Workflows from "./_components";

const WorkflowsPage = () => {
  return (
    <div className="relative flex flex-col gap-4">
      <h1 className="text-3xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center justify-between border-b font-semibold">
        Workflows
        <WorkflowButton/>
      </h1>
      <Workflows/>
      <Workflows/>
      <Workflows/>
    </div>
  );
};

export default WorkflowsPage;
