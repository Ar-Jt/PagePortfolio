window.onload = pageLoad;
function pageLoad()
{
	let form = document.getElementById('myForm');
    form.onsubmit = validateForm;
}

function validateForm() 
{
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    let password = document.getElementById('password').value;
    let Repassword = document.getElementById('Repassword').value;

    if(password != Repassword)
    {
        alert("Passwords do not match!")
        return false;
    }
    else
    {
        alert("Register Complete");
    }

}