export function* makeIdGenerator(): Generator<number, number, number> {
  let id = 0;
  while (true) {
    yield id;
    id += 1;
  }
}
