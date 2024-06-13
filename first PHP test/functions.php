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
?>

<?php
function calculateTip($total, $tip = 20)
{
    return $total * (1 + $tip/100);
}
echo calculateTip(100, 25);
echo "\n";
echo calculateTip(100);
echo "\n";
echo calculateTip(65, 15);
?>

<?php

$string_one = "you have teeth";
$string_two = "toads are nice";
$string_three = "brown is my favorite color";

function convertToQuestion(&$str)
{
    $str = "Do you think " . $str . "?\n";
}


convertToQuestion($string_one);
convertToQuestion($string_two);
convertToQuestion($string_three);

echo $string_one;
echo $string_two;
echo $string_three;

?>

<?php

$language = "PHP";
$topic = "scope";

function generateLessonName($concept)
{
    global $language;
    return $language . ": " . $concept;
}

echo generateLessonName($topic);
?>


#We can package a set of instructions within a named function to reuse whenever we’d like.
#When we invoke a function, the computer will execute the function body, specified by the code block following the parameters list.
#Functions can return a value by using the return keyword otherwise they return NULL which means no value.
#We can store the return value of a function in a variable or use it any other way we’d use a value.
#We can define functions with parameters which are variables we can refer to throughout our function’s body.
#When invoking functions, the values that we give them are called arguments.
#Functions can have multiple parameters.
#The order in which the arguments are passed in decides which parameters they correspond to.
#You can make an argument optional by providing its corresponding parameter with a default value.
#If you prepend a parameter with the reference sign (&) that argument will be passed by reference.
#Variables within functions have local scope and can not be accessed from outside the function.
#Use the global keyword to use variables from the global scope within a function.
