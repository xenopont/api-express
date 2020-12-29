/**
 * Returns the current date and time in a human readable form:
 *     2013-02-29 15:59:59
 */
export default (): string => {
    // toISOString() returns "2013-02-29T15:59:59.001Z"
    return (new Date()).toISOString().replace('T', ' ').replace(/\..*$/, '')
}
