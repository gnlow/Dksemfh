import saveTxtAsTs from "./saveTxtAsTs.ts"

function hangulGen() {
    const first = "가".charCodeAt(0)
    return Array(11172)
        .fill(undefined)
        .map(
            (_, i) => 
                String.fromCharCode(first + i)
        )
        .join("")
}

await saveTxtAsTs("src/hangul.txt.ts", hangulGen())