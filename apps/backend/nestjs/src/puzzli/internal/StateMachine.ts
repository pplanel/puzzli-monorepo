import { PlayerStates } from "./Domain";

export interface StateMachine<T> {
    states: Enumerator<T>
    next(evaluator: Function, current_state: T)
    getCurrentState(): T
}


export class PuzzliStateMachine implements StateMachine<PlayerStates> {
    states: Enumerator<PlayerStates>;
    current_state: PlayerStates;

    constructor(states) {
        this.states = states
        this.current_state = null;
    }

    next(evaluator: Function, next_state: PlayerStates) {
        this.current_state = evaluator(next_state)
    }

    getCurrentState(): PlayerStates {
        return this.current_state
    }
}
