import { observer } from 'mobx-react-lite'

import InputRightButtonsViewModel from './InputRightButtonsViewModel'
import { ViewModel } from '../../types'
import { TextControl } from '../ui'

const InputRightButtonsView = ({
    vm,
}: ViewModel<InputRightButtonsViewModel>) => {
    return <TextControl buttons={vm.allButtons} />
}

export default observer(InputRightButtonsView)
