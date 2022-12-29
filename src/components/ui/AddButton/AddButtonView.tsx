import { observer } from 'mobx-react-lite'

import AddButtonViewModel from './AddButtonViewModel'
import { ViewModel } from '../../../types'

import styles from './AddButton.module.css'

const AddButtonView = ({ vm }: ViewModel<AddButtonViewModel>) => {
    return (
        <button onClick={vm.callback} className={styles.button_primary}>
            {vm.title}
        </button>
    )
}

export default observer(AddButtonView)
