import {useReducer, useEffect, useState} from "react";
import {effect, readonly} from './reactive/reactivity.esm-bundler'

export const useStore = ({state, mutations}) => {
  const [readonlyState, setReadonlyState] = useState({...state})

  effect(() => {
    const keys = Object.keys(state)
    for (let k of keys) {
      if (readonlyState[k] !== state[k]) {
        setReadonlyState({
          ...state
        })
        break; // 只要发现一个不同就可以了，因为已经整个替换了
      }
    }
  })

  return {
    state: readonlyState,
    mutations
  };
}
