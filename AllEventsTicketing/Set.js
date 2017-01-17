function Set() {
	
	
	this.intersection = function(listA, listB) {
    
	   var resultList = new Array(); // create a result array

		if (listA === null || listB === null) {
			return null; // check for invalid inputs
		}

		for (var i = 0; i < listA.length; i++) { // go through listA
			var nextValue = listA[i]; // get each value

			// iterate through listB
			for (var j = 0; j < listB.length; j++) {
				if (listB[j] === nextValue) { // if the current element equals nextValue
					resultList.push(listB[j]); // add to the result list
					break;
				}
			} // end listB inner loop
		} // end listA outer loop

	   return resultList;
	}
    
    
    
	this.union = function(listA, listB) {

        var resultList = new Array();

        if (listA === null || listB === null) {
        	return null; // check for valid input
		}

		// go through list A
		for (var i = 0; i < listA.length; i++) {
        	resultList.push(listA[i]); // put all items in resultList
		}

		// go through listB
		for (var i = 0; i < listB.length; i++) {

        	var isUnique = true;
        	var nextItem = listB[i];

        	for (var j = 0; j < resultList.length; j++) {
        		if (listB[i] === resultList[j]){ // if the item is in both lists
        			isUnique = false;            // don't add it again
        			break;
				}
			}

			if(isUnique) {
        		resultList.push(listB[i]); // add the item if it's unique to listB
			}
		}

	   return resultList;
	}




	this.relativeCompliment = function(listA, listB) {

	   var resultList = new Array();

	   if (listA === null || listB === null) {
	   		return null; // check for valid input
	   }

	   // go through listA
	   for (var i = 0; i < listA.length; i++) {

	   		var nextItem = listA[i];
	   		var isUnique = true;

	   		// loop through listB
	   		for (var j = 0; j < listB.length; j++) {
	   			if (nextItem === listB[j]) {
	   				isUnique = false; // do not add if the item is not unique to listA
					break;
				}
			}

			if (isUnique) {
	   			resultList.push(listA[i]); // add each unique item to resultList
			}
	   }

	   return resultList;
	}



	this.symetricDifference = function(listA, listB) {

	   var resultList = new Array();

	   if (listA === null || listB === null){
	   		return null; // check for valid input
	   }

	   var list1 = this.relativeCompliment(listA, listB); // items in A but not B
	   var list2 = this.relativeCompliment(listB, listA); // items in B but not A

		// add contents of both lists to results

	   for (var i = 0; i < list1.length; i++) {
           resultList.push(list1[i]);
	   }

	   for (var i = 0; i < list2.length; i++) {
           resultList.push(list2[i]);
       }

	   return resultList;
	}	
	

}
