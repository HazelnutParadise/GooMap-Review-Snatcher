<script>
    let inputStr = '';
    let storeData = {};
    let isLoading = false;
    let form = null;
    const searchStoreUrl = ""
    const handleSearch = async() => {
        console.log(inputStr);
        const res = await fetch(searchStoreUrl)
        if (!res.ok) {
            console.error('Error:', res.statusText);
            alert('無法取得搜尋結果');
            return;
        }
        storeData = await res.json();
    }
</script>


{#if isLoading}
    <p>Loading...</p>
{:else if Object.keys(storeData).length > 0}
    <form on:submit|preventDefault={handleSearch} class="input-form" bind:this={form}>
        <input type="text" placeholder="輸入關鍵字" bind:value={inputStr} />
        <button type="submit">搜尋</button>
    </form>
{:else}
    <p>搜尋結果</p>
    <ul>
        <!-- todo -->
        {#each Object.keys(storeData) as key}
            <li>{key}: {storeData[key]}</li>
        {/each}
    </ul>
{/if}


<style>
    .input-form {
        height: 100px;
        width: 500px;
        max-width: 90vw;
        padding: 20px;
        background-color: #70798C;
        border-radius: 20px;
        display: flex;
        justify-items: center;
        align-items: center;
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
</style>