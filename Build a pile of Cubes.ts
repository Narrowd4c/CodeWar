<!-- Build a pile of Cubes
https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/typescript
 -->

function findNb(m: number): number {
  let cub:number = 1;
  while(m >= 0){
    m = m - cub ** 3
    if (m == 0 ){
      return cub
    }else{
      cub+=1
    }
  }
  return -1
}
