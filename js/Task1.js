
function array() 
{

    const array = [22,55,66,34,78,43,12,48]
    let sum=0;
    let average=0

    for (let i=0;i<array.length;i++)
    {
         sum += array[i]

}

average = sum / array.length

console.log("Sum of array "+sum)
console.log("Average of array values "+average)

}

array()




