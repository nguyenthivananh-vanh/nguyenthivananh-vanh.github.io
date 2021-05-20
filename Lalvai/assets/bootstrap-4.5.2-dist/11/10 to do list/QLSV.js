var arr1 = ['Họ và tên'];
var ht;
var nodeUl = document.getElementById('list2');
var arr1length;

function hien(t) {
    arr1length = arr1.length;
    for (let i = 0; i < arr1length; i++) {
        t += '<li class="list-group-item">' + arr1[i] + '</li>';
        nodeUl.innerHTML = t;
    }
}

function add() {
    var t = '';
    ht = document.getElementById('firstname').value + document.getElementById('lastname').value;
    arr1.push(ht);
    arr1length = arr1.length;
    console.log(arr1);
    hien(t);


}