function add()
{
    var value = parseInt(document.getElementById('counter').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('counter').value = value;
}
   


function subtract()
{
    var value = parseInt(document.getElementById('counter').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('counter').value = value;
}
