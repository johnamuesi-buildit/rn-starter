import { take } from 'redux-saga/effects';
import * as TYPES from '../../actions/actionTypes';

// import {loadTransactions} from '../index';
import {getTransactions, loadTransactions} from '../loadTransactionsSaga'
import {currentUserSaga} from '../currentUserSaga'

describe('Getting Transactions', () => {
  //  const transactions =  getTransactions()
    // it('should hit the api', () => {
    //     expect(transactions.next().value)
    //     .toEqual(call(getTransactions))
    // })

    it('on success dispatches success action', () => {
        // const takeSpy = jest.spyOn(effects, 'take', 'get');
        const gen = loadTransactions();
        let value;
        value = gen.next().value;

        // expect(value).toBe('');
        expect(value).toEqual(take(TYPES.CONFIRMATION));

        // jest.doMock('axios', () => jest.fn().mockReturnValue(Promise.resolve([])));
        const { CALL: { fn } } = gen.next().value;
        expect(fn.name).toEqual('getTransactions');

        // expect(value)
        // const transactions = getTransactions()
        // // const transactions = {transactions:[]}
        // expect(transactions.next().value)
        // .toEqual(put({type: TYPES.GET_TRANSACTIONS_SUCCESS, payload: transactions}))
    })
})

// describe("current user saga", () => {
//     test("It fetches and puts the current user's data", () => {
//         const id = "Urtyu123";
//         const user = {firstName: "Norbert"}
          // const gen = currentUserSaga(); 
//     })
// });
