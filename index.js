function findMinAndRemoveSorted(array){
	let min = array[0]
	let minIndex = 0
	//find the minimum and remove elements 
	//until there are no more elements left in the original array

	for(let i=0; i<array.length; i++){
		//if the number you're on is less than the min, re-assign min 
		//also re-assign minIndex so that you know which element to remove 
		// from the array
		let currentElement = array[i]
		if(currentElement < min){
			min = array[i]
			minIndex = i 
		}
	}
	//once it breaks out of the for loop, it has the minimum element and can
	// remove the minimum element from the array using its index
	array.splice(minIndex, 1);
   return min;
}

function findMin(array){
	return array[0]
}


function merge(left, right){
	let sortedArr = []
	let currentMin;
	while (left.length !== 0 && right.length !== 0){
		if (findMin(left) < findMin(right)){
			currentMin = findMinAndRemoveSorted(left)
		}else{
			currentMin = findMinAndRemoveSorted(right)
		}
		sortedArr.push(currentMin)
	}
	return sortedArr.concat(left, right)
}

function mergeSort(array){
	let length = array.length
	if (length<2){
		return array
	}
	let left = array.slice(0, length/2)
	let right = array.slice (length/2, length)
	return merge(mergeSort(left), mergeSort(right))
}
