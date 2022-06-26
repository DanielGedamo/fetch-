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
// async function doFetch (){
//     myBtr.disable =true;
//     myDiv.innerHTML='<img src = "loading_2.gif">'

//     try{
//         return await fetch('https://cat-fact.herokuapp.com/facts').then((item) => item.json())
//     }catch(err){}
//     finally{myBtr.disable =false;
//         myDiv.innerHTML='<loading_2.gif>'}
// }
//  function printToLog(){
//     doFetch ().then((result)=>console.log(result));
//  }printToLog()
async function doFetch(){
    myBtr.disable =true;
    MyDiv.innerHTML="<img src=loading_2.gif>"
    try{
        return await fetch (' https://placekeanu.com/200/150 ').then(item =>item.json())
    }
    catch(err){}
    finally{}
}
function printToScrin(){
    doFetch().then((result) => MyDiv22.innerHTML = (result))

}printToScrin()

