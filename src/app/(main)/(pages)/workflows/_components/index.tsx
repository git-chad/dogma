import React from "react";
import Workflow from "./workflow";

type Props = {};

function Workflows({}: Props) {
  return (
    <div className="relative flex flex-col gap-4 max-w-7xl">
      <section className="flex flex-col gap-4 px-4">
        <Workflow
          description="test workflow"
          id="132434j13ij"
          name="automation workflow"
          publish={false}
        />
      </section>
    </div>
  );
}

export default Workflows;
