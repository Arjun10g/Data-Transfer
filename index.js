document.querySelector('.btn').addEventListener('click', () => {
    Papa.parse(document.querySelector(".inpt").files[0], {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(results) {
            console.log(results.data);
        }
    })
});