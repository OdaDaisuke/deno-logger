# Deno logger

This is logger for deno.

## Usage

```typescript
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

```

Output is 

```shell
[INFO]: [object Object]
[AAA][INFO]: [object Object]
Sun Oct 20 2019 15:58:21 GMT+0900 (JST) [AAA][ERROR]: [object Object]
{
  a: null,
  b: false,
  c: {
  ...
  }
}
```

### With custom prefix

```typescript
Logger.customPrefix = "CUSTOM_PREFIX"
```

### Change vardump tabsize

Default tab size is 2.

```typescript
Logger.vardumpTabsize = 4
```

### Logging with date

```typescript
Logger.withDate = true
```

## Sample

```shell
$ cd sample
$ deno -A sample.ts
```