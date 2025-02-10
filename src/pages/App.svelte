<script lang="ts">
    import InputCard from '../components/InputCard.svelte'
    export let title: string
    export let subtitle: string
    const searchStoreUrl = "https://api.jsonbin.io/b/60f1f1b4f7b5c734b689f3b4";
    let inputStr = '';
    let storeData = {};

    let isLoading = false;
    const handleSearch = async() => {
        isLoading = true;
        console.log(inputStr);
        try{
            const res = await fetch(searchStoreUrl)
            if (!res.ok) {
                console.error('Error:', res.statusText);
                alert('無法取得搜尋結果');
                return;
            }
            storeData = await res.json();
        }catch(e){
            console.error(e);
            alert('無法取得搜尋結果');
        }finally {
            isLoading = false;
        }
    }
    const handleGetReview = async() => {
        // todo
    }
</script>

<svelte:head>
    <title>{title} - 榛果繽紛樂</title>
</svelte:head>

<div class="container">
    <div class="title-box">
        <h1 class="title">{title}</h1>
        <h2 class="subtitle">{subtitle}</h2>
    </div>
    <InputCard {isLoading}{inputStr}{handleSearch}{handleGetReview}{storeData}/>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    }

    .title-box {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        margin-bottom: 2rem;
        transition: transform 0.3s ease;
    }

    .title {
        font-size: 2.5rem;
        color: #2c3e50;
        margin: 0;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }

    .title-box:hover {
        transform: scale(1.05);
    }

    .subtitle {
        font-size: 1.5rem;
        color: #0A0903;
        margin: 0;
    }

    @keyframes pop {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
</style>
