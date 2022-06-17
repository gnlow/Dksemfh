import { dirname } from "https://deno.land/std@0.144.0/path/mod.ts"
import { txtyToString } from "./txty.ts"

const [input, output] = Deno.args

const source = await Deno.readTextFile(input)

/** https://stackoverflow.com/questions/33631041/javascript-async-await-in-replace */
async function replaceAsync(str: string, regex: RegExp, asyncFn: (...args: string[]) => Promise<string>) {
    const promises: Promise<string>[] = []
    str.replace(regex, (match, ...args: string[]) => {
        const promise = asyncFn(match, ...args as [])
        promises.push(promise)
        return ""
    })
    const data = await Promise.all(promises)
    return str.replace(regex, () => data.shift()!)
}

const result = await replaceAsync(
    source,
    /import *(.*?) *from *"(.*)"/g, 
    async (_, varName, path) =>
        `const ${varName} = ${
            await txtyToString(
                path.replace(
                    /^\./,
                    dirname(input)
                )
            )
        }`
)

await Deno.writeTextFile(output, result)