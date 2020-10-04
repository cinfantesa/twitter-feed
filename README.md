# Twitter Feed

I build this solution over https://electron-react-boilerplate.js.org just to focus on the react development.

## Considerations
Redux is configured by electron-react-boilerplate but i prefer to use react reducers due to easy of use. So I removed redux configuration from boilerplate.

I removed Router configuration from boilerplate.

The twitter api v2 only returns tweets in the last week. By default I am retrieving last 100 tweets in the last week.

Written code is in the following folders:
* app/domain: our domains classes, in this exercise we only have Tweet domain class
* app/components: developed components.
* app/actions: our tweeter api call.
* app/reducers: our state reducers.

## Developed components
I divided the application in the following components:
 * Feed: the smart component, the only one that has state. It is the whole page.
 * FeedSearch: contains the input (for type twitter username) and the button. Has two different "events": when the input value changes and when de button is clicked.
 * FeedTweetList: It is the list container, receive the list as property, if the list is null then and warning message is shown. Use the following component.
 * FeedTweetItem: It is the representation of a tweet, so it only receives the tweet info.

## Testing strategy
I write tests to validate inputs and outputs of each component. It means that i check the following:
* A component renders correctly for given props.
* A component dispatch right events.

You can find spec files in the same folder where the component is.

## Continuous integration
Added a github action workflow just to check that code compiles and tests passes.

## Running
To run the project just clone this repo and install dependencies
> yarn install

Now, you can start the app using
> yarn dev
