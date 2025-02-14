<script>
    import { onMount } from "svelte";

    onMount(() => {
        const custom_call = (params) => {
        if (params.hasAd) {
            console.log("TD has AD");
        } else {
            console.log("TD AD Empty");
        }
        };

        const ONEAD_TEXT = {
        pub: {
            uid: "2000181",
            slotobj: document.getElementById("div-onead-draft"),
            player_mode: "text-drive",
            queryAdCallback: custom_call,
        },
        };

        window.ONEAD_text_pubs = window.ONEAD_text_pubs || [];
        window.ONEAD_text_pubs.push(ONEAD_TEXT);

        // 動態載入廣告腳本
        const script = document.createElement("script");
        script.src = "https://ad-specs.guoshipartners.com/static/js/ad-serv.min.js";
        script.async = true;
        document.body.appendChild(script);
    });
</script>

<div id="div-onead-draft"></div>
