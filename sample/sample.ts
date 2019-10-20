import Logger from "https://raw.githubusercontent.com/OdaDaisuke/deno-logger/master/mod.ts"

const sampleData = {
    a: "null",
    b: false,
    c: {
        d: "asf",
        ff: false,
        dd: {
            ok: false,
            non: true,
            okok: {
                no: true
            }
        }
    }
}

Logger.info(sampleData)
Logger.customPrefix = "AAA"
Logger.info(sampleData)
Logger.withDate = true
Logger.error(sampleData)
Logger.vardump(sampleData)
Logger.vardumpTabSize = 4
Logger.vardump(sampleData)