1-2-3-4
// async function doFetch() {
//   myBtr.disable = true;
//  myDiv.innerHTML= '<img src="loading_2.gif">'
//   try {
   
//     return await fetch("https://moviesmern.herokuapp.com/movies/all").then(
//       (item) => item.json()
//     );
//   } catch (err) {
//   } finally {
//     myBtr.disable = false;
//     myDiv.innerHTML=""
//   }
// }
// function printToLog() {
//   doFetch().then((result) => console.log(result));
// }
// printToLog();
// 5
async function doFetch (){
    myBtr.disable =true;
    myDiv.innerHTML='<img src = "loading_2.gif">'

    try{
        return await fetch('https://cat-fact.herokuapp.com/facts').then((item) => item.json())
    }catch(err){}
    finally{myBtr.disable =false;
        myDiv.innerHTML='<loading_2.gif>'}
}
 function printToLog(){
    doFetch ().then((result)=>console.log(result));
 }printToLog()

