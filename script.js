let titleValue;
let authorValue;
let pagesValue;
let readValue;
let name;
let bookName;

const myLibrary = [];

function addBookButton(){

    document.querySelector('#btn').disabled = true;
    
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('content');
    container.appendChild(content)
    content.setAttribute('style','margin-left: 35%; position: absolute; border: 4px solid rgb(45,45,45); background-color: rgb(35, 35, 35); border-radius: 10px; display: flex; text-align: center; width: 300px; height: 450px;')

    const painelDiv = document.createElement('div');
    painelDiv.classList.add('painelDiv');
    content.appendChild(painelDiv)
    painelDiv.setAttribute('style','width: 100%; padding:20px;')

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('titleDiv');
    painelDiv.appendChild(titleDiv);
    titleDiv.textContent = "Add Book"
    titleDiv.setAttribute('style','margin-top: 10px; margin-bottom: 10px; height: 50px; font-size: 30px; color: white; width: 100%;')
    
    const nameInput = document.createElement('input');
    nameInput.classList.add('nameInput');
    painelDiv.appendChild(nameInput);
    nameInput.textContent = "Name"
    nameInput.setAttribute('style','color: white; margin-bottom: 25px; border: none; border-radius: 7px; background-color: rgb(50,50,50); height: 50px; width: 100%;')
    nameInput.placeholder = 'Title'
    nameInput.setAttribute('id','titleId')
    
    const authorInput = document.createElement('input');
    authorInput.classList.add('authorInput');
    painelDiv.appendChild(authorInput);
    authorInput.setAttribute('style','color: white; margin-bottom: 25px; border: none; border-radius: 7px; background-color: rgb(50,50,50); height: 50px; width: 100%;')
    authorInput.placeholder = 'Author'
    authorInput.setAttribute('id','authorId');

    const pagesInput = document.createElement('input');
    pagesInput.classList.add('pagesInput');
    painelDiv.appendChild(pagesInput);
    pagesInput.setAttribute('style','color: white; margin-bottom: 25px; border: none; border-radius: 7px; background-color: rgb(50,50,50); height: 50px; width: 100%;')
    pagesInput.placeholder = 'Pages'
    pagesInput.setAttribute('type','number')
    pagesInput.setAttribute('id','pagesId')

    const isReadDiv = document.createElement('div');
    isReadDiv.classList.add('isReadDiv');
    painelDiv.appendChild(isReadDiv);
    isReadDiv.setAttribute('style','margin-bottom:10px; width: 100%; height: 40px;')

    const labelDiv = document.createElement('label');
    labelDiv.classList.add('labelDiv');
    isReadDiv.appendChild(labelDiv);
    labelDiv.textContent = 'Have you read it?'
    labelDiv.setAttribute('style','color: white; font-size: 20px;')

    const readInput = document.createElement('input');
    readInput.classList.add('readInput');
    isReadDiv.appendChild(readInput);
    readInput.setAttribute('type','checkbox')
    readInput.setAttribute('style','margin-left: 5px; background-color: rgb(45,45,45);')
    readInput.setAttribute('id','readId')

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

    confirmButton.addEventListener('click', (e) => {
        e.preventDefault();

        const titleInput2 = document.querySelector('#titleId');
        const authorInput2 = document.querySelector('#authorId');
        const pagesInput2 = document.querySelector('#pagesId');
        const readInput2 = document.querySelector('#readId');

        titleValue = titleInput2.value;
        authorValue = authorInput2.value;
        pagesValue = pagesInput2.value;
        readValue = readInput2.value;
        
        bookName = new addBook(titleValue, authorValue, pagesValue, readValue)

        myLibrary.push(bookName)
        document.querySelector('#btn').disabled = false;
        content.setAttribute('style','transition: 0.2s; border: 4px solid rgb(45,45,45); background-color: rgb(35, 35, 35); border-radius: 10px; display: none; text-align: center; width: 300px; height: 450px;')

    })
}

function addBook(titleValue,authorValue,pagesValue,readValue){
    this.titleValue = titleValue;
    this.authorValue = authorValue;
    this.pagesValue = pagesValue;
    this.readValue = readValue;
    this.info = function(){
        console.log(this.titleValue + ' by ' + this.authorValue + ', ' + this.pagesValue + ' pages, ' + this.readValue)
    }
    addBookToLibrary();
}

function addBookToLibrary(){
    const painelItem = document.createElement('div');
    painelItem.classList.add('painelItem');
    container.appendChild(painelItem);
    painelItem.setAttribute('style','color: white; margin-top: 150px; border-radius:7px; border: 3px solid rgb(60,60,60); width: 250px; height: 200px; background-color: rgb(45,45,45);')
    painelItem.textContent = "Título: " + titleValue + "\n\nAutor: " + authorValue + "\n\n N° de Páginas: " + pagesValue;

} 