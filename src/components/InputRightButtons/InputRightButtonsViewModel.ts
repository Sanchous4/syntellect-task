import { computed, makeObservable } from 'mobx'
import { ButtonsProps } from '../ui/TextControl'

type ButtonProps = ButtonsProps[number]
type ButtonPropsCallback = ButtonProps['callback']

class InputRightButtonsViewModel {
    constructor() {
        makeObservable(this)
    }

    get firstButtonCallback(): ButtonPropsCallback {
        return (_, model) => {
            model.clearInputValue()
        }
    }

    get secondButtonCallback(): ButtonPropsCallback {
        return (_, model) => {
            model.inputValue = 'Hello world!'
        }
    }

    @computed get allButtons(): ButtonsProps {
        return [
            {
                isRight: true,
                callback: this.firstButtonCallback,
                title: 'Clear control',
            },
            {
                isRight: true,
                callback: this.secondButtonCallback,
                title: 'Hello world!',
            },
        ]
    }
}

export default InputRightButtonsViewModel
