var myStr = 'Paragon is the best!';

    function useMethods(str){

        var myReverse = str.split('').reverse().join('');

    var countCharacters = str.split(' ').reverse().map(x => x.length);
    return { myReverse, countCharacters };

  }
  console.log(useMethods(myStr));
// Only change code above this line

module.exports = useMethods;
