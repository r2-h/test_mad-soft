import { cn } from "@/lib/utils"
import { ChangeEvent, useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

type Props = {
  handleNextQuestion: () => void
  disabled: boolean
}
export const YesOrNoQuestion = ({ handleNextQuestion, disabled }: Props) => {
  const [answer, setAnswer] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setAnswer(value)
    if (value.toLowerCase() !== "да" && value.toLowerCase() !== "нет") {
      setError("ответ должен быть в формате 'да' или 'нет'")
    } else {
      setError("")
    }
  }

  return (
    <>
      <Input
        className="w-20 border-gray-500 focus:border-none mb-1"
        value={answer}
        onChange={handleChange}
        disabled={disabled}
      />
      <p className={cn("text-red-600 text-xs invisible", error && "visible")}>
        {error ? error : "-"}
      </p>
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
