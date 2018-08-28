import { take, fork, put, select } from 'redux-saga/effects'
import { loanBalanceReducer } from '../reducers'
import axios from 'axios'
import store from '../store'
import { log } from '../../../helpers'

import * as TYPES from '../actions/actionTypes'

import { setLoanBalances } from '../actions/'

loadBalanceDetails = balance => {
  console.info('BALANCE ITEM', balance)
}

export function * loanBalanceDetailSaga () {
  const balanceList = state => state.loanBalances
  const balances = yield select(balanceList)
 // log('Balances  ', balances)
}
