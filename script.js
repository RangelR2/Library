const myLibrary = [];

document.querySelector('#btn').disabled = true;

function addBook(){
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('content');
    container.appendChild(content)
    content.setAttribute('style','transition: 0.2s; border: 4px solid rgb(45,45,45); background-color: rgb(35, 35, 35); border-radius: 10px; display: flex; text-align: center; width: 300px; height: 450px;')

    const painelDiv = document.createElement('div');
    painelDiv.classList.add('painelDiv');
    content.appendChild(painelDiv)
    painelDiv.setAttribute('style','width: 100%; padding:20px;')

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('titleDiv');
    painelDiv.appendChild(titleDiv);
    titleDiv.textContent = "Add Book"
    titleDiv.setAttribute('style','margin-top: 10px; margin-bottom: 10px; height: 50px; font-size: 30px; color: white; width: 100%;')
    
    const nameDiv = document.createElement('input');
    nameDiv.classList.add('nameDiv');
    painelDiv.appendChild(nameDiv);
    nameDiv.textContent = "Name"
    nameDiv.setAttribute('style','color: white; margin-bottom: 25px; border: none; border-radius: 7px; background-color: rgb(50,50,50); height: 50px; width: 100%;')
    nameDiv.placeholder = 'Title'
    
    const authorDiv = document.createElement('input');
    authorDiv.classList.add('authorDiv');
    painelDiv.appendChild(authorDiv);
    authorDiv.setAttribute('style','color: white; margin-bottom: 25px; border: none; border-radius: 7px; background-color: rgb(50,50,50); height: 50px; width: 100%;')
    authorDiv.placeholder = 'Author'

    const pagesDiv = document.createElement('input');
    pagesDiv.classList.add('pagesDiv');
    painelDiv.appendChild(pagesDiv);
    pagesDiv.setAttribute('style','color: white; margin-bottom: 25px; border: none; border-radius: 7px; background-color: rgb(50,50,50); height: 50px; width: 100%;')
    pagesDiv.placeholder = 'Pages'
    pagesDiv.setAttribute('type','number')

    const isReadDiv = document.createElement('div');
    isReadDiv.classList.add('isReadDiv');
    painelDiv.appendChild(isReadDiv);
    isReadDiv.setAttribute('style','margin-bottom:10px; width: 100%; height: 40px;')

    const labelDiv = document.createElement('label');
    labelDiv.classList.add('labelDiv');
    isReadDiv.appendChild(labelDiv);
    labelDiv.textContent = 'Have you read it?'
    labelDiv.setAttribute('style','color: white; font-size: 20px;')

    const readDiv = document.createElement('input');
    readDiv.classList.add('readDiv');
    isReadDiv.appendChild(readDiv);
    readDiv.setAttribute('type','checkbox')
    readDiv.setAttribute('style','margin-left: 5px; background-color: rgb(45,45,45);')

    const confirmButton = document.createElement('button');
    confirmButton.classList.add('confirmButton');
    painelDiv.appendChild(confirmButton);
    confirmButton.textContent = "Submit"
    confirmButton.setAttribute('style','font-size: 17px; cursor: pointer; height: 50px; width: 40%;border-radius: 7px; color: white; border: 3px solid white; background-color: rgb(45,45,45);')

    confirmButton.addEventListener('mouseover', () => {
        confirmButton.setAttribute('style','transition: 0.2s; font-size: 17px; cursor: pointer; height: 50px; width: 40%;border-radius: 7px; color: black; border: 3px solid white; background-color: white;')
    });

    confirmButton.addEventListener('mouseout', () => {
        confirmButton.setAttribute('style','font-size: 17px; cursor: pointer; height: 50px; width: 40%;border-radius: 7px; color: white; border: 3px solid white; background-color: rgb(45,45,45);')
    });

    /*
    const painelContainer = document.querySelector(content);
    const painelDiv = document.createElement('div');
    painelDiv.classList.add('painelDiv');
    painelContainer.appendChild(painelDiv)
    painelDiv.setAttribute('style','border: 3px solid red; padding: 20px;')
    */
}

function addBookToLibrary(){

}