export enum TypeGroup {
  Primitive, Array, Object
}

export interface TypeDescription {
  id: string
  isUnion?: boolean
  typeObj?: {[index: string]: string}
  arrayOfTypes?: string[]
}

export interface TypeStructure {
  rootTypeId: string
  types: TypeDescription[]
}

export interface NameEntry {
  id: string
  name: string
}

export interface NameStructure {
  rootName: string
  names: NameEntry[]
}

export interface InterfaceDescription {
  name: string
  typeMap: object
}

export interface Options {
  rootName: string
  outputType: 'ts' | 'jsdoc'
}

export interface KeyMetaData {
  keyValue: string,
  isOptional: boolean
}