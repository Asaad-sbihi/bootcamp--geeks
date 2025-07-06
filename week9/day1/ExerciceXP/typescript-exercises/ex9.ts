function greet(): string;
function greet(name: string): string;
function greet(name?: string): string {
  return name ? `Hello, ${name}!` : "Hello, Guest!";
}

console.log(greet());           // Hello, Guest!
console.log(greet("Charlie"));  // Hello, Charlie!
