import Link from "next/link";
import React from "react";
interface btnProps {
  href: string;
  text: string;
}
function BigBtn({ href, text }: btnProps) {
  return (
    <Link href={href} passHref={true}>
      <button
        type="button"
        className="px-6 py-4  text-1xl text-green-400 poppins-regular border-[1px] border-green-400 rounded-sm hover:bg-green-400 hover:bg-opacity-20  text-[14px]"
      >
        {text}
      </button>
    </Link>
  );
}

export default BigBtn;
