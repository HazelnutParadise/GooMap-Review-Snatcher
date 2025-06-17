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
  let searchUUID = "";
  let reviewUUID = "";

  // 生成 UUID
  const generateUUID = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };
  const handleReset = () => {
    searchInputStr = "";
    selectedStore = "";
    pagesToFetch = 1;
    storeData = [];
    reviews = [];
    searchUUID = "";
    reviewUUID = "";
  };

  const handleSearch = async () => {
    isLoading = true;
    console.log(searchInputStr);
    if (searchInputStr === "") {
      alert("請輸入搜尋關鍵字");
      isLoading = false;
      return;
    }

    // 生成新的 UUID
    searchUUID = generateUUID();

    try {
      await pollForSearchResults();
    } catch (e) {
      console.error(e);
      alert("無法取得搜尋結果");
      isLoading = false;
    }
  };

  const pollForSearchResults = async () => {
    try {
      const res = await fetch(
        searchStoreUrl + `?storeName=${searchInputStr}&uuid=${searchUUID}`
      );
      if (!res.ok) {
        console.error("Error:", res.statusText);
        alert("無法取得搜尋結果");
        isLoading = false;
        return;
      }

      const data = await res.json();
      console.log("Search response:", data);

      // 如果收到空陣列，表示正在查詢中，需要輪詢
      if (Array.isArray(data) && data.length === 0) {
        setTimeout(pollForSearchResults, 1000); // 1秒後重新查詢
        return;
      }

      // 如果收到資料，表示查詢完成
      if (Array.isArray(data) && data.length > 0) {
        storeData = data;
        if (storeData.length > 0) {
          selectedStore = storeData[0];
        }
        isLoading = false;
        return;
      }

      // 如果收到 null 或其他錯誤，表示查詢失敗
      alert("搜尋失敗");
      isLoading = false;
    } catch (e) {
      console.error(e);
      alert("無法取得搜尋結果");
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

    // 生成新的 UUID
    reviewUUID = generateUUID();

    try {
      await pollForReviewResults();
    } catch (e) {
      console.error(e);
      alert("無法取得評論");
      isLoading = false;
    }
  };

  const pollForReviewResults = async () => {
    try {
      const res = await fetch(
        getReviewsUrl +
          `?storeID=${selectedStore.ID}&pages=${pagesToFetch}&uuid=${reviewUUID}`
      );
      if (!res.ok) {
        console.error("Error:", res.statusText);
        alert("無法取得評論");
        isLoading = false;
        return;
      }

      const data = await res.json();
      console.log("Review response:", data);

      // 如果收到 null，表示正在查詢中，需要輪詢
      if (data === null) {
        setTimeout(pollForReviewResults, 1000); // 1秒後重新查詢
        return;
      }

      // 如果收到資料，表示查詢完成
      if (data && typeof data === "object") {
        reviews = data;
        isLoading = false;
        return;
      }

      // 其他情況表示查詢失敗
      alert("取得評論失敗");
      isLoading = false;
    } catch (e) {
      console.error(e);
      alert("無法取得評論");
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
      bind:searchInputStr
      bind:selectedStore
      bind:storeData
      bind:pagesToFetch
      {handleSearch}
      {handleGetReview}
    />
  {:else}
    <Result bind:reviews {selectedStore} {download} {handleReset} />
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
