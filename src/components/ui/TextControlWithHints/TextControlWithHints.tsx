import { useViewModel } from '../../../hooks'
import TextControlWithHintsViewModel from './TextControlWithHintsViewModel'
import TextControlWithHintsView from './TextControlWithHintsView'

export interface TextControlWithHintsProps {
    maxHints: number
}

const TextControlWithHints = (props: TextControlWithHintsProps) => {
    const vm = useViewModel<
        TextControlWithHintsViewModel,
        TextControlWithHintsProps
    >(TextControlWithHintsViewModel, props)

    return <TextControlWithHintsView vm={vm} />
}

export default TextControlWithHints
