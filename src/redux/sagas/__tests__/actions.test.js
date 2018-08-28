import { take } from 'redux-saga/effects';
import * as TYPES from '../../actions/actionTypes';

import {
    getTransactions,
    loadTransactions,
    fetchLoanBalanceSaga
} from '../'

describe('Getting Transactions', () => {

    it('on success dispatches success action', () => {
        const gen = loadTransactions();
        let value;
        value = gen.next().value;

        expect(value).toEqual(take(TYPES.CONFIRMATION));

        const { CALL: { fn } } = gen.next().value;
        expect(fn.name).toEqual('getTransactions');

    })
})

