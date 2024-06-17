import { Question } from "@/db/questions"
import { Checkbox } from "./ui/checkbox"

import { Button } from "./ui/button"
import { useState } from "react"
import { CheckedState } from "@radix-ui/react-checkbox"

type Props = {
  currentQuestion: Question
  handleNextQuestion: () => void
  disabled: boolean
}
export const CheckboxQuestion = ({ currentQuestion, handleNextQuestion, disabled }: Props) => {
  const [answer, setAnswer] = useState<string[]>([])

  const handleCheckedChange = (checked: CheckedState, variant: string) => {
    setAnswer((prev) => (checked ? [...prev, variant] : prev.filter((item) => item !== variant)))
  }

  return (
    <>
      <div className="flex flex-col justify-center gap-y-3 items-start">
        {currentQuestion.variants.map((variant) => (
          <li className="items-top flex space-x-2" key={variant.answer}>
            <Checkbox
              id={variant.answer}
              disabled={disabled}
              onCheckedChange={(checked) => handleCheckedChange(checked, variant.answer)}
            />
            <label
              htmlFor={variant.answer}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
            >
              {variant.answer}
            </label>
          </li>
        ))}
      </div>
      <Button
        onClick={handleNextQuestion}
        className="bg-red-600 h-8 px-10 hover:bg-destructive/90 mt-5"
        disabled={disabled}
      >
        Ответить
      </Button>
    </>
  )
}
