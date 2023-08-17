const list = [1,4,6,8,7,9,4,3,5,1,2,5,'php','HTML','CSS' ,'JS','php', 'HTMl',]
console.log(list);
function removeDuplicate(array){
    return array.filter((el, index) => array.indexOf(el) === index);
}
console.log(removeDuplicate(list))