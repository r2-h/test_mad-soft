"use client"
import { CheckboxQuestion } from "@/components/CheckboxQuestion"
import { RadioQuestion } from "@/components/RadioQuestion"
import { YesOrNoQuestion } from "@/components/YesOrNoQuestion"
import { Button } from "@/components/ui/button"
import { questions } from "@/db/questions"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export default function Home() {
  const time = 15
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    Number(localStorage.getItem("currentQuestionIndex")) || 0,
  )
  const [timeLeft, setTimeLeft] = useState(
    localStorage.getItem("timeLeft") === null
      ? time
      : Number(localStorage.getItem("timeLeft")),
  )
  const [isTimerActive, setIsTimerActive] = useState(
    localStorage.getItem("isTimerActive") === "true",
  )

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
  }

  const onRestart = () => {
    localStorage.removeItem("currentQuestionIndex")
    localStorage.removeItem("timeLeft")
    localStorage.removeItem("isTimerActive")
    setCurrentQuestionIndex(0)
    setTimeLeft(time)
    setIsTimerActive(false)
  }

  const currentQuestion =
    currentQuestionIndex < questions.length
      ? questions[currentQuestionIndex]
      : questions[questions.length - 1]

  const disabled = currentQuestionIndex >= questions.length || timeLeft === 0

  useEffect(() => {
    localStorage.setItem(
      "currentQuestionIndex",
      currentQuestionIndex.toString(),
    )
  }, [currentQuestionIndex])

  useEffect(() => {
    localStorage.setItem("timeLeft", timeLeft.toString())
    localStorage.setItem("isTimerActive", isTimerActive.toString())

    if (currentQuestionIndex === questions.length) {
      setIsTimerActive(false)
      setTimeLeft(0)
    } else if (isTimerActive && timeLeft > 0) {
      const timerId = setInterval(
        () => setTimeLeft((prevTime) => prevTime - 1),
        1000,
      )
      return () => clearInterval(timerId)
    } else if (timeLeft === 0) {
      setIsTimerActive(false)
    }
  }, [timeLeft, isTimerActive])

  return (
    <main className="m-20">
      <div className="flex gap-5 items-center mb-4">
        <h1 className="font-bold text-2xl ">Тестирование</h1>
        <Button
          variant="outline"
          className="min-w-16 min-h-2 border border-slate-500 flex items-center justify-center rounded-sm"
          onClick={() => setIsTimerActive(true)}
          disabled={disabled}
        >
          {isTimerActive ? timeLeft : disabled ? "тест выполнен" : "с таймером"}
        </Button>
        <Button onClick={onRestart} className="ml-auto">
          Начать заново
        </Button>
      </div>

      <div className="flex gap-1">
        {questions.map((q) => (
          <div
            key={q.id}
            className={cn(
              "w-12 h-2 bg-slate-300 mb-4",
              q.id < currentQuestion.id && "bg-slate-950",
              q.id === currentQuestion.id && "bg-red-600",
            )}
          />
        ))}
      </div>
      <h3 className="font-bold mb-5">{currentQuestion.question}</h3>
      {currentQuestion.type === "checkbox" && (
        <CheckboxQuestion
          currentQuestion={currentQuestion}
          handleNextQuestion={handleNextQuestion}
          disabled={disabled}
        />
      )}
      {currentQuestion.type === "radio" && (
        <RadioQuestion
          currentQuestion={currentQuestion}
          handleNextQuestion={handleNextQuestion}
          disabled={disabled}
        />
      )}
      {currentQuestion.type === "yesOrNo" && (
        <YesOrNoQuestion
          handleNextQuestion={handleNextQuestion}
          disabled={disabled}
        />
      )}
    </main>
  )
}
