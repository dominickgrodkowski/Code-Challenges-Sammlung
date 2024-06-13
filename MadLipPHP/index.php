<?php
function generateStory($noun, $color, $verb, $distance_unit)
{
    return "\nThe $noun are lovely, $color, and deep.\n
    But I have promises to keep,\n
    And $distance_unit to go before I $verb,\n
    And $distance_unit to go before I $verb.\n";
}
echo generateStory("dog", "blue", "run", "miles");
echo generateStory("kangaroo", "green", "jump", "kilometers");
echo generateStory("turtle", "purple", "crawl", "inches");