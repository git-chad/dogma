"use server";
import { db } from "@/lib/db";

export const onCreateNodeEdges = async (
  flowId: string,
  nodes: string,
  edges: string,
  flowPath: string
) => {
  const flow = await db.workflows.update({
    where: {
      id: flowId,
    },
    data: {
      nodes,
      edges,
      flowPath: flowPath,
    },
  });

  if (flow) return { message: "Flow saved" };
};

export const onFlowPublish = async (workFlowId: string, state: boolean) => {
  console.log(state);
  const published = await db.workflows.update({
    where: {
      id: workFlowId,
    },
    data: {
      publish: state,
    },
  })
  if (published.publish) return "Workflow published";
  return "Workflow unpublished"
}