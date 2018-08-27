import {call, put} from 'redux-saga/effects';
import * as TYPES from '../../actions/actionTypes';

import {loadTransactions} from '../index';
import {getTransactions} from '../loadTransactionsSaga'

describe('Getting Transactions', () => {
    const transactions =  getTransactions()
    it('should hit the api', () => {
        expect(transactions.next().value)
        .toEqual(call(getTransactions))
    })

    it('on success dispatches success action', () => {
        const transactions = {transactions:[]}
        expect(transactions.next(transaction).value)
        .toEqual(put({type: TYPES.GET_TRANSACTIONS_SUCCESS, payload: transactions}))
    })
})
