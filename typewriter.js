const sentence = "hello there from lighthouse labs";

let typeSentence = function(string) {
  let delay = 0;
  let delayIncrement = 1000;
  for (let char of string) {
    setTimeout(() => {process.stdout.write(char)}, delay);
    delay += delayIncrement;
  }
  setTimeout(() => {process.stdout.write('\n')}, (sentence.length * delayIncrement + 50));
};

typeSentence(sentence);