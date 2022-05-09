
export const BasicTypes = () => {

    const name: string = 'David';
    const edad: number = 23;
    // const isActive: boolean = true;
    const superpowers: string[] = ['Fly', 'Invisibility', 'Fast'];

    return (
        <>
            <h3>Basic Types</h3>
            <p>{name} - {edad}</p>
            <hr />
            { superpowers.join(', ') }
        </>
    )
}
