import * as TYPES from './actionTypes';

export const getTransactions = () => {
  return {
      type: TYPES.GET_TRANSACTIONS,
      
  }
}
export const getTransaction = (transaction) => {
  return {
      type: TYPES.GET_TRANSACTION,
      payload: transaction
  }
}

export const getTransactionsSuccess = (transactions) => {
    return{
      type: TYPES.GET_TRANSACTIONS_SUCCESS,
      payload: transactions

    }
}

export const confirmationLoadMore = () => {
  return{
      type: TYPES.CONFIRMATION,
     //TODO: payload: message
  }
}