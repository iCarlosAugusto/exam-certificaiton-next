"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

function Pagination() {
    const path = usePathname();
    const searchParams = useSearchParams();

    const currentPage = searchParams.get("page") ?? "1";
    const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )

    return (
        <div className="mt-5 mb-5 flex justify-center items-center">
            {[1,2,3,4,5].map(el => (
                <Link href={path + '?' + createQueryString('page', el.toString())}>
                    <div className={`border-2 border-slate-200 ${currentPage === el.toString() ? 'bg-slate-200' : 'bg-white'} rounded-full items-center justify-center w-10 h-10 flex flex-row m-2 cursor-pointer`}>
                        <span>
                            {el.toString()}
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    )
}
export { Pagination }