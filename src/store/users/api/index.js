import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { URL_BASE_FIREBASE_REALTIME_DATABASE } from "../../../constants/firebase";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_BASE_FIREBASE_REALTIME_DATABASE }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (user) => ({
        url: `/users.json`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useCreateUserMutation } = usersApi;