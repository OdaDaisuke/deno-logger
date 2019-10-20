export interface IPrefix {
    log: string
    info: string
    error: string
    warn: string
}

export default class Logger {

    /**
     * Vardump tabsize. Default size is 2.
     */
    public static vardumpTabSize: number = 2

    /**
     * Print log with datetime
     */
    public static withDate: boolean = false

    /**
     * Prefix of log
     */
    public static prefixes: IPrefix = {
        log: "LOG",
        info: "INFO",
        error: "ERROR",
        warn: "WARN"
    }

    public static customPrefix: string | null = null

    private static space = " "

    public static log (data: any) {
        console.info(this.buildOutputStr(this.prefixes.log, data))
    }

    public static info (data: any) {
        console.info(this.buildOutputStr(this.prefixes.info, data))
    }

    public static error (data: any) {
        console.error(this.buildOutputStr(this.prefixes.error, data))
    }

    public static warn (data: any) {
        console.warn(this.buildOutputStr(this.prefixes.warn, data))
    }

    private static buildOutputStr(defaultPrefix: string, data: any) {
        const d = new Date()
        let str = `[${defaultPrefix}]: ${data}`
        if (!this.customPrefix) {
            if (!this.withDate) {
                return str
            }
            return `${d} ${str}`
        }
        if (!this.withDate) {
            return `[${this.customPrefix}]${str}`
        }
        return `${d} [${this.customPrefix}]${str}`
    }

    public static vardump (data: any) {
        if (!data) {
            this.error(`arg is empty: ${data}`)
            return
        }
        let layer = 1
        const dump = (curData: any, layer: number): string => {
            let rs = ""
            const entries = Object.entries(curData)
            const entryLen = entries.length
            entries.map((entry, idx) => {
                const tab = this.space.repeat(layer * this.vardumpTabSize)
                if (typeof entry[1] === "object") {
                    const val = dump(entry[1], layer + 1)
                    rs += `${tab}${entry[0]}: ${val}\n${tab}}`
                    return
                }
                if (layer > 1) {
                    if (idx === 0) {
                        rs += "{\n"
                    }
                    rs += `${tab}${entry[0]}: ${entry[1]}`
                    if (idx + 1 === entryLen) {
                        rs += ""
                    } else {
                        rs += ",\n"
                    }
                } else {
                    rs += `${tab}${entry[0]}: ${entry[1]},\n`
                }
            })
            return rs
        }
        console.log("{")
        const str = dump(data, layer)
        console.log(str)
        console.log("}")
    }
}
