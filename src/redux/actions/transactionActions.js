import { GET_TRANSACTION, GET_TRANSACTIONS, GET_TRANSACTIONS_SUCCESS } from './actionTypes'

export const getTransactions = () => {
  return {
      type: GET_TRANSACTIONS,
      
  }
}
export const getTransaction = (transaction) => {
  return {
      type: GET_TRANSACTION,
      payload: transaction
  }
}

export const getTransactionsSuccess = (transactions) => {
    return{
      type: GET_TRANSACTIONS_SUCCESS,
      payload: transactions

    }
}
