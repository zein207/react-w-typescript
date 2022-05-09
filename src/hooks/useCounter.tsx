import { useState } from 'react';


export const useCounter = ( initial: number  = 10) => {

    const [value, setValue] = useState<number>(initial);

    const acc = (number: number) => {

        setValue( value + number );
    };

    return {
        value,
        acc
    }
}
