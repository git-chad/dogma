import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { onAddTemplate } from "@/lib/editor-utils";
import { ConnectionProviderProps } from "@/providers/connections-provider";
import React from "react";

type Props = {
  nodeConnection: ConnectionProviderProps;
  title: string;
  gFile: any;
};

const GoogleFileDetails = ({ nodeConnection, title, gFile }: Props) => {
  const isGoogleFileNotEmpty = (file: any): boolean => {
    return Object.keys(file).length > 0 && file.kind !== "";
  };
  if (!isGoogleFileNotEmpty(gFile)) return null;

  const details = ["kind", "name", "mimeType"];
  if (title === "Google Drive") {
    details.push("id");
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Card>
        <CardContent className="flex flex-wrap gap-2 p-4">
          {details.map((detail) => (
            <div
              key={detail}
              className="flex cursor-pointer gap-2 rounded-full bg-white px-3 py-1 text-neutral-500"
              onClick={() =>
                onAddTemplate(nodeConnection, title, gFile[detail])
              }
            >
                {detail}:{' '}
                <CardDescription className="text-black">
                    {gFile[detail]}
                </CardDescription>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default GoogleFileDetails;
