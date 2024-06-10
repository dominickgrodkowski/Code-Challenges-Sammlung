<?php
function praisePHP()
{
    echo "PHP is a great language!";

}
praisePHP();
?>

<?php
function inflateEgo()
{
    echo "I am the best programmer!";
}
inflateEgo();
?>

<?php
function printStringReturnNumber()
{
    echo "I am the best programmer!";
    return 100;
}
$my_num = printStringReturnNumber();
echo "\n$my_num";
?>

<?php

function notFound()
{
    echo "ERROR: Page not found!\n";
    return 404;
}

function greetLearner()
{
    echo "Hello, Learner!\n";
    echo "I hope you're (still) enjoying PHP!\n";
    echo "Greetings, Dominick\n";
    return "<3";
}


$error = notFound();
$heart = greetLearner();

echo "I received a $error, but it's ok because I also received $heart.";
?>

<?php
function first()
{
    return "You did it!\n";
}

function second()
{
    return "You're amazing!\n";
}

function third()
{
    return "You're a coding hero!\n";
}

echo first() . second() . third();
?>
<?php
function createVacuum()
{echo "Creating a vacuum\n";}
?>

<?php
function increaseEnthusiasm($name)
{
    return $name . "!";
}
echo increaseEnthusiasm("Dominick");
?>

<?php
function repeatThreeTimes($hype)
{
    return $hype . $hype . $hype;
}
echo repeatThreeTimes("Hip ");

echo increaseEnthusiasm(repeatThreeTimes("Hooray"));
?>

<?php
function calculateArea($height, $width)
{
    return $height * $width;
}
echo calculateArea(5, 5);
function calculateVolume($height, $width, $depth)
{
    return $height * $width * $depth;
}
echo calculateVolume(5, 5, 5);
