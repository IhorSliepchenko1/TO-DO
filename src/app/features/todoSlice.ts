import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { T } from '../../context/contextProviderTypes'

type Data = {
     id: string
     title: string
     completed: boolean
}

type TodoState = {
     data: Data[]
     error: string
}

const savedNewStore = (data: Data[]) => {
     localStorage.setItem(`todo`, JSON.stringify(data))
}

const initialState: TodoState = {
     data: localStorage.getItem(`todo`) ? (JSON.parse(localStorage.getItem("todo") as string) as Data[]) : [],
     error: ''
}

export const todoSlice = createSlice({
     name: 'todo',
     initialState,
     reducers: {
          addTask: (state, action: PayloadAction<{ task: Data; translations: T }>) => {
               const { task, translations } = action.payload
               state.error = ``
               const exists = state.data.some((item) => item.id === task.id)

               if (exists) {
                    state.error = translations.errorAdd
               } else {
                    state.data.push(task)
                    savedNewStore(state.data)
               }
          },
          deleteTask: (state, action: PayloadAction<{ id: string; translations: T }>) => {
               const { id, translations } = action.payload
               state.error = ``
               const prevData = [...state.data]
               const newArray: Data[] = prevData.filter((item) => item.id !== id)

               if (newArray.length === prevData.length) {
                    state.error = translations.errorDelete
               } else {
                    state.data = newArray
                    savedNewStore(state.data)
               }
          },
          updateTask: (state, action: PayloadAction<{ task: Data; translations: T }>) => {
               const { task, translations } = action.payload
               state.error = ``
               const updatedData = state.data.map((item) =>
                    item.id === task.id ? task : item
               )

               const isUpdated = updatedData.some((item) => item.id === task.id)

               if (!isUpdated) {
                    state.error = translations.errorUpdate
               } else {
                    state.data = updatedData
                    savedNewStore(state.data)
               }
          },
     },
})

export const { deleteTask, addTask, updateTask } = todoSlice.actions

export default todoSlice.reducer
