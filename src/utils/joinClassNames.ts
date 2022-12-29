type className = string | undefined

export default function cx(...args: className[]) {
    return args
        .filter((arg) => arg)
        .map((arg) => arg?.toString())
        .join(' ')
}
