function duplicateCount(text: string): number {
  let letters: Set<string> = new Set();

  const lettersArray: string[] = text.split("").map((letter: string) => {
    return letter.toLowerCase();
  });

  const duplicatedLetters: string[] = lettersArray.filter((letter: string) => {
    return lettersArray.lastIndexOf(letter) > lettersArray.indexOf(letter);
  });

  duplicatedLetters.forEach((letter) => {
    letters.add(letter);
  });

  return letters.size;
}

const count = duplicateCount("aA11");

console.log(count);
