const apiKey = 'AIzaSyAiY9AK8SFHUfTBsbAeA5tBAJcAKHRVx5s'; // Coloque sua API Key aqui
const channelId = 'UC5BuhdWduOtqICz6Y5RLwtQ'; // Coloque o ID do canal aqui

// Função para pegar o vídeo mais recente
async function getMostRecentVideo() {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=1&type=video`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const loadingElement = document.getElementById('loading');
        loadingElement.style.display = 'none'; // Esconde a mensagem de carregamento
        
        if (data.items && data.items.length > 0) {
            const videoId = data.items[0].id.videoId;
            const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

            // Exibindo o vídeo no HTML
            const videoEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
            const videoContainer = document.getElementById('video-container');
            videoContainer.innerHTML = `
                <iframe width="560" height="315" src="${videoEmbedUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;
        } else {
            console.log('Nenhum vídeo encontrado.');
        }
    } catch (error) {
        console.error('Erro ao buscar o vídeo:', error);
    }
}

// Chama a função para pegar o vídeo
getMostRecentVideo();
