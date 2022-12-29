import { MouseEvent, ChangeEvent } from 'react'

export type InputEvent = ChangeEvent<HTMLInputElement>
export type ButtonEvent = MouseEvent<HTMLButtonElement, globalThis.MouseEvent>