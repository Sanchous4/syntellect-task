import InputLeftRightButtonsViewModel from './InputLeftRightButtonsViewModel'
import InputLeftRightButtonsView from './InputLeftRightButtonsView'
import { useViewModel } from '../../hooks'

const InputLeftRightButtons = () => {
    const vm = useViewModel<InputLeftRightButtonsViewModel, {}>(
        InputLeftRightButtonsViewModel,
        {}
    )

    return <InputLeftRightButtonsView vm={vm} />
}

export default InputLeftRightButtons
