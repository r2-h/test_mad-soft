import { Variant } from "@/db/questions"
import { Checkbox } from "./ui/checkbox"

type Props = {
  variant: Variant
}
export const CheckboxQuestion = ({ variant }: Props) => {
    console.log(variant, 1)
  return (
    <li className="items-top flex space-x-2">
      <Checkbox id={variant.answer} />
      <label
        htmlFor={variant.answer}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
      >
        {variant.answer}
      </label>
    </li>
  )
}
