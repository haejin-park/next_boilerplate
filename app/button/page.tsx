import { DefaultButton, ImportantButton, ReferenceButton } from "./various-button";

export default function Home() {
    return (
        <main className="flex flex-col p-4 space-y-2">
            <DefaultButton />
            <ImportantButton />
            <ReferenceButton />
        </main>
    )
}