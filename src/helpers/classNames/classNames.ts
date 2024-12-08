type Mods = Record<string, boolean | string> // тип в качетве ключа строка в качетсве значения булевое | строка

export function classNames(cls:string, mods:Mods, additional:string[]): string {

return [
    cls,
    ...Object.entries(mods)
    .filter(([className, value]) => Boolean(value))
    .map(([className, value]) => className),
    ...additional
].join(' ');
}