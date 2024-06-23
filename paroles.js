document.addEventListener('DOMContentLoaded', function() {
    const albumSelect = document.getElementById('album-select');
    const songSelect = document.getElementById('song-select');
    const lyricsDiv = document.getElementById('lyrics');

    const options = {
        cheshireCat: [
            { value: '#', text: '-- Chanson --' },
            { value: 'carousel', text: 'Carousel' },
            { value: 'm&ms', text: 'M+Ms' },
            { value: 'fentoozler', text: 'Fentoozler' },
            { value: 'touchdown boy', text: 'Touchdown Boy' },
            { value: 'strings', text: 'Strings' },
            { value: 'peggy sue', text: 'Peggy Sue' },
            { value: 'sometimes', text: 'Sometimes' },
            { value: 'does my breath smell', text: 'Does My Breath Smell?' },
            { value: 'cacophony', text: 'Cacophony' },
            { value: 'tv', text: 'TV' },
            { value: 'toast and bananas', text: 'Toast And Bananas' },
            { value: 'wasting time', text: 'Wasting Time' },
            { value: 'romeo and rebecca', text: 'Romeo And Rebecca' },
            { value: 'ben wah balls', text: 'Ben Wah Balls' },
            { value: 'just about done', text: 'Just About Done' },
            { value: 'depends', text: 'Depends' }
        ],
        dudeRanch: [
            { value: '#', text: '-- Chanson --' },
            { value: 'pathetic', text: 'Pathetic' },
            { value: 'voyeur', text: 'Voyeur' },
            { value: 'dammit', text: 'Dammit' },
            { value: 'boring', text: 'Boring' },
            { value: 'dick lips', text: 'Dick Lips' },
            { value: 'waggy', text: 'Waggy' },
            { value: 'enthused', text: 'Enthused' },
            { value: 'untitled', text: 'Untitled' },
            { value: 'apple shampoo', text: 'Apple Shampoo' },
            { value: 'emo', text: 'Emo' },
            { value: 'josie', text: 'Josie' },
            { value: 'a new hope', text: 'A New Hope' },
            { value: 'degenerate', text: 'Degenerate' },
            { value: 'lemmings', text: 'Lemmings' },
            { value: 'Im sorry', text: 'I m Sorry' }
        ],
        enemaOfTheState: [
            { value: '#', text: '-- Chanson --' },
            { value: 'dumpweed', text: 'Dumpweed' },
            { value: 'don t leave me', text: 'Don t Leave Me' },
            { value: 'aliens exist', text: 'Aliens Exist' },
            { value: 'going away to college', text: 'Going Away To College' },
            { value: 'whats my age again', text: 'What s My Age Again?' },
            { value: 'dysentery gary', text: 'Dysentery Gary' },
            { value: 'adams song', text: 'Adam s Song' },
            { value: 'all the small things', text: 'All The Small Things' },
            { value: 'the party song', text: 'The Party Song' },
            { value: 'mutt', text: 'Mutt' },
            { value: 'wendy clear', text: 'Wendy Clear' },
            { value: 'anthem', text: 'Anthem' }
        ],
        takeOffYourPantsAndJacket: [
            { value: '#', text: '-- Chanson --' },
            { value: 'anthem part two', text: 'Anthem Part 2' },
            { value: 'online songs', text: 'Online Songs' },
            { value: 'first date', text: 'First Date' },
            { value: 'happy holidays you bastard', text: 'Happy Holidays, You Bastard!' },
            { value: 'story of a lonely guy', text: 'Story Of A Lonely Guy' },
            { value: 'the rock show', text: 'The Rock Show' },
            { value: 'stay together for the kids', text: 'Stay Together For The Kids' },
            { value: 'roller coaster', text: 'Roller Coaster' },
            { value: 'reckless abandon', text: 'Reckless Abandon' },
            { value: 'everytime i look for you', text: 'Everytime I Look For You' },
            { value: 'give me one good reason', text: 'Give Me One Good Reason' },
            { value: 'shut up', text: 'Shut Up' },
            { value: 'please take me home', text: 'Please Take Me Home' },
            { value: 'time to break up', text: 'Time To Break Up' },
            { value: 'mothers day', text: 'Mother s Day' },
            { value: 'what went wrong', text: 'What Went Wrong' },
            { value: 'fuck a dog', text: 'Fuck A Dog' },
            { value: 'dont tell me its over', text: 'Don t Tell Me It s Over' },
            { value: 'when you fucked grandpa', text: 'When You Fucked Grandpa' }
        ],
        blink182: [
            { value: '#', text: '-- Chanson --' },
            { value: 'feelin this', text: 'Feeling This' },
            { value: 'obvious', text: 'Obvious' },
            { value: 'i miss you', text: 'I Miss You' },
            { value: 'violence', text: 'Violence' },
            { value: 'stockholm syndrome', text: 'Stockholm Syndrome' },
            { value: 'down', text: 'Down' },
            { value: 'the fallen interlude', text: 'The Fallen Interlude' },
            { value: 'go', text: 'Go' },
            { value: 'asthenia', text: 'Asthenia' },
            { value: 'always', text: 'Always' },
            { value: 'easy target', text: 'Easy Target' },
            { value: 'all of this', text: 'All Of This' },
            { value: 'here s your letter', text: 'Here s Your Letter' },
            { value: 'im lost without you', text: 'I m Lost Without You' }
        ],
        neighborhoods: [
            { value: '#', text: '-- Chanson --' },
            { value: 'ghost on the dance floor', text: 'Ghost On The Dance Floor' },
            { value: 'natives', text: 'Natives' },
            { value: 'up all night', text: 'Up All Night' },
            { value: 'after midnight', text: 'After Midnight' },
            { value: 'hearts all gone', text: 'Heart s All Gone' },
            { value: 'wishing well', text: 'Wishing Well' },
            { value: 'kaleidoscope', text: 'Kaleidoscope' },
            { value: 'this is home', text: 'This Is Home' },
            { value: 'mh 4.18.2011', text: 'MH 4.18.2011' },
            { value: 'love is dangerous', text: 'Love Is Dangerous' }
        ],
        california: [
            { value: '#', text: '-- Chanson --' },
            { value: 'cynical', text: 'Cynical' },
            { value: 'bored to death', text: 'Bored To Death' },
            { value: 'she s out of her mind', text: 'She s Out Of Her Mind' },
            { value: 'los angeles', text: 'Los Angeles' },
            { value: 'sober', text: 'Sober' },
            { value: 'built this pool', text: 'Built This Pool' },
            { value: 'no future', text: 'No Future' },
            { value: 'home is such a lonely place', text: 'Home Is Such A Lonely Place' },
            { value: 'kings of the weekend', text: 'Kings Of The Week-end' },
            { value: 'teenage satellites', text: 'Teenage Satellites' },
            { value: 'left alone', text: 'Left Alone' },
            { value: 'rabbit hole', text: 'Rabbit Hole' },
            { value: 'san diego', text: 'San Diego' },
            { value: 'the only thing that matters', text: 'The Only Thing That Matters' },
            { value: 'california', text: 'California' },
            { value: 'brohemian rhapsody', text: 'Brohemian Rhapsody' }
        ],
        californiaDeluxe: [
            { value: '#', text: '-- Chanson --' },
            { value: 'parking lot', text: 'Parking Lot' },
            { value: 'misery', text: 'Misery' },
            { value: 'good old days', text: 'Good Old Days' },
            { value: 'don t mean anything', text: 'Don t Mean Anything' },
            { value: 'hey im sorry', text: 'Hey I m Sorry' },
            { value: 'last train home', text: 'Last Train Home' },
            { value: 'wildfire', text: 'Wildfire' },
            { value: '6/8', text: '6/8' },
            { value: 'long lost feeling', text: 'Long Lost Feeling' },
            { value: 'bottom of the ocean', text: 'Bottom Of The Ocean' },
            { value: 'can t get you more pregnant', text: 'Can t Get You More Pregnant' }
        ],
        nine: [
            { value: '#', text: '-- Chanson --' },
            { value: 'the first time', text: 'The First Time' },
            { value: 'happy days', text: 'Happy Days' },
            { value: 'heaven', text: 'Heaven' },
            { value: 'darkside', text: 'Darkside' },
            { value: 'blame it on my youth', text: 'Blame It On My Youth' },
            { value: 'generational divide', text: 'Generational Divide' },
            { value: 'run away', text: 'Run Away' },
            { value: 'black rain', text: 'Black Rain' },
            { value: 'i really wish i hated you', text: 'I Really Wish I Hated You' },
            { value: 'pin the grenade', text: 'Pin The Grenade' },
            { value: 'no heart to speak of', text: 'No Heart To Speak Of' },
            { value: 'ransom', text: 'Ransom' },
            { value: 'on some emo shit', text: 'On Some Emo Shit' },
            { value: 'hungover you', text: 'Hungover You' },
            { value: 'remember to forget me', text: 'Remember To Forget Me' },
            { value: 'out of my head', text: 'Out Of My Head' }
        ],
        oneMoreTime: [
            { value: '#', text: '-- Chanson --' },
            { value: 'anthem part 3', text: 'Anthem Part 3' },
            { value: 'dance with me', text: 'Dance With Me' },
            { value: 'fell in love', text: 'Fell In Love' },
            { value: 'terrified', text: 'Terrified' },
            { value: 'one more time', text: 'One More Time' },
            { value: 'more than you know', text: 'More Than You Know' },
            { value: 'turn this off', text: 'Turn This Off!' },
            { value: 'when we were young', text: 'When We Were Young' },
            { value: 'edging', text: 'Edging' },
            { value: 'you dont know what youve got', text: 'You Don t Know What You ve Got' },
            { value: 'blink wave', text: 'Blink Wave' },
            { value: 'bad news', text: 'Bad News' },
            { value: 'hurt(interlude)', text: 'Hurt (Interlude)' },
            { value: 'turpentine', text: 'Turpentine' },
            { value: 'fuck face', text: 'Fuck Face' },
            { value: 'other side', text: 'Other Side' },
            { value: 'childhood', text: 'Childhood' },
            { value: 'cut me off', text: 'Cut Me Off' },
            { value: 'see you', text: 'See You' }
        ],
    };

    albumSelect.addEventListener('change', function() {
        const selectedCategory = this.value;
        updateSongSelect(selectedCategory);
    });

    function updateSongSelect(category) {
        // Vider le second select
        songSelect.innerHTML = '';

        // Ajouter les nouvelles options
        if (options[category]) {
            options[category].forEach(function(option) {
                const newOption = document.createElement('option');
                newOption.value = option.value;
                newOption.textContent = option.text;
                songSelect.appendChild(newOption);
            });
        }
    }

    // Initialiser le second select avec la première catégorie par défaut
    updateSongSelect(albumSelect.value);

    // Récupérer la chanson choisie et faire l'appel API
    songSelect.addEventListener('change', function() {
        const selectedSong = songSelect.value;
        const apiUrl = `https://api.lyrics.ovh/v1/blink-182/${selectedSong}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erreur HTTP! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                lyricsDiv.textContent = data.lyrics;
            })
            .catch(error => {
                console.error('Erreur lors de l\'appel API:', error);
                lyricsDiv.textContent = 'Erreur lors de la récupération des paroles.';
            });
    });
});
