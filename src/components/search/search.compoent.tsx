"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "../button";
import { Chip } from "../chip";
import Link from "next/link";

function SearchComponent() {

    const searchParams = useSearchParams();
    const questionType = searchParams.get("questionType") ?? "1";

    return (
        <div className="flex flex-col items-start px-5 lg:px-0">
            <div className="flex flex-col lg:flex-row w-full">
                <div>
                    <span>Questões que</span>
                    <div>
                        <Link href={`?questionType=${"1"}`} scroll={false}>
                            <Chip label="Não resolvi" className="mr-2" onClick={() => console.log("click!")}/>
                        </Link>
                        <Link href={`?questionType=${"2"}`} scroll={false}>
                            <Chip label="Errei" className="mr-2" onClick={() => console.log("click!")}/>
                        </Link>
                        <Link href={`?questionType=${"3"}`} scroll={false}>
                            <Chip label="Acertei" className="mr-2" onClick={() => console.log("click!")}/>
                        </Link>
                    </div>
                </div>
            </div>
            <Button
                text="Buscar"
                onClick={() => console.log("buscar!")}
                className="mt-9"
            />
        </div>
    )
}

export { SearchComponent }