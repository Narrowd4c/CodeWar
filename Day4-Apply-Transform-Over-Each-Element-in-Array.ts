//https://leetcode.com/problems/apply-transform-over-each-element-in-array/?utm_campaign=PostD4&utm_medium=Post&utm_source=Post&gio_link_id=noqbNOv9


let map = function(arr:nmber[], fn:(value:number, index:number)=>number):number[] {
    let ary:number[] = []
    arr.forEach((value, i) =>{
         ary[i] = fn(value, i)
    })
    return ary
};

