const sentence = "hello there from lighthouse labs";

let typewriteSentence = function(string) {
  let delay = 50;
  for (const char of string) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 50;
  }
  console.log("\n");
}

typewriteSentence(sentence)