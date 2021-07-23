/** 
Pascal's triangle solution 
Link : https://leetcode.com/problems/pascals-triangle/
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var Arr=[[1]]; 
  
    for (i=1; i<numRows; i++)
    {
        Arr.push([1])
      
        for (j=1; j< i; j++)
        {
            Arr[i].push(Arr[i-1][j-1]+Arr[i-1][j]);
        }
      
        Arr[i].push(1);
    }
  
    return Arr ;
    
};
