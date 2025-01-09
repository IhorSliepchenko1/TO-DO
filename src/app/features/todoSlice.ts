import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Data = {
     id: string,
     name: string,
     completed: boolean,
}

type TodoState = {
     data: Data[]
     error: string
}

const initialState: TodoState = {
     data: localStorage.getItem(`todo`) ? (JSON.parse(localStorage.getItem("todo") as string) as Data[]) : [],
     error: ''
}

const savedNewStore = (data: Data[]) => {
     localStorage.setItem(`todo`, JSON.stringify(data))
}


export const todoSlice = createSlice({
     name: 'todo',
     initialState,
     reducers: {
          addTask: (state, action: PayloadAction<Data>) => {
               const exists = state.data.some((item) => item.id === action.payload.id);
               if (exists) {
                    state.error = `Такой id уже существует`;
               } else {
                    state.data.push(action.payload);
                    savedNewStore(state.data);
               }
          },

          deleteTask: (state, action: PayloadAction<Data>) => {
               const prevData = [...state.data];
               state.error = ``
               const newArray: Data[] = prevData.filter((item) => item.id !== action.payload.id)

               if (newArray.length === prevData.length) {
                    state.error = `Задача не удалена, что то пошло не так`
               } else {
                    state.data = newArray;
                    savedNewStore(state.data);
               }
          },
          updateTask: (state, action: PayloadAction<Data>) => {
               const updatedData = state.data.map((item) =>
                    item.id === action.payload.id ? action.payload : item
               );

               const isUpdated = updatedData.some((item) => item.id === action.payload.id);
               if (!isUpdated) {
                    state.error = `Редактирование не удалось, что-то пошло не так`;
               } else {
                    state.data = updatedData;
                    savedNewStore(state.data);
               }
          },

     },
})

export const { deleteTask, addTask, updateTask } = todoSlice.actions

export default todoSlice.reducer