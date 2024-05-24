"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Fragment, useCallback } from "react";

interface PaginationProps {
    totalPages: number
}

function Pagination({ totalPages }: PaginationProps) {
    const path = usePathname();
    const searchParams = useSearchParams();

    const currentPage = Number(searchParams.get("page") ?? "1");
    const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
    )

    return (
        <div className="mt-5 mb-5 flex justify-center items-center flex-row">
            {Array.from({ length: totalPages }, (_, i) => i +1).map(el => {
                return (
                    <Fragment>
                        <div>
                            <Link href={path + '?' + createQueryString('page', el.toString())} key={el}>
                                <div className={`border-2 border-slate-200 ${currentPage === el ? 'bg-slate-200' : 'bg-white'} rounded-full items-center justify-center w-10 h-10 flex flex-row m-2 cursor-pointer`}>
                                    <span>{el}</span>
                                </div>
                            </Link>
                        </div>
                    </Fragment>
                )
            })}
        </div>
    )
}
export { Pagination }