import AddButtonViewModel from './AddButtonViewModel'
import AddButtonView from './AddButtonView'
import { useViewModel } from '../../../hooks'
import { OnClickCallback } from '../../../types'

export interface AddButtonProps {
    callback: OnClickCallback
    title: string
}

const AddButton = (props: AddButtonProps) => {
    const vm = useViewModel<AddButtonViewModel, AddButtonProps>(
        AddButtonViewModel,
        props
    )

    return <AddButtonView vm={vm} />
}

export default AddButton
