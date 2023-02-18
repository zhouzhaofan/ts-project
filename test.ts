interface Xargs {
  name: string
  age: number
}

export function test(args: Xargs): void {
  const a = args.name
  const b = args.age
  const objs = [
    { a: 'XXXXXXX', b: 'yyyyy', c: 'zzzzz' },
    { a: 'XXXXXXX', b: 'yyyyy', c: 'zzzzz' },
    { a: 'XXXXXXX', b: 'yyyyy', c: 'zzzzz' },
    { a: 'XXXXXXX', b: 'yyyyy', c: 'zzzzz' },
    { a: 'XXXXXXX', b: 'yyyyy', c: 'zzzzz' }
  ]

  console.log('----', objs)

  const set = new Set([1, 2, 3, 4, 5])
  const arr = [...set]
  console.log(arr.length)
  console.log(`--ts-standard-- ${a} ${b} `)
  console.log(objs)
  ;[1, 2, 3].forEach((v) => {
    console.log(v)
  })
}
