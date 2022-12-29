import { TaskSection } from './layout'
import {
    InputLeftRightButtons,
    InputRightButtons,
    InputsWithHints,
} from './components'

function App() {
    return (
        <div>
            <TaskSection
                title={'Контрол с 2 кнопками справа'}
                description={`При нажатии на первую кнопку очищается содерживое в контроле;\nПри нажатии на вторую кнопку текст в контроле меняется на 'Hello world!';`}
            >
                <InputRightButtons />
            </TaskSection>
            <TaskSection
                title={'Контрол с 1 кнопкой справа и 1 кнопкой слева'}
                description={`При нажатии на кнопку справа вызывается alert с текстом в контроле;\nПри нажатии на кнопку слева проверяем, что в контроле введено число и если это так, то выводим число через alert;`}
            >
                <InputLeftRightButtons />
            </TaskSection>
            <TaskSection
                title={'Контрол-автокомплит'}
                description={`Максимальное кол-во подсказок - 3\nМаксимальное кол-во подсказок - 10`}
            >
                <InputsWithHints />
            </TaskSection>
        </div>
    )
}

export default App
