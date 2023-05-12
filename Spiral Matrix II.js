//https://leetcode.com/problems/spiral-matrix-ii/description/

let generateMatrix = function(n) {
    let x1 = 0;
    let mx = n-1;
    let y1 = 0;
    let my= n-1;
    
    let arr = Array.from(Array(n),()=>Array(n));
    let count = 1;
    while(count<=n*n){
        for(let y = y1; y<=my; y++){
            arr[x1][y] = count;
            count++
        }
        x1++
        for(let x = x1; x <= mx ; x++){
            arr[x][my] = count;
            count++
        }
        my--
        for(let y = my; y>=y1; y--){
            arr[mx][y] = count
            count++
        }
        mx--
        for(let x = mx; x >=x1; x--){
            arr[x][y1] = count;
            count++
        }
        y1++
    }

    return arr;
};
