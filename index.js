
addEventListener('load',async() => {
    let sw = await navigator.serviceWorker.register('./sw.js');
    console.log(sw);
})
async function push(){
    let sw = await navigator.serviceWorker.ready;
    let push = await sw.pushManager.subscribe({
        userVisibleOnly : true,
        applicationServerKey : 'BKjYDlUWRkQGCr4DaudfEju3tipL-22jNiR2tOyBsGHj0CkjySUspw9LSGJlf20NOiCHQyrNpBhIU9sli8SFt7E'
    }) 
    console.log(JSON.stringify(push));

}