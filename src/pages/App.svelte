<script>
  import { onMount } from "svelte";
  import InputCard from "../components/InputCard.svelte";
  import Loader from "../components/Loader.svelte";
  import Result from "../components/Result.svelte";
  export let title;
  export let subtitle;
  const searchStoreUrl = "/api/search";
  const getReviewsUrl = "/api/reviews";
  let searchInputStr = "";
  let selectedStore = "";
  let pagesToFetch = 1;
  let storeData = [];
  let reviews = [];

  let isLoading = false;
  const handleSearch = async () => {
    isLoading = true;
    console.log(searchInputStr);
    if (searchInputStr === "") {
      alert("請輸入搜尋關鍵字");
      isLoading = false;
      return;
    }
    try {
      const res = await fetch(searchStoreUrl + `?storeName=${searchInputStr}`);
      if (!res.ok) {
        console.error("Error:", res.statusText);
        alert("無法取得搜尋結果");
        return;
      }
      storeData = await res.json();
      console.log(storeData);
    } catch (e) {
      console.error(e);
      alert("無法取得搜尋結果");
    } finally {
      isLoading = false;
    }
  };
  const handleGetReview = async () => {
    isLoading = true;
    console.log(selectedStore);
    if (selectedStore === "") {
      alert("請選擇店家");
      isLoading = false;
      return;
    }
    try {
      const res = await fetch(
        getReviewsUrl + `?storeID=${selectedStore.ID}&pages=${pagesToFetch}`
      );
      if (!res.ok) {
        console.error("Error:", res.statusText);
        alert("無法取得評論");
        return;
      }
      reviews = await res.json();
      console.log(reviews);
    } catch (e) {
      console.error(e);
      alert("無法取得評論");
    } finally {
      isLoading = false;
    }
  };

  const download = (type) => {
    const a = document.createElement("a");
    let url = "";
    switch (type) {
      case "csv":
        // 添加 BOM 標記
        const BOM = new Uint8Array([0xef, 0xbb, 0xbf]);
        // 建立 CSV 內容，加入標題列
        const headers = Object.keys(reviews[0]).join(",");
        const rows = reviews.map((row) =>
          Object.values(row)
            .map((value) => {
              // 處理數值、字串中的特殊字元
              if (typeof value === "string") {
                // 如果內容包含逗號、換行或雙引號，就用雙引號包起來
                if (
                  value.includes(",") ||
                  value.includes("\n") ||
                  value.includes('"')
                ) {
                  return `"${value.replace(/"/g, '""')}"`;
                }
              }
              return value;
            })
            .join(",")
        );
        const csvContent = headers + "\n" + rows.join("\n");

        // 合併 BOM 和 CSV 內容
        const csvBlob = new Blob([BOM, csvContent], {
          type: "text/csv;charset=utf-8",
        });
        url = window.URL.createObjectURL(csvBlob);

        a.href = url;
        a.download = `${selectedStore.Name}.csv`;
        a.click();
        break;
      case "json":
        const json = JSON.stringify(reviews, null, 2);
        const jsonBlob = new Blob([json], {
          type: "application/json;charset=utf-8",
        });
        url = window.URL.createObjectURL(jsonBlob);
        a.href = url;
        a.download = `${selectedStore.Name}.json`;
        a.click();
        break;
      default:
        break;
    }
    window.URL.revokeObjectURL(url);
  };

  onMount(async () => {
    getNavbar();
  });
</script>

<svelte:head>
  <title>{title} - 榛果繽紛樂</title>
</svelte:head>

<div class="container">
  <img
    src="https://src.hazelnut-paradise.com/GooMapReviewSnatcher.png"
    alt="GooMapReviewSnatcher"
    style="width: 100%; max-width: 150px;"
  />
  <div class="title-box">
    <h1 class="title">{title}</h1>
    <h2 class="subtitle">{subtitle}</h2>
  </div>
  {#if isLoading}
    <Loader />
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
    <Result {selectedStore} {searchInputStr} {storeData} {reviews} {download} />
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
    color: #0a0903;
    margin: 0;
  }

  @keyframes pop {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
