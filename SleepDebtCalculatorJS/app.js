const getSleepHours = (day) => {
  switch (day) {
    case "Monday":
      return 3;
    case "Tuesday":
      return 3;
    case "Wednesday":
      return 5;
    case "Thursday":
      return 3;
    case "Friday":
      return 6;
    case "Saturday":
      return 7;
    case "Sunday":
      return 3;
  }
};
/*console.log(getSleepHours('Monday')); */

const getActualSleepHours = () => {
  return (
    getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("Thursday") +
    getSleepHours("Friday") +
    getSleepHours("Saturday") +
    getSleepHours("Sunday")
  );
};

const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours * 7;
};

/*console.log(getIdealSleepHours('Tuesday'))*/

const calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log(
      "You have the perfect amount of sleep " +
        actualSleepHours +
        ". Really good job!"
    );
  }
  if (actualSleepHours > idealSleepHours) {
    console.log(
      "You got more sleep than you would need exactly " +
        (actualSleepHours - idealSleepHours) +
        "Hours."
    );
  }
  if (actualSleepHours < idealSleepHours) {
    console.log(
      "You should try to sleep more! Lay down a bit for exactly " +
        (idealSleepHours - actualSleepHours) +
        " Hours "
    );
  }
};
calculateSleepDebt()
