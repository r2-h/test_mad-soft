export type Variant = {
  answer: string
  correct: boolean
}

export type Question = {
  id: string
  type: "checkbox" | "radio" | "yesOrNo"
  question: string
  variants: Variant[]
}

export const questions: Question[] = [
  {
    id: "1",
    type: "checkbox",
    question: "Что должен знать фронтенд-разработчик? Назовите три ключевых технологии",
    variants: [
      { answer: "HTML, CSS и JavaScript", correct: true },
      { answer: "Kotlin, PHP и JavaScript", correct: false },
      { answer: "PHP, HTML и CSS", correct: false },
    ],
  },
  {
    id: "2",
    type: "radio",
    question: "sfsdfsdadadad asdasdas asda",
    variants: [
      { answer: "qweqwe", correct: true },
      { answer: "sdffsd", correct: false },
      { answer: "sdfsd", correct: false },
    ],
  },
  {
    id: "3",
    type: "yesOrNo",
    question: "AAAAAA dasdas da",
    variants: [
      { answer: "sdfsfgd", correct: false },
      { answer: "sdas2fsd", correct: false },
      { answer: "rrrrrr", correct: true },
    ],
  },
  {
    id: "4",
    type: "checkbox",
    question: "AAAAAA dasdas da",
    variants: [
      { answer: "sdfdsd", correct: false },
      { answer: "sdfsd", correct: false },
      { answer: "rrrrrr", correct: true },
    ],
  },
  {
    id: "5",
    type: "checkbox",
    question: "AAAAAA dasdas da",
    variants: [
      { answer: "sdfassd", correct: false },
      { answer: "sdfsd", correct: false },
      { answer: "rrrrrr", correct: true },
    ],
  },
]
