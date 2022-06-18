/** @noSelfInFile **/

// "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ"
const 초성 = "rRseEfaqQtTdwWczxvg"

// "ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ"
const 중성 = "k o i O j p u P h hk ho hl y n nj np nl b m ml l".split(" ")

// "ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ"
const 종성 = " r R rt s sw sg e f fr fa fq ft fx fv fg a q qt t T d w c z x v g".split(" ")

function charCodeAt(char: string) {
    const [a, b, c] = string.byte(char, 1, 3)
    print(a, b, c)
    return ((a - 224) << 12) + ((b - 128) << 6) + c - 128 - 44032
}

function dksemfh(text: string) {
    let result = ""
    for (const [char] of string.gmatch(text, "...")) {
        let code = charCodeAt(char)
        let 초, 중, 종
        code -= (초 = Math.floor(code / 588)) * 588
        code -= (중 = Math.floor(code / 28)) * 28
        종 = code
        result += 초성[초] + 중성[중] + 종성[종]
    }
    return result
}
print(dksemfh("각"))