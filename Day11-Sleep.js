//https://leetcode.com/problems/sleep/editorial/?utm_campaign=PostD11&utm_medium=Post&utm_source=Post&gio_link_id=5Rp2Wmzo

// asynchronous programming


async function sleep(millis) {
  return new Promise((res, rej)=>{
    try {
        setTimeout((res, millis)
    }catch(err){
        rej(err)
    }
  })
}


async function sleep(milliseconds) {
	await new Promise(res => setTimeout(res, milliseconds)); 
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
