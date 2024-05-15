let newArray = []
function sorting() {
    let userInput = document.getElementById("user").value;
    let arr = userInput.split(',');
     newArray = [];
    for (let i = 0; i < arr.length; i++) {
        // console.log(i);
        for (let j = i; j < arr.length; j++) {
            // console.log(j);
           let data = 0;
           if (parseFloat(arr[i]) > parseFloat(arr[j])) {
            // console.log(arr[i]);
                data = arr[i];
                arr[i] = arr[j];
                // console.log(arr[i]);
                arr[j] = data; 
                // console.log(arr[j]);
           }
        }
        newArray.push(arr[i]);
    }
    document.getElementById("result").value = newArray
}
function descending() {
    let reve = newArray.reverse(); 
    document.getElementById("result").value = reve;
}



