type Mods = Record<string, boolean | string | undefined>; // тип в качетве ключа строка в качетсве значения булевое | строка

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = []
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className, _]) => className),
    ].join(" ");
}
