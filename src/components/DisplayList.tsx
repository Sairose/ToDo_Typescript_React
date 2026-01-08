import { useState, type Dispatch, type SetStateAction } from "react"
import { FaTrash } from "react-icons/fa";

type DisplayListProps = {
  todo: string[],
  setTodo: Dispatch<SetStateAction<string[]>>
}
const DisplayList = ({ todo, setTodo }: DisplayListProps) => {
  // const [isChecked, setIsChecked] = useState<Boolean>(false);
  const [checkedTasks, setCheckedTasks] = useState<{ [key: string]: boolean }>({});


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, curValue: string) => {
    setCheckedTasks({
      ...checkedTasks,
      [curValue]: e.target.checked
    })
  }

  const handleDeleteTask = (value: string) => {
    const newTodo: string[] = todo.filter((curVal: string) => curVal != value);
    setTodo(newTodo);
  }
  return (
    <div className="pt-4">
      {
        todo.map((curValue) => {
          return <div className="flex gap-2 items-center mt-4 w-full bg-[#E8E8E8] px-4 py-3 rounded-2xl">
            <input
              type="checkbox"
              checked={checkedTasks[curValue] || false}
              onChange={(e) => handleChange(e, curValue)}
            />
            <p className="w-full">{curValue}</p>
            <FaTrash onClick={() => handleDeleteTask(curValue)}
              className="text-[#F1544D]" />
          </div>
        })
      }
    </div>
  )
}

export default DisplayList
