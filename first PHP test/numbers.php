<?php
$first_number = 1;
$second_number = -1.2;
echo $first_number;
echo "\n";
echo $second_number;
?>

<?php
echo 16 - 4;
?>

<?php
$last_month = 1187.23;
$this_month = 1089.98;
echo $last_month - $this_month;
$difference = $last_month - $this_month;
?>

<?php
$num_languages = 4;
$months = 11;
$days = $months * 16;
$days_per_language = $days / $num_languages;
echo $days_per_language;
?>

<?php
echo 8 ** 2;
?>

<?php
echo 82 % 6;
?>

<?php
echo 94 - 4.25 + 7 - (23.50 + 23.50 * .2) + 20 / 4;
?>

<?php
$my_num = 23;
$answer = $my_num;
$answer += 2;
$answer *= 2;
$answer -= 2;
$answer /= 2;
$answer -= $my_num;
echo $answer;