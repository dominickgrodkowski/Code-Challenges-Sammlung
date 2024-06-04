<?php
echo 'Hello, World';
?>
<?php
echo "1. learn PHP";
echo "\n2. write PHP";
echo "\n3. Learn to have \"fun\" with PHP";
?>

<?php
echo "Git" . "Hub";
echo "\nMy name is:"  . " Dominick";
echo "\n" . "Git".  "Hub".  "programmer";
?>

<?php
$myName = "Dominick";
$biography = "\nI am a programmer";
$occupation = "\n" . "Git".  "Hub".  "programmer";
?>

<?php
$name = "Dominick";
$language = "PHP";
echo "My name is: " . $name;
echo "\nI am learning: " . $language;
?>


<?php
$noun = "dog";
$adjective = "smelly";
$verb = "eat";

echo "The world's most beloved $noun was very $adjective and loved to $verb every single day.";
echo "\nI have always been obsessed with ${noun}s. I'm ${adjective}ish. I'm always ${verb}ing.";
?>

<?php
$movie = "Pokemon The Movie";
$old_favorite = $movie;
echo "I'm a fickle person, my favorite movie used to be $movie.";

$movie = "Digimon The Movie";
echo "\nBut now my favorite is $movie.";

echo "\nMy old favorite movie was $old_favorite.";
?>

<?php
echo "I'm going on a picnic!";

$sentence = "\nI'm going on a picnic, and I'm taking apples";
$sentence .= ", bananas";
$sentence .= ", carrots";

echo $sentence;
?>

<?php
$very_bad_unclear_name = "15 chicken wings";
$order =& $very_bad_unclear_name;
$order .= ", 1 cheeseburger";
echo "\nYour order is: $very_bad_unclear_name.";
?>

#Strings are collections of text that the computer treats as a single piece of data.
#A string can be any length and contain any letters, numbers, symbols, or spaces surrounded by quotation marks.
#In order to include certain characters inside strings we have to use escape sequences.
#An operator is a character that performs a task in our code.
#We can use the concatenation operator (.) to combine two strings into one.
#Variables are a fundamental programming concept which allow us to easily reuse data in our code.
#We declare a variable using the dollar sign ($) followed by the variable name and then use the assignment operator (=) to give it a value.
#PHP has variable parsing which allows us to include variables directly in our strings.
#Once a variable has been assigned, we can change its value. This is called reassignment.
#We can create an alias for a variable, instead of just a copy, using the reference assignment operator (=&).
#Operations to the right of the assignment operator will be evaluated before assignment takes place.
#The concatenating assignment operator (.=) is a shorthand notation for reassigning a string variable to its current value appended with another string value.



