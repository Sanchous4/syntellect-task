import { observer } from 'mobx-react-lite'

import InputLeftRightButtonsViewModel from './InputLeftRightButtonsViewModel'
import { ViewModel } from '../../types'
import { TextControl } from '../ui'

const InputLeftRightButtonsView = ({
    vm,
}: ViewModel<InputLeftRightButtonsViewModel>) => {
    return <TextControl buttons={vm.allButtons} />
}

export default observer(InputLeftRightButtonsView)
