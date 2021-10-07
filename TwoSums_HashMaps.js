/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

let arr=[]
    
var myMap = new Map();
var keyObj = {};
myMap.get(keyObj); 

for (let i=0 ; i< nums.length; i++) {
  myMap.set(nums[i],i);
    }
    console.log(myMap)
    
for (let i=0; i<nums.length; i++)
    {
        
        if (myMap.has(target-nums[i]) && myMap.get(target-nums[i])!=i )
            {
                console.log(i)
                arr.push(i);
                console.log(myMap.get(target-nums[i]))
                arr.push(myMap.get(target-nums[i]));
                return arr;
            }
    }    
    
};
