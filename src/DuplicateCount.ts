function duplicateCount(text: string): number {
  let letters: Set<string> = new Set();

  const lettersArray: string[] = text.split("").map((letter) => {
    return letter.toLowerCase();
  });

  const duplicatedLetters: string[] = lettersArray.filter((letter) => {
    return lettersArray.lastIndexOf(letter) > lettersArray.indexOf(letter);
  });

  duplicatedLetters.forEach((letter) => {
    letters.add(letter);
  });

  return letters.size;
}
