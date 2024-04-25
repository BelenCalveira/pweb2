

function getAnime(done){
    const results = fetch("https://animechan.xyz/api/random")
          .then(response => response.json())
          .then(data => done(data));
}
getAnime(data =>{
    console.log(data);
})