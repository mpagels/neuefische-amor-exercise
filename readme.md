# API repo for the amor exercise

You are amor, the Greek good of love. You handle all of love on earth.
Because you want to compete with all of the other love internet platforms on earth, you have started to begin digitalizing your workflow.

Your little love-minions created an api where you get 40 people. Now you have to build an app where you can select two people and your secret algorithm calculates the "love potential" of these two individuals.

Your secret algorithm is:

```
Every person has a list of interests. If the lists, compared to each other, have a high score, these persons are meant for each other.

E.g.:
person #1 list: [true, true, false, true, false, false]
person #2 list: [true, false, true, false, false, false]

Everytime something matches, like true === true or false === false your algorithm gives the couple an 1 for every index

If something is true === false, your algorithm gives the couple a 0

The result for the two lists above would be: [ 1, 0, 0, 0, 1, 1] and the love potential would be: 50 %.
The formula would be: 100 / amountOfListEntrys * amountOfOnes
Everything above 66% is considerably good (Chances are high, people fall in love)
50% is fifty-fifty
Everything under 35% means, they would not fall in love.

```

## Task

Create an App which shows 20 people on the left side and 20 people on the right side. You can select only one person per side. After you have selected a person on the right side and one on the left side, you can hit the `Calculate love potential` button and your app should put the calculation out (render). If the percentage is over 66%, you should save these two people in localStorage so that your love-minions can visit the `saved people` site in your app to get the job done and let these people fall in love with each other.

## API URL

https://amor-api-git-main-mpagels.vercel.app/api/get-persons

```
{
    leftSide : [
        {
            name: "JohnDoe",
            picture: "urlToPicture",
            interests: [listOfBooleans]
        },
        .
        .
        .
    ],
    rightSide : [
        {
            name: "JohnDoe2",
            picture: "urlToPicture",
            interests: [listOfBooleans]
        },
        .
        .
        .
    ],

}
```

## Design Orientation

![app](assets/love-app.png)
