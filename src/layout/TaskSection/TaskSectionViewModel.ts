import { makeObservable, observable } from 'mobx'

import { TaskSectionProps } from './TaskSection'

type TaskDescriptionProps = Exclude<
    TaskSectionProps,
    TaskSectionProps['children']
>

class TaskSectionViewModel {
    @observable title = ''
    @observable description = ''

    constructor({ title, description }: TaskDescriptionProps) {
        this.title = title
        this.description = description
        makeObservable(this)
    }
}

export default TaskSectionViewModel
