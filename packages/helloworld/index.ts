const world = 'world';

function testAnotherFunction(): string {
    return "testAnotherFunction"
}

export function hello(word: string = world): string {
  return `Hello test ${world}! ${testAnotherFunction()}`;
}