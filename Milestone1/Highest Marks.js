let marks = [234 , 435, 564, 453, 230]
let HScore = marks[0];
function  HighestMarks (HScore)
{
    for (let i=0; i<marks.length ; i++){
       HScore = HScore<marks[i]? marks[i]: HScore;
       }
       return HScore;
    }
 let store =  HighestMarks(HScore);
 console.log(store);
    