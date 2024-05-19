"use client";

import Link from "next/link";
import { useRouter, useParams, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";



function Pagination() {
    const router = useRouter();
    const params = useParams();
    const path = usePathname();
    const searchParams = useSearchParams();


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

                <div 
                    className="rounded-full items-center justify-center w-10 h-10 bg-slate-200 flex flex-row m-2 cursor-pointer"
                    >
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