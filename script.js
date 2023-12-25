const myLibrary = [];

document.querySelector('#btn').disabled = true;

function addBook(){
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('content');
    container.appendChild(content)
    content.setAttribute('style','transition: 0.2s; border: 4px solid rgb(45,45,45); background-color: rgb(35, 35, 35); border-radius: 10px; display: flex; text-align: center; width: 300px; height: 450px;')

    const painelContainer = document.querySelector(content);
    const painelDiv = document.createElement('div');
    painelDiv.classList.add('painelDiv');
    painelContainer.appendChild(painelDiv)
    painelDiv.setAttribute('style','border: 3px solid red; padding: 20px;')

}

function addBookToLibrary(){

}