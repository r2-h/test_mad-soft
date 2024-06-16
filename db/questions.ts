export type Variant = {
  answer: string
  correct: boolean
}
export type YesOrNo = "Да" | "Нет"

export type Question =
  | {
      id: string
      type: "checkbox" | "radio"
      question: string
      variants: Variant[]
    }
  | {
      id: string
      type: "yesOrNo"
      question: string
      answer: YesOrNo
    }

export const questions: Question[] = [
  {
    id: "1",
    type: "radio",
    question: "Что должен знать фронтенд-разработчик? Назовите три ключевых технологии",
    variants: [
      { answer: "HTML, CSS и JavaScript", correct: true },
      { answer: "Kotlin, PHP и JavaScript", correct: false },
      { answer: "PHP, HTML и CSS", correct: false },
    ],
  },
  {
    id: "2",
    type: "checkbox",
    question: "Что такое JavaScript?",
    variants: [
      { answer: "Однопоточный язык программирования", correct: true },
      { answer: "Динамически типизируемый язык программирования", correct: false },
      { answer: "mad-soft", correct: false },
    ],
  },
  {
    id: "3",
    type: "yesOrNo",
    question: "Разработчик ждёт ответ на тестовое задание ?",
    answer: "Да",
  },
  {
    id: "4",
    type: "checkbox",
    question: "Какие из перечисленных ниже типов данных являются допустимыми в JavaScript?",
    variants: [
      { answer: "string", correct: true },
      { answer: "boolean", correct: true },
      { answer: "supabase", correct: false },
      { answer: "convex", correct: false },
    ],
  },
  {
    id: "5",
    type: "radio",
    question: "Каким будет результат '2' + '2' в JavaScript?",
    variants: [
      { answer: "mad-soft", correct: false },
      { answer: "22", correct: true },
      { answer: "array", correct: false },
      { answer: "NextJS", correct: false },
    ],
  },
]
