import { Question } from "@/db/questions"
import { Button } from "./ui/button"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { useState } from "react"

type Props = {
  currentQuestion: Question
  handleNextQuestion: () => void
  disabled: boolean
}
export const RadioQuestion = ({ currentQuestion, handleNextQuestion, disabled }: Props) => {
  const [answer, setAnswer] = useState("")

  return (
    <>
      <RadioGroup
        disabled={disabled}
        className="flex flex-col justify-center gap-y-3 items-start"
        onValueChange={setAnswer}
      >
        {currentQuestion.variants.map((variant) => (
          <div className="items-top flex space-x-2" key={variant.answer}>
            <RadioGroupItem value={variant.answer} id={variant.answer} />
            <label
              htmlFor={variant.answer}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
            >
              {variant.answer}
            </label>
          </div>
        ))}
      </RadioGroup>
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
