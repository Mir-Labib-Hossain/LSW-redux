import { baseApiSlice } from "../app/baseApiSlice";

interface IGetParams {
  filterType: string;
  filterSearch: String;
}

interface IAddPayload {
  name: string;
  type: string;
  amount: number;
}

const transactionApi = baseApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getTransaction: build.query<ITransactions, IGetParams>({
      query: ({ filterType, filterSearch }: IGetParams) => {
        let query = "";
        if (filterType) query += `type_like=${filterType}`;
        if (filterSearch) query += `&q=${filterSearch}`;
        return `/transactions?_sort=id&_order=desc&${query}`;
      },
      providesTags: ["Transaction"],
    }),

    addTransaction: build.mutation<any, IAddPayload>({
      query: (payload: IAddPayload) => {
        return {
          url: `/transactions`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["Transaction"],
    }),

    updateTransaction: build.mutation<ITransaction, ITransaction>({
      query: (payload: ITransaction) => {
        return {
          url: `/transactions/${payload.id}`,
          method: "PUT",
          body: payload,
        };
      },
      invalidatesTags: ["Transaction"],
    }),

    deleteTransaction: build.mutation<void, number>({
      query: (id: number) => {
        return {
          url: `/transactions/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Transaction"],
    }),
  }),
});

export const { useGetTransactionQuery, useAddTransactionMutation, useUpdateTransactionMutation, useDeleteTransactionMutation } = transactionApi;
