<script>
    import InfoCard from './InfoCard.svelte';
    export let searchInputStr;
    export let selectedStore;
    export let pagesToFetch;
    export let handleSearch;
    export let handleGetReview;
    export let storeData = [];
    let form = null;
</script>



{#if  Object.keys(storeData).length !== 0}
    <form on:submit|preventDefault={handleGetReview} class="input-form chose-store" bind:this={form}>
        <div class="store-select-box">
            <label for="store">選擇店家</label>
            <select bind:value={selectedStore} class="store-select">
                {#each storeData as store}
                    <option value={store}>{store.Name}</option>
                {/each}
            </select>
        </div>
        <div class="pages-box">
            <label for="pages">輸入頁數，0代表全部</label>
            <input type="number" inputmode="numeric" name="pages" placeholder="輸入頁數" bind:value={pagesToFetch} />
        </div>
        <button type="submit" class="button">確定</button>
    </form>
{:else}
    <InfoCard/>
    <form on:submit|preventDefault={handleSearch} class="input-form" bind:this={form}>
        <input type="text" placeholder="輸入關鍵字" bind:value={searchInputStr} />
        <button type="submit" class="button">搜尋</button>
    </form>
{/if}


<style>
    .input-form {
        min-height: 100px;
        width: 500px;
        max-width: 90vw;
        padding: 20px;
        background-color: #70798C;
        border-radius: 20px;
        display: flex;
        justify-items: center;
        align-items: center;
    }

    .chose-store {
        flex-direction: column;
        align-items: start;
    }

    input[type="text"] {
        height: 40px;
        width: 80%;
        border-radius: 15px;
        border: none;
        padding: 5px;
        margin-right: 10px;
    }

    input[type="text"]:focus {
        border: 3px solid #0A0903;
    }

    input[type="number"] {
        height: 40px;
        width: 100%;
        border-radius: 15px;
        border: none;
        padding: 5px;
        margin-right: 10px;
    }

    button {
        height: 40px;
        width: 20%;
        border-radius: 15px;
        border: none;
        background-color: #0A0903;
        color: white;
        font-size: 1rem;
        cursor: pointer;
    }

    .button:hover {
        background-color: #f1f1f1;
        color: #0A0903;
    }

    .store-select {
        height: 40px;
        width: 100%;
        border-radius: 15px;
        border: none;
        padding: 5px;
        margin-right: 10px;
    }
    .store-select-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    .pages-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    label{
        font-weight: 500;
        font-size: large;
        color: white;
        margin-bottom: 5px;
    }
</style>