const arr = [1, 2, 3, -1, -2, -3];
function funcArr(arr){
    const arr2=[];
    if(!arr){
        return 'The array with name "arr" is empty'
    }
    for(let i=0; i<arr.length; i++){
        if(Math.sign(arr[i])>0){
           arr2.push(arr[i]); 
        }
    }
    if(arr2!==0){
        return arr2
    } 
        return 'NULL'
}
console.log(funcArr(arr));