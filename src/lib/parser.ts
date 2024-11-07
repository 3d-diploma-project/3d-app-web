import { Face } from '../types/Face'
import { Vertex } from '../types/Vertex'

type ParsedLine = string[]

function parseLines(input: string): ParsedLine[] {
  return input.split('\n').map((line) => line.replace(/\s+/g, ' ').trim().split(' '))
}

function filterByLength(parsedLines: ParsedLine[], length: number): ParsedLine[] {
  return parsedLines.filter((params) => params.length === length)
}

function hasValidLineFormat(input: string, expectedLength: number): boolean {
  return filterByLength(parseLines(input), expectedLength).length > 0
}

export function parseFaces(input: string): Face[] {
  if (isDefaultFaces(input)) return parseDefaultFaces(input)
  return []
}

export function parseVertices(input: string): Vertex[] {
  if (isDefaultVertices(input)) return parseDefaultVertices(input)
  return []
}

export function parseDefaultVertices(input: string): Vertex[] {
  return filterByLength(parseLines(input), 4).map(([index, x, y, z]) => ({
    index: Number(index),
    x: Number(x),
    y: Number(y),
    z: Number(z)
  }))
}

export function parseDefaultFaces(input: string): Face[] {
  return filterByLength(parseLines(input), 5).map(([index, vertex1, vertex2, vertex3, vertex4]) => ({
    index: Number(index),
    vertex1: Number(vertex1),
    vertex2: Number(vertex2),
    vertex3: Number(vertex3),
    vertex4: Number(vertex4)
  }))
}

export function isDefaultVertices(input: string): boolean {
  return hasValidLineFormat(input, 4)
}

export function isDefaultFaces(input: string): boolean {
  return hasValidLineFormat(input, 5)
}
