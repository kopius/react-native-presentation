# Understanding React Native

[Slides](https://docs.google.com/presentation/d/10H04zEnsIncDU56tCQok3Xf_5QRJ0SSQTgWftMReSEw/edit?usp=sharing)


## What is React Native?

-   It's a tool for writing native mobile apps using only JavaScript and React, a JavaScript library
-   It's commonly referred to as a framework, but in reality it functions as an entire software development platform
-   Their motto is "Learn once, write anywhere"


## Where did React Native come from?

Who:
-   developed by Facebook
-   over 1,000 contributors since its release
When:
-   released in January 2015
-   over 8,000 commits and 120 releases since then
Why:
-   to fundamentally change how native mobile development is done
-   to allow developers to write UIs as a pure function of their state


## What does React Native do?

-   React Native lets you write native mobile apps using only JavaScript (or TypeScript, or anything that compiles to JavaScript).
-   You don't have to translate your app into Java (for Android), Swift (for iOS), or any other language to get cross-platform compatibility


## What is "native mobile development"?
-   Native mobile development means writing apps in the native language of the platform or device they're going to run on
-   This is a *good* thing, since it lets you take advantage of features that are specific to that platform
-   This is a *hard* thing, because you might want your app to work on a lot of platforms, and learning all those languages is hard
-   React Native lets you do the good thing without it having to be so hard!


## How is React Native different from React?
How is React Native different from just plain React?
-   It builds your UI out of native components instead of web components
-   From the [React GitHub repo](https://github.com/facebook/react): "A declarative, efficient, and flexible JavaScript library for building user interfaces"
-   From the [React Native GitHub repo](https://github.com/facebook/react-native): "A framework for building native apps with React."
-   So React is a JavaScript library for building UIs. React Native is a native development platform that uses React.
-   Understanding React Native requires understanding basic React concepts like JSX, components, state, and props
-   If you already know React, you still need to learn some React-Native-specific stuff, like the native components


## React Native sounds great. Why wouldn't I use it?
-   Using React Native to develop your app makes you entirely dependent on it. If Facebook stops maintaining the project, you suddenly have a lot of work to do if you want your app to keep working
-   You have to use Javascript, or a language that compiles to JavaScript. For some developers, this is not preferable and may even represent a step backward


## Demo: Write a React Native App

I will demonstrate how React Native lets us write JavaScript in the text editor
and immediately see changes to the UI in a simulated iOS environment. I will be
working in the file `ReactNativeDemo/index.ios.js`.


## Additional Resources
-   Josh Abernathy, [“Why React Native Matters”](http://joshaber.github.io/2015/01/30/why-react-native-matters/) (pro-React Native)
-   Ariel Elkin, [“Why I’m Not A React Native Developer”](https://arielelkin.github.io/articles/why-im-not-a-react-native-developer.html) (anti-React Native)
-   [React tutorial](https://facebook.github.io/react/tutorial/tutorial.html) (recommended before trying React Native)
-   [Getting Started with React Native](https://facebook.github.io/react-native/docs/getting-started.html)
