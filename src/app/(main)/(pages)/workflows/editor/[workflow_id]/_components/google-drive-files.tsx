"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { getGoogleListener } from "../../../_actions/workflow-connections";
import { Card, CardDescription } from "@/components/ui/card";
import { CardContainer } from "@/components/global/3d-card";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

const GoogleDriveFiles = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const requestGoogleAccess = async () => {
    setLoading(true);
    const response = await axios.get("/api/drive-activity");
    if (response) {
      toast({
        title: "Success",
        description: response.data,
      });
      setLoading(false);
      setIsListening(true);
    }
    setIsListening(false)
  };

  const onListener = async () => {
    const listener = await getGoogleListener();
    if (listener?.googleResourceId !== null) {
      setIsListening(true);
    }
  };

  useEffect(() => {
    onListener();
  }, []);

  return (
    <div className="flex flex-col gap-3 pb-6">
      {isListening ? (
        <Card className="py-3">
          <CardContainer>
            <CardDescription>Listening...</CardDescription>
          </CardContainer>
        </Card>
      ) : (
        <Button
          variant="outline"
          {...(!loading && {
            onClick: requestGoogleAccess,
          })}
        >
          {loading ? <Loader className="animate-spin" /> : "Create a listener"}
        </Button>
      )}
    </div>
  );
};

export default GoogleDriveFiles;
