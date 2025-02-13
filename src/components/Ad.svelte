<div id="div-onead-draft"></div>
<script>
var custom_call = function (params) {
    if (params.hasAd) {
        console.log('TD has AD')
    } else {
        console.log('TD AD Empty')
    }
    }
ONEAD_TEXT = {};
ONEAD_TEXT.pub = {};
ONEAD_TEXT.pub.uid = "2000181";
ONEAD_TEXT.pub.slotobj = document.getElementById("div-onead-draft");
ONEAD_TEXT.pub.player_mode = "text-drive";
ONEAD_TEXT.pub.queryAdCallback = custom_call;
window.ONEAD_text_pubs = window.ONEAD_text_pubs || [];
ONEAD_text_pubs.push(ONEAD_TEXT);
</script>

