import { useEffect, useRef } from 'react';

const useComandAndKey = (key: string) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            if (event.metaKey && event.key === key) {
                event.preventDefault();
                inputRef.current?.focus();
            }
        }
        window.addEventListener('keydown', handler);
        return () => {
            window.removeEventListener('keydown', handler);
        };
    }, [inputRef, key]);

    return inputRef;
}


export {useComandAndKey};
