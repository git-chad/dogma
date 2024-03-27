"use client";
import React from "react";
import UploadCareButton from "./uploadcare-button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "./button";
import { X } from "lucide-react";

type Props = {
  userImage: string | null;
  onDelete?: any;
  onUpload: (e: string) => any;
};

const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {
  const router = useRouter();

  const onRemoveProfileImage = async () => {
    const res = await onDelete();
    if (res) router.refresh();
  };

  return (
    <div className="flex flex-col w-2/3">
      <p className="text-md text-zinc-50 font-semibold">Profile picture</p>
      <div className="flex flex-col items-center justify-center">
        {userImage ? (
          <>
            <div className="relative size-48 h-full">
              <Image
                src={userImage}
                alt="User Image"
                width={1280}
                height={0}
                className="object-cover rounded"
              />
            </div>
            <Button
              onClick={onRemoveProfileImage}
              className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
            >
              <X /> Remove profile picture
            </Button>
          </>
        ) : (
          <UploadCareButton onUpload={onUpload} />
        )}
      </div>
    </div>
  );
};

export default ProfilePicture;
