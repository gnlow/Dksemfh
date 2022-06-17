export default async (
    path: string | URL,
    txt: string
) => 
    await Deno.writeTextFile(
        path,
        `// This file was auto-generated.\nexport default \`${txt}\``
    )