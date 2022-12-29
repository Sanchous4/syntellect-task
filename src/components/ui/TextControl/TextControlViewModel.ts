import { action, computed, makeObservable, observable } from 'mobx'
import { InputEvent, ButtonEvent } from '../../../types'

import { TextControlProps } from './TextControl'

export type ButtonsProps = Exclude<TextControlProps['buttons'], undefined>

class TextControlViewModel {
    @observable inputValue = ''
    @observable buttons: ButtonsProps = []

    constructor({ buttons }: TextControlProps) {
        this.buttons = buttons || []
        makeObservable(this)
    }

    @action.bound onInputChange(event: InputEvent) {
        this.inputValue = event.target.value
    }

    getButtonObject(button: ButtonsProps[number]) {
        return {
            callback: (event: ButtonEvent) => {
                button.callback(event, this)
            },
            title: button.title,
        }
    }

    @computed get leftButtons() {
        return this.buttons
            .filter(({ isLeft }) => isLeft)
            .map((button) => this.getButtonObject(button))
    }

    @computed get rightButtons() {
        return this.buttons
            .filter(({ isRight }) => isRight)
            .map((button) => this.getButtonObject(button))
    }

    @action clearInputValue() {
        this.inputValue = ''
    }
}

export default TextControlViewModel
