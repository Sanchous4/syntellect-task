import { useRef } from 'react'

export default function useViewModel<Model, Props>(
    ViewModelConstructor: new (props: Props) => Model,
    props: Props
) {
    const viewModelRef = useRef(new ViewModelConstructor(props))

    return viewModelRef.current
}
