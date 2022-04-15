import Link from "next/link";
import React from "react";
interface btnProps {
  href: string;
  text: string;
}
function Button({ href, text }: btnProps) {
  return (
    <Link href={href} passHref={true}>
      <button
        type="button"
        className="px-4 py-2  text-1xl text-gray-100 poppins-regular border-[1px] border-green-400 rounded-sm hover:bg-green-100  hover:text-black text-[14px]"
      >
        {text}
      </button>
    </Link>
  );
}

export default Button;
