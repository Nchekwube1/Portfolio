import Link from "next/link";
import React from "react";
import { btnProps } from "../utils/types";

function Button({ href, text }: btnProps) {
  return (
    <Link href={href} passHref={true}>
      <button
        type="button"
        className="px-4 py-2  text-1xl text-green-400 poppins-regular border-[1px] border-green-400 rounded-sm hover:bg-green-400 hover:bg-opacity-20  text-[14px]"
      >
        {text}
      </button>
    </Link>
  );
}

export default Button;
