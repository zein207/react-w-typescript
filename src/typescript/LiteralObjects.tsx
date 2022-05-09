
interface Person {
    fullName: string;
    age: number;
    address: Address 
}

interface Address {
    country: string;
    city: string;
};

export const LiteralObjects = () => {

    const person: Person = {
        fullName: 'David',
        age: 23,
        address: {
            country: 'Mexico',
            city: 'Mexico City'
        }
    }

    return (
        <>
            <h3>Literal Objects</h3>
            <code>
                <pre>
                    {JSON.stringify( person, null, 2 )}
                </pre>
            </code>
        </>
    )
}
