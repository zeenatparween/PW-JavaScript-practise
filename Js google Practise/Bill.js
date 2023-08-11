var arr = [80, 60, 120, 340, 670, 450, 470]
var people = 4
function RestroBill(arr, people){
    var sum = 0
     for(var i=0; i<arr.length; i++){
        sum = sum+arr[i]
        // console.log(sum)
        }
     var TotalBill = sum/people
     return TotalBill
}
console.log(RestroBill(arr, people))


