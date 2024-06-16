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
            { value: 'carrot', text: 'Carotte' },
            { value: 'lettuce', text: 'Laitue' },
            { value: 'pepper', text: 'Poivron' }
        ],
        takeOffYourPantsAndJacket: [
            { value: 'carrot', text: 'Carotte' },
            { value: 'lettuce', text: 'Laitue' },
            { value: 'pepper', text: 'Poivron' }
        ],
        blink182: [
            { value: 'carrot', text: 'Carotte' },
            { value: 'lettuce', text: 'Laitue' },
            { value: 'pepper', text: 'Poivron' }
        ],
        neighborhoods: [
            { value: 'carrot', text: 'Carotte' },
            { value: 'lettuce', text: 'Laitue' },
            { value: 'pepper', text: 'Poivron' }
        ],
        california: [
            { value: 'carrot', text: 'Carotte' },
            { value: 'lettuce', text: 'Laitue' },
            { value: 'pepper', text: 'Poivron' }
        ],
        californiaDeluxe: [
            { value: 'carrot', text: 'Carotte' },
            { value: 'lettuce', text: 'Laitue' },
            { value: 'pepper', text: 'Poivron' }
        ],
        nine: [
            { value: 'carrot', text: 'Carotte' },
            { value: 'lettuce', text: 'Laitue' },
            { value: 'pepper', text: 'Poivron' }
        ],
        oneMoreTime: [
            { value: 'carrot', text: 'Carotte' },
            { value: 'lettuce', text: 'Laitue' },
            { value: 'pepper', text: 'Poivron' }
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
