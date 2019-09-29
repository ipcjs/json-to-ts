import { InterfaceDescription } from "./model";

export function getTypedefStringFromDescription({name, typeMap}: InterfaceDescription):string{
    return `
/**
 * @typedef {object} ${name}
${Object.entries(typeMap).map(([key, name])=>` * @property {${name}} ${key}`).join('\n')}
 */
`.trim()
}