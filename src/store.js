import {reactive, effect} from './reactive/reactivity.esm-bundler';

export const state = reactive({
  count: 1
})

const add = () => {
  state.count += 1
  console.log(`count: ${state.count}`)
}

export const mutations = {
  add
}
