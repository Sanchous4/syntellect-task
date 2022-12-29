import { ReactNode } from 'react'

import { useViewModel } from '../../hooks'
import TaskSectionView from './TaskSectionView'
import TaskSectionViewModel from './TaskSectionViewModel'

export interface TaskSectionProps {
    title: string
    description: string
    children: ReactNode
}

const TaskSection = (props: TaskSectionProps) => {
    const vm = useViewModel<TaskSectionViewModel, TaskSectionProps>(
        TaskSectionViewModel,
        props
    )

    return <TaskSectionView vm={vm}>{props.children}</TaskSectionView>
}

export default TaskSection
