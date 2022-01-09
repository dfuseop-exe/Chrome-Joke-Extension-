
try {
    const fetchJoke = async()=>{
        const fetchdata = await fetch("https://icanhazdadjoke.com/slack");
        console.log(fetchdata);
         const joke =  await fetchdata.json();
         const element = document.getElementById("jokeElement");
         const jokeText = joke.attachments[0].text;
         
         element.innerHTML = jokeText;
     }
     fetchJoke();

} catch (error) {
    console.log(error);
}

 