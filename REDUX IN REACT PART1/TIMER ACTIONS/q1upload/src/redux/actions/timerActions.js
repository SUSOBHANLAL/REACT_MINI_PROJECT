// define action constants here
export const START_TIMER = "START Timer"
export const PAUSE_TIMER = "PAUSE Timer"
export const RESET_TIMER = "RESET Timer"
export const INCREMENT_TIMER = "Increment TIMER"

// define action creators here

export const startTimer = (text)=>({text, type: START_TIMER})
export const pauseTimer = ()=>({type: PAUSE_TIMER})
export const incrementTimer = ()=>({type: INCREMENT_TIMER})
export const resetTimer = ()=>({type: RESET_TIMER})
