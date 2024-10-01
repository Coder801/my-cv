import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CommandType = {
  id: number;
  value: string;
  result?: "";
};

export interface CommandLineState {
  status: "idle" | "pending" | "succeeded" | "failed";
  commands: CommandType[];
}

const initialState: CommandLineState = {
  status: "idle",
  commands: [],
};

export const typeCommand = createAsyncThunk(
  "commandLine/fetchResult",
  async ({ id, value }: CommandType) =>
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((response) => ({
        id,
        value,
        result: response.data.body,
      }))
);

export const commandLineSlice = createSlice({
  name: "commandLine",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(typeCommand.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        typeCommand.fulfilled,
        (state, action: PayloadAction<CommandType>) => {
          state.status = "succeeded";
          state.commands.push({
            id: action.payload.id,
            value: action.payload.value,
            result: action.payload.result,
          });
        }
      );
  },
});

// export const { typeCommand } = commandLineSlice.actions;

export default commandLineSlice.reducer;
