import { CountryInfo, getCountryByName } from '../api/apiService'

export default class CountryInfoService {
    private timer: ReturnType<typeof setTimeout> | undefined
    private abortController: AbortController = new AbortController()

    constructor(private amountHints: number) {
        this.abortController.signal.addEventListener('abort', () => {
            clearTimeout(this.timer)
        })
    }

    checkName(value: string, search: string) {
        return value.toLocaleLowerCase().startsWith(search)
    }

    async fetchApiWithDebounce(searchText: string) {
        this.abortController.abort()

        const fetchData = (): Promise<CountryInfo[] | undefined> =>
            new Promise((resolve) => {
                this.timer = setTimeout(() => {
                    getCountryByName(searchText).then((res) => resolve(res))
                }, 250)
            })

        const res = await fetchData()
        return res
    }

    removeRepetitions(arr: CountryInfo[]): CountryInfo[] {
        const noRepetitionsArr = arr.reduce(
            (acc, country) => ({ ...acc, [country.name]: country }),
            {} as Record<string, CountryInfo>
        )
        
        return Object.values(noRepetitionsArr)
    }

    async fetchHints(
        searchText: string
    ): Promise<CountryInfo[] | undefined> {
        searchText = searchText.toLocaleLowerCase()
        const hintsService = await this.fetchApiWithDebounce(searchText)

        if (typeof hintsService === 'undefined') {
            return
        }

        const preparedHints = this.removeRepetitions(
            hintsService.slice(-this.amountHints)
        )

        return preparedHints
    }
}
