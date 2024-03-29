"use client";

import { useAuthContext } from "@/client/auth-context";

export function CloseFormButton() {
  const { setOverlay } = useAuthContext();

  return (
    <div className="absolute right-10 top-10 text-2xl text-white">
      <button
        className="flex h-12 w-12 items-center justify-center rounded-full bg-black font-medium"
        onClick={() => {
          setOverlay("none");
        }}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
        </svg>
      </button>
    </div>
  );
}

