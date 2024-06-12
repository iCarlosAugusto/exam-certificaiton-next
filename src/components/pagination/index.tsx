"use client";

import { Pagination } from "@mui/material";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Fragment, useCallback } from "react";

interface PaginationProps {
    totalPages: number
}

function PaginationComponent({ totalPages }: PaginationProps) {
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
            <Pagination count={totalPages} />
        </div>
    )
}
export { PaginationComponent }