<script lang="ts">
    import InputCard from '../components/InputCard.svelte'
    export let title: string
    export let subtitle: string
    const searchStoreUrl = "/api/search";
    const getReviewsUrl = "/api/reviews";
    let searchInputStr = '';
    let selectedStore = '';
    let pagesToFetch = 1;
    let storeData = [];
    let reviews = [];

    let isLoading = false;
    const handleSearch = async() => {
        isLoading = true;
        console.log(searchInputStr);
        try{
            const res = await fetch(searchStoreUrl+`?storeName=${searchInputStr}`);
            if (!res.ok) {
                console.error('Error:', res.statusText);
                alert('無法取得搜尋結果');
                return;
            }
            storeData = await res.json();
            console.log(storeData);
        }catch(e){
            console.error(e);
            alert('無法取得搜尋結果');
        }finally {
            isLoading = false;
        }
    }
    const handleGetReview = async() => {
        isLoading = true;
        console.log(selectedStore);
        try{
            const res = await fetch(getReviewsUrl+`?storeID=${selectedStore.ID}&pages=${pagesToFetch}`);
            if (!res.ok) {
                console.error('Error:', res.statusText);
                alert('無法取得評論');
                return;
            }
            reviews = await res.json();
            console.log(reviews);
        }catch(e){
            console.error(e);
            alert('無法取得評論');
        }finally {
            isLoading = false;
        }
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
    {#if isLoading}
        loading...
    {:else if Object.keys(reviews).length == 0}
    <InputCard
        bind:pagesToFetch
        bind:searchInputStr
        bind:selectedStore
        {handleSearch}
        {handleGetReview}
        {storeData}
    />
    {:else}
    <button class="reset-button" on:click={()=> {
        searchInputStr = '';
        storeData = [];
        reviews = [];
    }}>查詢其他商家</button>
    <h3>{selectedStore.Name}</h3>
    <div class="review-table-box">
        <table class="review-table">
            <thead>
                <tr>
                {#each Object.keys(reviews[0]) as key}
                    <th>{key}</th>
                {/each}
                </tr>
            </thead>
            <tbody>
                {#each reviews as review}
                    <tr>
                        {#each Object.values(review) as value}
                            <td>{value}</td>
                        {/each}
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
    {/if}
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

    .review-table {
        border-collapse: collapse;
    }

    .review-table-box {
        width: 80%;
        height: 500px;
        overflow: auto;
    }

    .reset-button {
        height: 40px;
        width: 20%;
        border-radius: 15px;
        border: none;
        background-color: #0A0903;
        color: white;
        font-size: 1rem;
        cursor: pointer;
        margin-bottom: 1rem;
    }

    @keyframes pop {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
</style>
