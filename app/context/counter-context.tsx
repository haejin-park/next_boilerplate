'use client'
import React from "react";

const CounterContext = React.createContext<
    [number, React.Dispatch<React.SetStateAction<number>>] | undefined
>(undefined); //number -> 카운트 상태, React.Dispatch<React.SetStateAction<number>> -> 상태 업데이트 함수

export function CounterProvider({children}: {children: React.ReactNode}) {
    const [count, setCount] = React.useState(0)

    return (
        <CounterContext.Provider value={[count, setCount]}>
            {children}
        </CounterContext.Provider>
    );
}

export function useCounter() {
    const context = React.useContext(CounterContext); //현재 컨텍스트 값 얻기
    if(context === undefined) {
        throw new Error('useCounter must be used within a CounterProvider');
    }
    return context;
}