//https://leetcode.com/problems/promise-time-limit/description/

let timeLimit = function(fn, t) {
  return async function(...args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
      fn(...args).then(resolve).catch(reject);
    })
  }
};

let fn = async (n) => { await new Promise(res => setTimeout(res, 100)); return n * n; }
let t = 50
let limit = timeLimit(fn, t)
limit(5).then(console.log).catch(console.log)

/* 
resolve, reject 都是 callbackfunction

async function fn(){
    return 25
}

fn().then(console.log) //25


當在異步函數中使用 `try` 和 `catch` 時，它們的作用與在同步函數中的作用非常相似。讓我們解釋一下在異步函數中使用 `try` 和 `catch` 的工作方式：

1. `try` 區塊：在 `try` 區塊中，我們放置可能引發錯誤的程式碼。這些程式碼可以是異步操作、Promise 鏈式處理、其他函數呼叫等。當在 `try` 區塊中的程式碼引發錯誤時，錯誤將被捕獲並傳遞給相應的 `catch` 區塊。

2. `catch` 區塊：在 `catch` 區塊中，我們定義錯誤處理的程式碼。當 `try` 區塊中的程式碼引發錯誤時，控制權會立即轉移到 `catch` 區塊。在 `catch` 區塊中，我們可以進行錯誤處理、記錄錯誤訊息或採取其他適當的操作。

下面是一個使用 `try` 和 `catch` 的異步函數的示例：

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('發生錯誤：', error);
  }
}
```

在這個例子中，`fetchData` 函數是一個異步函數，它使用了 `try` 和 `catch`。

在 `try` 區塊中，我們使用 `await` 關鍵字發起一個網路請求（fetch），然後使用 `response.json()` 將回應轉換為 JSON 格式的資料。如果在這些異步操作中發生錯誤，例如網路連接問題或回應解析錯誤，那麼錯誤將被捕獲。

在 `catch` 區塊中，我們定義了錯誤處理的程式碼。當錯誤發生時，控制權會立即轉移到 `catch` 區塊。在這個範例中，我們簡單地將錯誤訊息輸出到控制台，以便進行除錯或紀錄。

使用 `try` 和 `catch` 的好處是可以在異步函數中有效地處理錯誤，而不需要使用回調函數或進一步

的錯誤處理邏輯。這提供了一種更直觀和易於理解的方式來處理異步操作中的錯誤情況。
*/
