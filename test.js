// parent
$('#clGetBtn').click(function () {
    window['clFrameBody'].postMessage(1111, '*');
});
function receiveMessage(event) {
    console.log(event.data, 'parent')//取得子页面传回来的值
}
window.addEventListener('message', receiveMessage, false);

// child
window.addEventListener('message', function(e){
    if (e.origin === 'http://localhost:5000' && e.value === '1111') {
        returnSelectUser();
    }
}, false);
function returnSelectUser() {
    var value = $("#clHideInput").text();
    parent.postMessage(value, "*");
}
