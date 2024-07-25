import ListComponent, { Item } from "./list-memo";

export default function Page() {
    const items: Item[] = [
        {id: 1, name: 'Item1'},
        {id: 2, name: 'Item2'},
        {id: 3, name: 'Item3'}
    ];

    return (
        <main className="flex flex-col p-4 space-y-2">
            <ListComponent items={items}/>
        </main>
    )
}

