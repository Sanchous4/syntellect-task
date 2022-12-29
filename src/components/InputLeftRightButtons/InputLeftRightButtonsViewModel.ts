import { computed, makeObservable } from 'mobx'
import { ButtonsProps } from '../ui/TextControl'

type ButtonProps = ButtonsProps[number]
type ButtonPropsCallback = ButtonProps['callback']

class InputLeftRightButtonsViewModel {
    constructor() {
        makeObservable(this)
    }

    get firstButtonCallback(): ButtonPropsCallback {
        return (_, model) => {
            alert(model.inputValue)
        }
    }

    get secondButtonCallback(): ButtonPropsCallback {
        return (_, { inputValue }) => {
            const value = inputValue.trim()

            if (value.match(`^-{0,1}[0-9]{1,}?(.[0-9])*$`)) {
                alert(inputValue)
            }
        }
    }

    @computed get allButtons(): ButtonsProps {
        return [
            {
                isRight: true,
                callback: this.firstButtonCallback,
                title: 'Alert',
            },
            {
                isLeft: true,
                callback: this.secondButtonCallback,
                title: 'Check number',
            },
        ]
    }
}

export default InputLeftRightButtonsViewModel
