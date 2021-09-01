// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function(nums, target) {
	var map = {};
    
    for(var i = 0; i < nums.length; i++) {
    	var num = nums[i];
        
        if(hash[num] !== undefined) {
        	return [hash[num], i];
        }
        else{
        	hash[target - num] = i;
        }
    }
    
    return [];
};
