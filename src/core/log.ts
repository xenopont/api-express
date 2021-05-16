import now from './now'

const out = (prefix: string, message: string, ...objects: unknown[]): void => {
    let args: unknown[] = []
    // always show date and time
    args.push(now() + ' -')
    // prefix, if given
    if (prefix) {
        args.push(prefix + ':')
    }
    // message
    args.push(message)
    // the rest parameters
    if (objects.length > 0) {
        args = [ ...args, ...objects ]
    }
    console.log(...args) // eslint-disable-line no-console
}

export default {
    info: (message: string, ...objects: unknown[]): void => out('Info', message, ...objects),
    warn: (message: string, ...objects: unknown[]): void => out('Warn', message, ...objects),
    error: (message: string, ...objects: unknown[]): void => out('Error', message, ...objects),
}
