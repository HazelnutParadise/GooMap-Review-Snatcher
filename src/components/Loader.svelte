<script>
    const loadingWords = ['loading', 'loading.', 'loading..', 'loading...'];
    let loadingWord = loadingWords[0];
    let index = 1;
    const interval = setInterval(() => {
        loadingWord = loadingWords[index];
        index = (index + 1) % loadingWords.length;
    }, 500);
</script>

<div class="loader-container">
    <p>{loadingWord}</p>
    <div class="loader"></div>
</div>

<style>
    .loader-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100px;
    }

    .loader {
        width: 48px;
        height: 48px;
        border: 5px solid #f3f3f3;
        border-top: 5px solid #3498db;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% {
        transform: rotate(0deg);
        }
        100% {
        transform: rotate(360deg);
        }
    }
</style>