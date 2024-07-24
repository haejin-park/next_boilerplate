'use client'

import { useCounter } from "./counter-context";

export const ContextClickCounter = () => {
    const [count, setCount] = useCounter();
    return (
        <button 
            onClick={() => setCount(count + 1)}
            className="px-3 py-1 text-sm font-medium text-gray-100 bg-gray-700 rounded-lg tablur-nums hover:bg-gray-500 hover:text-white"    
        >
            {count}번 클릭된 횟수에 더하기
        </button>
    );
};

export const ContextClickCounterMinus = () => {
    const [count, setCount] = useCounter();

    return (
        <button 
        onClick={() => setCount(count - 1)}
        className="px-3 py-1 text-sm font-medium text-gray-100 bg-gray-700 rounded-lg tablur-nums hover:bg-gray-500 hover:text-balck"    
        >
           다른 버튼에서 {count}번 클릭된 횟수에 빼기
        </button>
    );
};

export const CounterStatus = () => {
    const [count] = useCounter();
    return(
        <div className="text-xl font-bold text-black span">
            <span className="tabular-nums">{count}</span> 번 클릭됨
        </div>
    );
};