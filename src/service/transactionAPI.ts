import { baseApiSlice } from "../app/baseApiSlice";
interface IAddPayload {
  name: string;
  type: string;
  amount: number;
}
interface IDeleteParams {
  id: number;
}

const transactionApi = baseApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getTransaction: build.query<ITransactions, void>({
      query: () => "/transactions",
    }),

    addTransaction: build.mutation<any, IAddPayload>({
      query: (payload: IAddPayload) => {
        return {
          url: `/transactions`,
          method: "POST",
          body: payload,
        };
      },
    }),

    updateTransaction: build.mutation<ITransaction, ITransaction>({
      query: (payload: ITransaction) => {
        return {
          url: `/transactions/${payload.id}`,
          method: "PUT",
          body: payload,
        };
      },
    }),

    deleteTransaction: build.mutation<void, IDeleteParams>({
      query: ({ id }: IDeleteParams) => {
        return {
          url: `/transactions/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const { useGetTransactionQuery, useAddTransactionMutation } = transactionApi;
