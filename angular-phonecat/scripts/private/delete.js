var arr1 = [1,2,2,2,3,3,3,4,4,4,4,];
var arr2 = [];
for (var i = 0;i<arr1.length;i++;){
	if(arr2.indexOf(arr1[i]) < 0){
		arr2.push(arr1[i]);
	}
}