import { Variant, YesOrNo } from "@/db/questions"
import { Input } from "./ui/input"

type Props = {
  answer: YesOrNo
}
export const YesOrNoQuestion = ({ answer }: Props) => {
  return <Input value={3} />
}
