"use client";

import CreateTask from "@/components/TaskCreate";
export default function Page({ params }) {
  return (
    <>
      <CreateTask params={params} />
    </>
  );
}
