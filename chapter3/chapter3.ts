// Lesson 40 Interfaces
interface IPerson {
    readonly firstName: string;
    lastName?: string; // optional parameters
    address: string;
}

function getFullName(person: IPerson): string {
    // person.firstName = 'Trần';
    return `${person.firstName} ${person.lastName}`
}

