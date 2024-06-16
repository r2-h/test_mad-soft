"use client"
import { CheckboxQuestion } from "@/components/CheckboxQuestion"
import { YesOrNoQuestion } from "@/components/YesOrNoQuestion"
import { Button } from "@/components/ui/button"
import { questions } from "@/db/questions"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(3)
  const [isTimerActive, setIsTimerActive] = useState(false)

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex))
    setTimeLeft(10)
  }

  const currentQuestion = questions[currentQuestionIndex]

  useEffect(() => {
    if (isTimerActive) {
      if (timeLeft > 0) {
        const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
        return () => clearTimeout(timerId)
      } else {
        setCurrentQuestionIndex((prevIndex) => {
          if (prevIndex === questions.length - 1) {
            setIsTimerActive(false)
          } else {
            setTimeLeft(3)
          }
          return prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex
        })
      }
    }
  }, [timeLeft, isTimerActive])

  return (
    <main className="mt-20 ml-20 ">
      <div className="flex gap-5 items-center mb-4">
        <h1 className="font-bold text-2xl ">Тестирование</h1>
        <Button
          variant="outline"
          className="min-w-16 min-h-2 border border-slate-500 flex items-center justify-center rounded-sm"
          onClick={() => setIsTimerActive(true)}
        >
          {isTimerActive ? timeLeft : "отвечать с таймером"}
        </Button>
      </div>

      <div className="flex gap-1">
        {questions.map((q) => (
          <div
            key={q.id}
            className={cn(
              "w-12 h-2 bg-slate-300 mb-4",
              q.id < currentQuestion.id && "bg-slate-950",
              q.id === currentQuestion.id && "bg-red-600"
            )}
          />
        ))}
      </div>
      <h3 className="font-bold mb-5">{currentQuestion.question}</h3>
      <ul className="flex flex-col justify-center gap-y-3 items-start">
        {currentQuestion.type === "checkbox" ||
          (currentQuestion.type === "radio" &&
            currentQuestion.variants.map((variant) => (
              <CheckboxQuestion variant={variant} key={variant.answer} />
            )))}
        {currentQuestion.type === "yesOrNo" && <YesOrNoQuestion answer={currentQuestion.answer} />}
        <Button onClick={handleNextQuestion} className="bg-red-600 h-8 px-10 hover:bg-destructive/90 mt-2">
          Ответить
        </Button>
      </ul>
    </main>
  )
}
