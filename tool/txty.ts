const template = "// This file was auto-generated.\nexport default "

export const saveTxty = async (
    path: string | URL,
    txt: string
) => 
    await Deno.writeTextFile(
        path,
        `${template}\`${txt}\``
    )
export const txtyToString = async (
    path: string | URL
) => 
    (await Deno.readTextFile(path)).substring(template.length)
