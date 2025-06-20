# Some tech overview:

**Axios** - as main lib for fetching API

**Superstruct** - as great library to write schemas with ability to test objects for that schema, what helping to always know that API returning right response all time

**React Navigation** - Lib for navigation, used native stack as it more performant.

**Zustand** - Cool atomic state manager lib, supporting all needed features for production apps, allowing to write clean and fast code

**RN Async Storage** - Enough for this case to persist Posts. But for bigger apps I prefer RN MMKV as MMKV is faster and async storage have some limitations.


# Architecture overview

## Project folder structure

I've built common project folder structure here, just because it's small app.
But when app is growing, we can use Module approch, when we're placing Components, Screens, Stores, Consts, Utils inside one Module, for example:
``
src
    Modules
        Posts
            Components
            Screens
            Store
``
But for that small example it's overhead.

## Storing data from API

I've implemented `postsIds: Array<Post['id']>` & `postsMap: Record<Post['id'], Post>` because it's better for performance in several places. First of all accessing post by `posts[postId]` is much faster than `posts.find(post => post.id === postId)` when we have big list; Second is that it help to optimize list updates - when some post in `postsMap` is updating - it will not re-render all items and just only one.

## Zustand

As I already mentioned above - it's cool atomic state managing library. Used this library in per-projects and in real apps in production, works great, boosting development comparing to Redux as you need to write much less code

# Setup / Run instractions

### Install deps
`yarn install`

### Install bundle & cocoapods (if you're going to run iOS, skip for Android)
`cd ios && bundle install && bundle exec pod install`

### Running Debug iOS / Android
`yarn ios` OR `yarn android`

### In case of building Android APK
`cd android && ./gradlew assembleRelease -p .`

OR if you want install release build to Android device / Emulator: `./gradlew installRelease -p .`