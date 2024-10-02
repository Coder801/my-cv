import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const aboutApi = createApi({
  reducerPath: "aboutApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getAbout: builder.query({
      query: () => "about",
    }),
  }),
});

export const { useGetAboutQuery } = aboutApi;
