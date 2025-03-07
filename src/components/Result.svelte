<script>
  import { onMount } from "svelte";

  export let selectedStore;
  export let searchInputStr;
  export let storeData;
  export let reviews;
  export let download;

  const mining = async (openNewPage) => {
    const reviewContent = reviews.map((review) => review.content);
    let dataUUID = "";

    const res = await fetch("/api/review-mining", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        storeName: selectedStore.Name,
        reviews: reviewContent,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      dataUUID = data.dataUUID;
    } else {
      console.error("Error:", res.statusText);
      alert("無法使用 StoreCoach 探勘");
      return;
    }
    const a = document.createElement("a");
    a.href = `https://storecoach.hazelnut-paradise.com/review-mining/${dataUUID}`;
    if (openNewPage) a.target = "_blank";
    a.click();
  };

  let queryParams = {};

  onMount(async () => {
    const params = new URLSearchParams(window.location.search);
    queryParams = Object.fromEntries(params.entries());
    console.log(queryParams);
    if (queryParams.mode && queryParams.mode === "storecoach") {
      await mining(false);
    }
  });
</script>

<button
  class="reset-button button"
  on:click={() => {
    searchInputStr = "";
    storeData = [];
    reviews = [];
  }}>查詢其他商家</button
>
<div class="review-box">
  <h3 class="store-name">{selectedStore.Name}</h3>
  <button class="download-button button" on:click={() => download("csv")}
    >下載 CSV</button
  >
  <button class="download-button button" on:click={() => download("json")}
    >下載 JSON</button
  >
  <button class="mining-button button" on:click={() => mining(true)}
    >使用 StoreCoach 探勘</button
  >
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

<style>
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
    border: 2px solid #0a0903;
    background-color: #0a0903;
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
    border: 1px solid #0a0903;
    background-color: #0a0903;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 1rem;
  }

  .button:hover {
    background-color: #f1f1f1;
    color: #0a0903;
  }

  .mining-button {
    height: 40px;
    width: 20%;
    min-width: 200px;
    border-radius: 15px;
    border: 1px solid #ffa400;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 1rem;
    background-color: #ffa400;
    color: black;
  }

  .mining-button:hover {
    background-color: rgb(255, 128, 0);
    background-color: rgb(255, 128, 0);
  }
</style>
