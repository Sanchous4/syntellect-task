import { TextControlWithHints } from '../ui/TextControlWithHints'

import styles from './InputsWithHints.module.css'

const InputsWithHints = () => {
    return (
        <div className={styles.wrapper}>
            <TextControlWithHints maxHints={3} />
            <TextControlWithHints maxHints={10} />
        </div>
    )
}

export default InputsWithHints
