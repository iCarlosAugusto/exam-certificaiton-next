"use client";


import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'


function ToggleButtonQuestionTypeComponent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentQuestionType = searchParams.get('questionType') ?? "1"

    const onChangeTypeQuestion = (
        event: React.MouseEvent<HTMLElement>,
        questionType: string | null,
    ) => {
        router.replace(`?questionType=${questionType}`);
    }

    return (
        <ToggleButtonGroup
        value={currentQuestionType}
        exclusive
        onChange={onChangeTypeQuestion}

        aria-label="text alignment"
      >
        <ToggleButton value="1" aria-label="errei" >
            Errei
        </ToggleButton>
        <ToggleButton value="2" aria-label="ja respondi">
          Acertei
        </ToggleButton>
        <ToggleButton value="3" aria-label="nao respondi">
            Não respondi
        </ToggleButton>
        <ToggleButton value="4" aria-label="ja respondi">
            Já respondi
        </ToggleButton>
      </ToggleButtonGroup>
    )
}

export { ToggleButtonQuestionTypeComponent }