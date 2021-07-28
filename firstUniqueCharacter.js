/** 
First Unique Character in a String solution
https://leetcode.com/problems/first-unique-character-in-a-string/
*/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let n= s.length
    let counter={}; 
    for (let i=0; i<n; i++)
    {
        if (counter.hasOwnProperty(s[i]))
        {
            counter[s[i]]++; 
        }
        else 
        {
            counter[s[i]]=1; 
        }
    }
    
    for (let i=0; i<n; i++)
    {
        if (counter[s[i]]==1)
            {
                return i; 
            }
    }
    return -1;
};
