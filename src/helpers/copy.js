export default val => {
  navigator.clipboard.writeText(val).then(function () {
    console.debug('Copied to clipboard successfully!');
  }, function () {
    console.error('Unable to write to clipboard.');
  });
}