const nemo = ['nemo'];
const large = new Array(100).fill("nemo");

function findNemo(array) {
  let t1 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log(" found nemo")
    }
  }
  let t2 = performance.now();
  console.log("performene" + (t2 - t1))
}

findNemo(nemo)