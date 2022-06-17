import { saveTxty } from "./txty.ts"

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

await saveTxty("src/hangul.txty.ts", hangulGen())