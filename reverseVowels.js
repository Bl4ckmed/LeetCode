/** 
Reverse Vowels of a String solution
https://leetcode.com/problems/reverse-vowels-of-a-string/
*/


/**
 * @param {string} s
 * @return {string}
 */

function vowelTest(s) {
  return (/^[aeiou]$/i).test(s);
}

var reverseVowels = function(s) {
    var vowels =[];
    n =s.length;
    for (let i=0; i<n ; i++)
    {
        if (vowelTest(s[i]))
        {
            vowels.push(s[i]); 
        }
    }
    
    let result="";
    j=vowels.length-1;
    for (let i=0; i<n ; i++)
    {
        if (vowelTest(s[i]))
        {
            result+= vowels[j];
            j--;
        }
        else 
        {
            result+=s[i]
        }
    }
    
    return result;
};
