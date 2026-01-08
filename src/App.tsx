import { useState } from "react"
import AddTodoList from "./components/AddTodoList"
import DisplayList from "./components/DisplayList"

const App = () => {
  const [todo, setTodo] = useState<string[]>([])
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-blue-950">
      <div className="min-w-100 min-h-44 bg-[#FFFFFF] rounded-xl px-4 py-5">
        <div>
          <h2 className="text-center font-bold text-2xl mb-4">Add Task</h2>
          <AddTodoList setTodo={setTodo} />
          <DisplayList todo={todo} setTodo={setTodo} />
        </div>
      </div>
    </div>
  )
}

export default App
