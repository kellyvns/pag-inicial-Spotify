 document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        { name: 'Bladee', image: './img/artista-bladee.png' },
        { name: 'Lana Del Rey', image: './img/artista-lanadelrey.png' },
        { name: 'Hole', image: './img/artista-hole.png' },
        { name: 'Pink Pantheress', image: './img/artista-pink.png'},
        { name: 'Yung Lean', image: './img/artista-yl.png' }
        ];
    
    
        const albumsData = [
        { name: '333', artist: 'Bladee', 
        image: './img/album-bladee.png' },
        { name: 'Crystal Castles', artist: 'Crystal Castles',
        image: './img/album-cc.png' },
        { name: 'Diamond Eyes', artist: 'Deftones',
        image: './img/album-deftones.png' },
        { name: 'Ultraviolence', artist: 'Lana Del Rey', 
        image: './img/album-lana.png' },
        { name: 'MIGNONNE (Mastered by Bernie Grundman', artist: 'Taeko Onuki',
        image:'./img/album-taeko.png' }
        ];

        const artistsGrid = document.querySelector('.artists-grid')
        const albumsGrid = document.querySelector('.albums-grid')
        
        artistsData.forEach( artist => {
            const artistCard = document.createElement('div')
            artistCard.classList.add('artist-card')
            
            artistCard.innerHTML = `
                <img src="${artist.image}" alt="imagem do  ${artist.name}">
                <h3>${artist.name}</h3> 
                <p>Artista</p>          
            `

          artistsGrid.appendChild(artistCard)

        })

        albumsData.forEach(album => {
            const albumCard = document.createElement('div')
            albumCard.classList.add('album-card')
        
            albumCard.innerHTML = `
                <img src="${album.image}" alt="Imagem do álbum ${album.name}">
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
            `
        
            albumsGrid.appendChild(albumCard);
        });
    
    
    }) 

   