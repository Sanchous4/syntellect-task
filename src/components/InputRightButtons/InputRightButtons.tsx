import InputRightButtonsViewModel from './InputRightButtonsViewModel'
import InputRightButtonsView from './InputRightButtonsView'
import { useViewModel } from '../../hooks'


const InputRightButtons = () => {
    const vm = useViewModel<InputRightButtonsViewModel, {}>(
        InputRightButtonsViewModel,
        {}
    )

    return <InputRightButtonsView vm={vm} />
}

export default InputRightButtons