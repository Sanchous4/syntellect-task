import { observer } from 'mobx-react-lite'

import { ViewModel } from '../../../types'
import { AddButton } from '../AddButton'
import TextControlViewModel from './TextControlViewModel'

import styles from './TextControl.module.css'

const TextControlView = ({ vm }: ViewModel<TextControlViewModel>) => {
    return (
        <div className={styles.control__wrapper}>
            {vm.leftButtons.map((buttonProps, index) => (
                <AddButton key={index} {...buttonProps} />
            ))}
            <input
                type="text"
                onChange={vm.onInputChange}
                value={vm.inputValue}
                className={styles.input}
            />
            {vm.rightButtons.map((buttonProps, index) => (
                <AddButton key={index} {...buttonProps} />
            ))}
        </div>
    )
}

export default observer(TextControlView)
