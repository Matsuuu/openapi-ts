import { Shape } from '../../../client/interfaces/Shape';

export function getEnumSymbolsFromDescription(description: string): Shape[] {
    // Check if we can find this special format string:
    // None=0,Something=1,AnotherThing=2
    if (/^(\w+=[0-9]+,?)+$/g.test(description)) {
        const matches: RegExpMatchArray | null = description.match(/(\w+=[0-9]+,?)/g);
        if (matches) {
            // Grab the values from the description
            const symbols: Shape[] = [];
            matches.forEach((match: string): void => {
                const name: string = match.split('=')[0];
                const value: number = parseInt(match.split('=')[1].replace(/[^0-9]/g, ''));
                if (name && Number.isInteger(value)) {
                    symbols.push({ name, value: String(value) });
                }
            });

            // Filter out any duplicate names
            return symbols.filter((symbol: Shape, index: number, arr: Shape[]): boolean => {
                return arr.map(item => item.name).indexOf(symbol.name) === index;
            });
        }
    }

    return [];
}
