<script>
    import { onMount } from 'svelte';
    import InputCard from '../components/InputCard.svelte';
    import Loader from '../components/Loader.svelte';
    export let title;
    export let subtitle;
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
        if (searchInputStr === "") {
            alert('請輸入搜尋關鍵字');
            isLoading = false;
            return;
        }
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
        if (selectedStore === "") {
            alert('請選擇店家');
            isLoading = false;
            return;
        }
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

    const download = (type) => {
        const a = document.createElement("a");
        let url = "";
        switch (type) {
            case "csv":
                // 添加 BOM 標記
                const BOM = new Uint8Array([0xEF, 0xBB, 0xBF]);
                // 建立 CSV 內容，加入標題列
                const headers = Object.keys(reviews[0]).join(',');
                const rows = reviews.map(row => 
                    Object.values(row)
                        .map(value => {
                            // 處理數值、字串中的特殊字元
                            if (typeof value === 'string') {
                                // 如果內容包含逗號、換行或雙引號，就用雙引號包起來
                                if (value.includes(',') || value.includes('\n') || value.includes('"')) {
                                    return `"${value.replace(/"/g, '""')}"`;
                                }
                            }
                            return value;
                        })
                        .join(',')
                );
                const csvContent = headers + '\n' + rows.join('\n');
                
                // 合併 BOM 和 CSV 內容
                const csvBlob = new Blob([BOM, csvContent], { type: 'text/csv;charset=utf-8' });
                url = window.URL.createObjectURL(csvBlob);
                
                a.href = url;
                a.download = `${selectedStore.Name}.csv`;
                a.click();
                break;
            case "json":
                const json = JSON.stringify(reviews, null, 2);
                const jsonBlob = new Blob([json], { type: 'application/json;charset=utf-8' });
                url = window.URL.createObjectURL(jsonBlob);
                a.href = url;
                a.download = `${selectedStore.Name}.json`;
                a.click();
                break;
            default:
                break;
        }
        window.URL.revokeObjectURL(url);
    }

    onMount(async () => {
        getNavbar();
    });
</script>

<svelte:head>
    <title>{title} - 榛果繽紛樂</title>
</svelte:head>

<div class="container">
    <img src="https://src.hazelnut-paradise.com/GooMapReviewSnatcher.png" alt="GooMapReviewSnatcher" style="width: 100%; max-width: 150px;"/>
    <div class="title-box">
        <h1 class="title">{title}</h1>
        <h2 class="subtitle">{subtitle}</h2>
    </div>
    {#if isLoading}
        <Loader/>
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
    <button class="reset-button button" on:click={()=> {
        searchInputStr = '';
        storeData = [];
        reviews = [];
    }}>查詢其他商家</button>
    <div class="review-box">
        <h3 class="store-name">{selectedStore.Name}</h3>
        <button class="download-button button" on:click={() => download("csv")}>下載 CSV</button>
        <button class="download-button button" on:click={() => download("json")}>下載 JSON</button>
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
    </div>
    {/if}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding-top: 20px;
        padding-bottom: 20px;
        /* background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); */
    }

    .title-box {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        margin-bottom: 1rem;
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

    .review-box {
        width: 80%;
    }

    .store-name {
        font-size: 1.5rem;
    }

    .review-table {
        border-collapse: collapse;
        width: 100%;
        background-color: white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        overflow: hidden;
    }

    .review-table th {
        background-color: #2c3e50;
        color: white;
        padding: 12px 15px;
        text-align: left;
        font-weight: 600;
    }

    .review-table td {
        padding: 12px 15px;
        border-bottom: 1px solid #ddd;
    }

    .review-table tbody tr:hover {
        background-color: #f5f5f5;
        transition: background-color 0.2s ease;
    }

    .review-table tbody tr:last-child td {
        border-bottom: none;
    }

    .review-table-box {
        width: 100%;
        height: 500px;
        overflow: auto;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        padding: 1rem;
    }

    /* 美化捲軸 */
    .review-table-box::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    .review-table-box::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
    }

    .review-table-box::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 4px;
    }

    .review-table-box::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    .reset-button {
        height: 50px;
        width: 20%;
        min-width: 200px;
        border-radius: 15px;
        border: none;
        background-color: #0A0903;
        color: white;
        font-size: 1rem;
        cursor: pointer;
        margin-bottom: 1rem;
    }

    .download-button {
        height: 40px;
        width: 20%;
        min-width: 200px;
        border-radius: 15px;
        border: none;
        background-color: #0A0903;
        color: white;
        font-size: 1rem;
        cursor: pointer;
        margin-bottom: 1rem;
    }

    .button:hover {
        background-color: #f1f1f1;
        color: #0A0903;
    }

    @keyframes pop {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
</style>
