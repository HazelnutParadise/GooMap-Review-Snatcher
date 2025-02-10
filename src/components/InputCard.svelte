<script>
    let inputStr = '';
    let fetchPromise;
    function handleSearch() {
        console.log(inputStr);
        fetchPromise= fetch(`https://api.github.com/users/${inputStr}`);
    }
</script>


<form on:submit|preventDefault={handleSearch} class="input-form">
    <input type="text" placeholder="輸入關鍵字" bind:value={inputStr} />
    <button type="submit">搜尋</button>
</form>

{#if fetchPromise}
    {#await fetchPromise}
    <p>載入中</p>
    {:then res}
        {#if res.ok}
            <p>成功</p>
        {:else}
        <p>失敗</p>
        {/if}
    {:catch err}
        <p>失敗</p>
    {/await}
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