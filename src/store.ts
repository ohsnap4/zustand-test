import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface BearState {
    bears: number
    increase: (value: number) => void
    decrease: (value: number) => void
    zero: () => void
}

export const useStore = create<BearState>()(
    devtools(
        persist(
            (set) => ({
                bears: 0,
                increase: (value) => set((state) => ({ bears: state.bears + value })),
                decrease: (value) => set((state) => ({ bears: state.bears - value })),
                zero: () => set({ bears: 0 })
            })
        )
    )
)