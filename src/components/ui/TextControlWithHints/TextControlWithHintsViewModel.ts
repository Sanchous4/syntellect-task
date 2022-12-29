import { action, makeObservable, observable, runInAction } from 'mobx'
import { InputEvent } from '../../../types'
import { CountryInfoService } from '../../../models'
import { TextControlWithHintsProps } from './TextControlWithHints'
import { CountryInfo } from '../../../api/apiService'

class TextControlWithHintsViewModel extends CountryInfoService {
    @observable inputValue = ''
    @observable hints: CountryInfo[] = []

    constructor({ maxHints }: TextControlWithHintsProps) {
        super(maxHints)
        makeObservable(this)
    }

    @action async getHints() {
        if (this.inputValue === '') {
            this.hints = []
            return
        }

        const hints = await this.fetchHints(this.inputValue)

        if (hints) {
            runInAction(() => {
                this.hints = hints
            })
        }
    }

    @action setNewInput(value: string) {
        this.inputValue = value
        this.getHints()
    }

    selectOption(option: string) {
        return () => {
            this.setNewInput(option)
        }
    }

    @action.bound onInputChange(event: InputEvent) {
        this.setNewInput(event.target.value)
    }

    @action clearInputValue() {
        this.inputValue = ''
    }
}

export default TextControlWithHintsViewModel
