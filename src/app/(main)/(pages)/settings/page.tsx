import React from "react";
import ProfileForm from "@/components/forms/profile-form";
import ProfilePicture from "@/components/ui/profile-picture";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";

const SettingsPage = async () => {
  const authUser = await currentUser();
  const user = await db.user.findUnique({ where: { clerkId: authUser?.id } });
  console.log(authUser, user, "authUser and user");

  const removeProfileImage = async () => {
    "use server";
    const response = await db.user.update({
      where: { clerkId: authUser?.id },
      data: { profileImage: "" },
    });
    return response;
  };

  const uploadProfileImage = async (image: string) => {
    "use server";
    const id = authUser?.id;
    const response = await db.user.update({
      where: { clerkId: id },
      data: { profileImage: image },
    });
    return response;
  };

  const updateUserInfo = async (updatedValues: any) => {
    "use server";
    const response = await db.user.update({
      where: { clerkId: authUser?.id },
      data: { ...updatedValues },
    });
    return response;
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b font-semibold">
        Settings
      </h1>
      <div className="flex flex-col gap-10 p-6 max-w-7xl">
        <div>
          <h2 className="text-2xl font-bold">User profile</h2>
          <p className="text-white/50">Add or update your information</p>
        </div>
        <ProfilePicture
          onDelete={removeProfileImage}
          userImage={user?.profileImage || ""}
          onUpload={uploadProfileImage}
        />
        <ProfileForm user={user} onUpdate={updateUserInfo} />
      </div>
    </div>
  );
};

export default SettingsPage;
