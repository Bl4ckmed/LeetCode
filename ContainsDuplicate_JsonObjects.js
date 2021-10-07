// Solved the contains duplciate problem using JSON objects : checking if the object is in our JSON object ( if it is return true) otherwise, we add it to the JSON object
// This problem could have been solved with Hashmaps
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    let obj={}; 
    let  numsLength=  nums.length
    
    for (let i=0; i< numsLength; i++)
        {
            if (nums[i] in obj)
                {
                    return true;
                }
            else 
                {
                    obj[nums[i]]=1;
                }
        }
    return false;
    
};
