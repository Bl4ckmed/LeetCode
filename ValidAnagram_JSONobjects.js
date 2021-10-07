// This problem is solved using JSON objects, we assemble the characters of the first string with their occurences in a JSON object then we compare the second string to the first.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    let lenT= t.length ; 
    let lenS= s.length ;
    
    // if the length of both strings is different => false
    if (lenT!=lenS)
    {
        return false;
    }
    
    let obj={}
    
    //creating a JSON object with the string S letters and their occurence
    for (let i=0; i<lenS ; i++)
    {
        if (s[i] in obj)
        {
            obj[s[i]]++; 
        }
        else 
        {
           obj[s[i]]=1; 
        }
        
    }
    
    // if an object from t is not in s => false 
    // if an object from t is in s => substract 1 from the JSON object 
    for (let i=0; i<lenT ; i++)
    {
        if (obj[t[i]]>0)
        {
            obj[t[i]]--; 
        }
        else 
        {
            return false; 
        }
    }
    return true;
    
};
