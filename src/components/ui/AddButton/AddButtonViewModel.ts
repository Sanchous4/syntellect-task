import { makeObservable, observable } from 'mobx'

import { AddButtonProps } from './AddButton'

class AddButtonViewModel {
    @observable title = ''
    @observable callback: AddButtonProps['callback']

    constructor({ title, callback }: AddButtonProps) {
        this.title = title
        this.callback = callback
        makeObservable(this)
    }
}

export default AddButtonViewModel
