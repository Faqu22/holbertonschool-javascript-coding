console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  const dataStr = String(data);
  const person = dataStr.substring(0, data.length - 1);
  console.log(`Your name is: ${person}`);
  process.exit(console.log('This important software is now closing'));
});
