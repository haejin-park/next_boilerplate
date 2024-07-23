import BasicList from "./basic-list-server";
import ItemList from "./item-list-client";

export default function Home() {
    const items = ['HTML', 'JS', 'CSS'];
    return (
        <main className="flex flex-col p-4">
            <BasicList />
            <ItemList initialItems={items} />
        </main>
    )
}