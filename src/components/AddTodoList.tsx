import { useState, type Dispatch, type SetStateAction } from "react"

type AddTodoListProps  = {
    setTodo: Dispatch<SetStateAction<string[]>>
}

const AddTodoList = ({setTodo}: AddTodoListProps ) => {
    const [curTask, setCurTask] = useState<string>('');
  
  //adding task in todolist
  const handleAddTask = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    //checking if there is white space added
    if(curTask.trim() === '') return;
    setTodo((prev) =>{
        return [...prev, curTask]
    })

    setCurTask('');
  }
  return (
    <>
      <form onSubmit={handleAddTask} className="flex gap-2 w-full">
        <input type="text" 
        onChange={(e)=> setCurTask(e.target.value)}
        value={curTask}
        className=" w-full bg-[#E8E8E8] text-black outline-none rounded-xl px-3 py-2"
        />
        <input type="submit" value="Add Task"
        className="bg-[#F1544C] text-white px-5 py-1 rounded-3xl"/>
      </form>
    </>
  )
}

export default AddTodoList
