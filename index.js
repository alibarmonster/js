const sentences = ['Mauris ultricies sed sapien eget malesuada.'];

function result(sentences) {
  const wordSentence = sentences.map((sentences) => sentences.split(' ').length);
  return Math.max(...wordSentence);
}

console.log(result(sentences));

