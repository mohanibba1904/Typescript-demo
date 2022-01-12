import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../hooks'

import { authentication } from './counterSlice'
import Cookies from 'js-cookie'

export default function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.auth)
  const dispatch = useAppDispatch()
  const authaccess = Cookies.get('jwt_token')

  // omit rendering logic
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(authentication())}
        >
          Increment
        </button>
        <span>{count}</span>
        
      </div>
    </div>
  )

}