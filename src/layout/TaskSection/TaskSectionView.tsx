import { observer } from 'mobx-react-lite'

import { ViewModel } from '../../types'
import TaskSectionViewModel from './TaskSectionViewModel'

import styles from './TaskSection.module.css'

const TaskSection = ({ vm, children }: ViewModel<TaskSectionViewModel>) => {
    return (
        <article className={styles.article}>
            <h1>{vm.title}</h1>
            <pre className={styles.pre}>{vm.description}</pre>
            {children}
        </article>
    )
}

export default observer(TaskSection)
