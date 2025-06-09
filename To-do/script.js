function addItem(){
    const input = document.getElementById('input')
    const list = document.getElementById('list')
    const task = input.value.trim();
   
    if (task === '') return;
    
    const li = document.createElement('li');
    li.textContent = task
    
    

    const btn = document.createElement('button')
    btn.textContent = '❌'
    li.appendChild(btn)

    btn.onclick = () => li.remove();
    list.appendChild(li)
    input.value = '';
}