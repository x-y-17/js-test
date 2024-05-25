const test = () => {
  try {
    throw new Error(1234)
    console.log(123);
    return 0;
  } catch (error) {
    console.log(error.message);
  } finally {
    return 456;
  }
};
console.log(test())