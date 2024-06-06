<?php
$riel = 2103942;
$kyat = 19092;
$krone = 109;
$lek = 9094;
echo "At the start of the transaction, you had $riel riel, $kyat kyat, $krone krone, and $lek lek.";
?>
<?php
$riel_to_usd = 0.00025;
$kyat_to_usd = 0.00066;
$krone_to_usd = 0.11;
$lek_to_usd = 0.0090;
$usd_from_riel = $riel * $riel_to_usd;
$usd_from_kyat = $kyat * $kyat_to_usd;
$usd_from_krone = $krone * $krone_to_usd;
$usd_from_lek = $lek * $lek_to_usd;
# minus 1$ fee per conversion
$usd_from_riel -= 1;
$usd_from_kyat -= 1;
$usd_from_krone -= 1;
$usd_from_lek -= 1;
$total_usd = $usd_from_riel + $usd_from_kyat + $usd_from_krone + $usd_from_lek;
echo "\nAfter the transaction, you'll have $total_usd USD.";
# rounding the number to 2 decimal places
$rounded_number = round($total_usd, 2);
echo "\nAfter the transaction, you'll have $rounded_number USD.";
