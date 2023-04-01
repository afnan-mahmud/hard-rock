document.getElementById('search-button').addEventListener('click', function(){
    const SearchInput =  document.getElementById('search-input').value;
    fetch(`https://api.lyrics.ovh/suggest/${SearchInput}`)
    .then(res => res.json())
    .then(data => {
        const songsInfo = Object.entries(data);
        const mainSongInfo = songsInfo[0][1];
        const songsDisplay = document.getElementById('songs-display');
        for (let i = 0; i < mainSongInfo.length; i++) {
            const songsName = mainSongInfo[i];
            console.log(songsName);
            const div = document.createElement('div');
            const artistName= songsName.artist.name;
            const titleName = songsName.title;
            div.innerHTML = `
                <div class="search-result col-md-8 mx-auto py-4">
                    <div class="single-result row align-items-center my-3 p-3">
                        <div class="col-md-9">
                            <h3 class="lyrics-name">${songsName.title}</h3>
                            <p class="author lead">${songsName.artist.name}</span></p>
                        </div>
                        <div class="col-md-3 text-md-right text-center">
                            <button onclick="GetLyrics(${artistName}, ${titleName})" class="btn btn-success">Get Lyrics</button>
                            <div>  

                            </div>
                        </div>
                    </div>
                </div>
            `
            songsDisplay.appendChild(div);
        }
    })
})

function GetLyrics(artist, title){
    console.log(artist,title);
    // fetch(`https://api.lyrics.ovh//v1/${artist}/${title}`)
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data)
    // })
}