import { observer } from 'mobx-react-lite'

import { ViewModel } from '../../../types'
import TextControlWithHintsViewModel from './TextControlWithHintsViewModel'

import styles from './TextControlWithHints.module.css'
import { cx } from '../../../utils'

const TextControlWithHintsView = ({
    vm,
}: ViewModel<TextControlWithHintsViewModel>) => {
    return (
        <div className={styles.control__wrapper}>
            <input
                type="text"
                onChange={vm.onInputChange}
                value={vm.inputValue}
                className={cx(
                    styles.input,
                    vm.hints.length ? styles['input_with_hints'] : undefined
                )}
            />
            {vm.hints.length ? (
                <ul className={styles.dropdown__list}>
                    {vm.hints.map((hint) => (
                        <li key={hint.name} onClick={vm.selectOption(hint.name)}>
                            <div>Name: {hint.name}</div>
                            <div>FullName: {hint.fullName}</div>
                            <div><img src={hint.flag} alt={hint.name} /></div>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    )
}

export default observer(TextControlWithHintsView)
