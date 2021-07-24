

$(function () {
    // 送信
    $('form').submit(function () {
        var frequency = $('[name="frequency"] option:selected').val();
        var btcbf = $('input[name="BTCamountBF"]').val();
        var ethbf = $('input[name="ETHamountBF"]').val();
        var xrpbf = $('input[name="XRPamountBF"]').val();
        var xlmbf = $('input[name="XLMamountBF"]').val();
        
        var msg = `積立申請フォーム\n積立タイミング：${frequency}\nBTC：${btcbf}円\nETH：${ethbf}円\nXRP：${xrpbf}円\nXLM：${xlmbf}円`;
        sendText(msg);

        return false;
    });
});
