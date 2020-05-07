/*
	*@description  数组去重排序 
	*@param {arr} 数组
	*/
	function reorder(arr){
		var a=[];
			for(var i=0;i<arr.length;i++){
				if(a.indexOf(arr[i]) == -1){
					a.push(arr[i])
				}
			}
			return a.sort()
	}
	console.log(reorder(arr))
	
	/*
	*@description 数组冒泡排序
	* @param {arr} 数组
	*/
	function bubbleSort(arr){
		var arr = this.arr;
		for(var i=0;i<arr.length;i++){
			for(var j=0;j<arr.length-i;j++){
				if(arr[j]>arr[j+1]){
					var temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp
				}
			}
		}
		return arr;
	}