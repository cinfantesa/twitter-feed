# Twitter Feed

I build this solution over https://electron-react-boilerplate.js.org just to focus on the react development.

The electron-react-boilerplate project uses different libraries but I try to avoid those who make the solution complex. For example, for this exercise react's state is enough and redux is not necessary.

## Component hierachy
I divided the application in the following components:
 * Feed: the smart component, the only one that has state. It is the whole page.
 * FeedSearch: contains the input and the button. Has two different "events": when the input value changes and when de button is clicked.
 * FeedTweetList: It is the list container, receive the list as property and use the following component.
 * FeedTweetItem: It is the representation of a tweet, so it only receives the tweet info.

> All written code is under *src/app/component* folder
