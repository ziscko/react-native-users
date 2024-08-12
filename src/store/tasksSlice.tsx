import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface Task {
  id: number
  title: string
  completed: boolean
}

interface TasksState {
  tasks: Task[]
}

const initialState: TasksState = {
  tasks: [],
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{title: string}>) => {
      const newTask: Task = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      }
      state.tasks.push(newTask)
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    },
    toggleTaskCompletion: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find(t => t.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    },
  },
})

export const {addTask, removeTask, toggleTaskCompletion} = tasksSlice.actions
export default tasksSlice.reducer
