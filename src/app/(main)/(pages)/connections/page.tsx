import { CONNECTIONS } from "@/lib/constant";
import React from "react";
import ConnectionCard from "./_components/connection-card";

type Props = {
  searchParams?: { [key: string]: string | undefined };
};

const ConnectionsPage = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <h1 className="text-3xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b font-semibold">
        Connections
      </h1>
      <div className="relative flex flex-col gap-4 max-w-7xl">
        <section className="flex flex-col gap-4 p-6 text-muted-foreground">
            <p className="w-full md:w-2/3 text-balance">Manage all your connections from this spot. We suggest checking your connections in case they need refreshing.</p>
            {CONNECTIONS.map((connection, idx) => (
                <ConnectionCard key={connection.title} title={connection.title} description={connection.description} icon={connection.image} type={connection.title} connected={'yes'}/>
            ))}
        </section>
      </div>
    </div>
  );
};

export default ConnectionsPage;
