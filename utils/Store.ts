import { create } from "zustand";

export interface StoreState {
    coupons: {
        balance: number
        increment: (increase: number) => void
        decrement: (decrease: number) => void
    }
    user: {
        info: {
            name: string
            roll: number | null
            email: string
            phone: number | null
            profilePic: string | null
        }
        action: {
            updateName: (name: string) => void
            updateRoll: (roll: number) => void
            updateEmail: (email: string) => void
            updatePhone: (phone: number) => void
            updateProfilePic: (profilePic: string) => void
        }
    }
}

export const useJanitorStore = create<StoreState>()((set) => ({
    coupons: {
        balance: 0,
        increment: (increase: number) => set((state) => ({
            coupons: {...state.coupons, balance: state.coupons.balance+increase}
        })),
        decrement: (decrease: number) => set((state) => ({
            coupons: {...state.coupons, balance: state.coupons.balance-decrease}
        }))
    },
    user: {
        info: {
            name: 'Vishal',
            roll: null,
            email: '',
            phone: null,
            profilePic: null
        },
        action: {
            updateName: (name) => set((state) => ({
                user: {
                    ...state.user,
                    info: {...state.user.info, name}
                }
            })),
            updateRoll: (roll) => set((state) => ({
                user: {
                    ...state.user,
                    info: {...state.user.info, roll}
                }
            })),
            updateEmail: (email) => set((state) => ({
                user: {
                    ...state.user,
                    info: {...state.user.info, email}
                }
            })),
            updatePhone: (phone) => set((state) => ({
                user: {
                    ...state.user,
                    info: {...state.user.info, phone}
                }
            })),
            updateProfilePic: (profilePic) => set((state) => ({
                user: {
                    ...state.user,
                    info: {...state.user.info, profilePic}
                }
            }))
            
        }
    }
}))

