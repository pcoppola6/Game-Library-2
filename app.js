function pageLoad() {
    document.getElementById('book-form').addEventListener('submit', afterChange);
    console.log(e.target.value);
}

document.addEventListener('DOMContentLoaded', pageLoad);