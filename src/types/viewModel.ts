import { ReactNode } from 'react'

export interface ViewModel<T> {
    vm: T
    children?: ReactNode
}
