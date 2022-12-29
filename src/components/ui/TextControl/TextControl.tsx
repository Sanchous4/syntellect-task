import { ButtonEvent } from '../../../types'
import { useViewModel } from '../../../hooks'
import TextControlViewModel from './TextControlViewModel'
import TextControlView from './TextControlView'

export interface TextControlProps {
    buttons?: {
        title: string
        callback: (event: ButtonEvent, model: TextControlViewModel) => void
        isLeft?: boolean
        isRight?: boolean
    }[]
}

const TextControl = (props: TextControlProps) => {
    const vm = useViewModel<TextControlViewModel, TextControlProps>(
        TextControlViewModel,
        props
    )

    return <TextControlView vm={vm}/>
}

export default TextControl
