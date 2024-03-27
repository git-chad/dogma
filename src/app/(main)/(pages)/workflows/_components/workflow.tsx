import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  description: string;
  id: string;
  publish: boolean | null;
};

const Workflow = ({ name, description, id, publish }: Props) => {
  return (
    <Card className="flex w-full items-center justify-between">
        <CardHeader className="flex flex-col gap-4">
            <Link href={`/workflows/editor/${id}`}>
                <div className="flex flex-row gap-2 mb-4">
                    <Image src="/googleDrive.png" alt="Google Drive" height={30} width={30} className="object-contain"/>
                    <Image src="/notion.png" alt="Notion" height={30} width={30} className="object-contain"/>
                    <Image src="/discord.png" alt="Discord" height={30} width={30} className="object-contain"/>
                    <Image src="/slack.png" alt="Slack" height={30} width={30} className="object-contain"/>
                </div>
                <div>
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </div>
            </Link>
        </CardHeader>
        <div className="flex flex-col items-center p-4 gap-2">
            <Label className="text-muted-foreground">On</Label>
            <Switch/>
        </div>
    </Card>
  );
};

export default Workflow;
