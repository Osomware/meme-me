import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { IUser } from '~/utils/interface/User'

type State = {
  isAuthenticated: boolean
  user: IUser | null
}

type Action = {
  setUser: (user: IUser | null) => void
  clearUser: () => void
}

export const useStore = create<State & Action>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      setUser: (user: IUser | null) => {
        set((state) => ({ isAuthenticated: (state.isAuthenticated = true), user }))
      },
      clearUser: () => {
        set({ isAuthenticated: false, user: null })
      }
    }),
    {
      name: 'mm-user-info',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
