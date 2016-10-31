```
 ___ __ __   ______   ______   __  __   __       ______     ____        
/__//_//_/\ /_____/\ /_____/\ /_/\/_/\ /_/\     /_____/\   /___/\       
\::\| \| \ \\:::_ \ \\:::_ \ \\:\ \:\ \\:\ \    \::::_\/_  \_::\ \      
 \:.      \ \\:\ \ \ \\:\ \ \ \\:\ \:\ \\:\ \    \:\/___/\   \::\ \     
  \:.\-/\  \ \\:\ \ \ \\:\ \ \ \\:\ \:\ \\:\ \____\::___\/_  _\: \ \__  
   \. \  \  \ \\:\_\ \ \\:\/.:| |\:\_\:\ \\:\/___/\\:\____/\/__\: \__/\
    \__\/ \__\/ \_____\/ \____/_/ \_____\/ \_____\/ \_____\/\________\/

```

Module 1's online coursework suppliment

# class 1/2
# Pure Basics
1. [internet infographic](http://kaiserthesage.com/the-internet/)
2. [origin of programming languages](http://www.veracode.com/sites/default/files/wp-content/uploads/2013/05/History-Of-Programming-Languages-Veracode.jpg)
3. [programming language ranking](http://spectrum.ieee.org/static/interactive-the-top-programming-languages-2016)

# Module 1 MacBook Setup

1. [join GitHub](http://github.com/join)
2. [brew homepage](http://brew.sh/)
2.
 [setup brew](https://coolestguidesontheplanet.com/installing-homebrew-on-os-x-el-capitan-10-11-package-manager-for-unix-apps/)

 * `xcode-select --install`

 * `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

 * `brew doctor`

 * `brew list`

2. [cask homepage](https://caskroom.github.io) _or ez way copy  
 * paste in Terminal: `brew tap caskroom/cask`

3. Install Sublime

 * `brew cask install sublime-text`

4. Install Node

 * `brew install node`
 * `node -v`

5. Install NPM

 * `sudo npm install npm -g`
 * `npm -v`

# hw one
- "ok create a project" in github featuring a boilerplate `index.html` file and a `readme.md` file
- second thing, if you want to try to style your `MD` a pretty good reference is `dillinger.io`
- third thing, go ahead and use an `HTML boilerplate` and just copy paste the code online. Having to manually type in a blank `HTML` document is crude an a waste of your time.

## how do you expect me to even do this?
1. log into your `GitHub`
2. click the `+` in the upper right and `select` `Create New Repo`
3. call the repo `homework1`
3. initialize that `Repo` with a `Readme.MD` file by `pressing the right checkbox during the creation screen`

1. now we want to work on the `boilerplate`
2. find a `HTML5` boilerplate online or use this one
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>title</title>
  </head>
  <body>

  </body>
</html>
```
3. press `create new file` from the `github.com` new repo page you just created
4. call that file `index.html`
5. paste in the `boilerplate`
6. profit

# class 3
- [Lists being used in unconventional ways](http://www.w3schools.com/bootstrap/bootstrap_navbar.asp)
- Homework is to clean up this form and include it somewhere in your `index.html` file
```
  <form action="http://www.example.com/login.php">

    <p>Favourite Phrase
      <textarea>words yo...</textarea>
    </p>

    <p>Password
      <input type="password">
    </p>

     <p>
     Who said that
      <input>
    </p>

    <p>
      Is famous?
      <input type="checkbox">
    </p>

<p>Please select your favorite genre:

<br />

  You have got to give radio buttons a "name" field
  <p>

<input type="radio"/> Rock

<input type="radio"/>Pop

<input type="radio"/>Timmy

<input type="radio"/>Lassie
    <p>
      Which Crips member are you?
            <p>
    <select name="crips">

      <option value="big stacey">Big Stacey</option>
      <option value="big stacey">Big Worm</option>
      <option value="big stacey">Big C Locc</option>
      <option value="big stacey">Small C</option>
      <option value="big stacey">Snoop Dogg</option>
      <option value="big stacey">---</option>
      <option value="big stacey">Decline to Identify</option>
      </select>
      <p>
      </p>

</form>
```

# Class 4

What happened in class Review

- HTML `<textarea>` Tag: http://www.w3schools.com/tags/tag_textarea.asp

- List of all HTML5 allowed imput types, yes even color: http://www.w3schools.com/html/html_form_input_types.asp

Homework:
- add an image to your `index.html` file with the `img` tag.
- find an `URL` of an `image` on the `internet` somehwere and copy paste that `url` into the `src=""` part of your `img' tag in order to display said image in a `JS bin`
- do this in `JS bin` first so you can check that it works, and when you are done paste it into your `index.html` on `GitHub` thus updating that file.
- your index.html file should now have an `image` in it as well as all the former things
- don't worry about where the image is physically in the file, just put it somewhere that looks good

Homework part two (2):
- take a screen shot of you succesfully `web instpecting` the image found on a regular site, like maybe, [ "nytimes", "nypost", "espn", or something like that]

# Class 6
Homework is to find images online, `hack` the width using the method below so that way you can use an image you found even if its too large.

Combine various `html` elements, such as `ul` `li` `p` `span` `h1` & `div`'s in order to make your image mellee. Use at least 10 (ten) images and use `all` of the `html` elements above, keeping in mind if they are `block` or `inline`.

Here are the links to the `block` v `inline`
[block elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)

[inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)

```
  <div>

    <div>
      <p>
      <img src="http://www.promicabana.de/wp-content/uploads/2011/09/Charlie-Sheen-Comedy-Central-Roast-2.jpg" width="220">
      </p>
      <p>
      <img src="https://static01.nyt.com/images/2016/09/26/opinion/26ENDORSE-WEB-BW/26ENDORSE-WEB-BW-superJumbo-v2.jpg" width="300">
      </p>
  </div>
  </div>
```
# Class 7

```
<!DOCTYPE html>
<html>
<head>
	<title>sample page</title>
</head>
<body style="background: #3c4f35;">
<header style="background: #f4a45e;">
<h1>welcome to my sic site yoh</h1>
<nav style="background: OliveDrab; display: block; float: left; width: 100%">
	<ul>
		<li style="list-style: none; float: left; "><a href="">ruby roo</a></li>
		<li style="list-style: none; float: left; "><a href="">ruby roo</a></li>
		<li style="list-style: none; float: left; "><a href="">ruby roo</a></li>
	</ul>
</nav>
</header>

<div id="content" style="clear: both; border: 1px solid green">
	<article>
	<h1>article title</h1>
		<img alt="pic of girl" src="images/MV5BNjk0ODUyOTk1M15BMl5BanBnXkFtZTgwMDUxNDYzOTE@._V1_.jpg">
		<p>i woudl really <a href="her_info.html">learn</a> about her</p>
	</article>
</div>

</body>
</html>
```
Homework

- make your own website
- **always start with** a `index.html` page and additional `something.html` and more if you feel comfortable
- make a `image` folder and `download` about 7 (seven) images off the web to use there a handfull of images, so keep them in _all in_ there
- make `relative` links to the images
- make sure you make the `navbar` **important** using `ul` `li` and `a tags` I don't care if it just looks like a bulleted list of links, I can show you how that gets _stylized_ in order to make look right later, just do the basics now.
- make `relative` links to the other `html` files using a `navbar`
- **use layout on page** `432` of the book

How do I turn this in?
- since you made this website in it's own `folder` probably on your desktop...
- go to your homework repo
- `click` on `upload files`
- **drag** the folder from your desktop to this window, then click `upload`
- then it will show the `foldername` in your repo all nice and you can click around in there to verify

# Class 8

- Objective: add more things to your `mini_site`
- Objective: use `github` the right way

Todo's
1. add more things to site
2. Make a `git commit` and `push` `master branch` to the `git origin` which is your online repo

# Class 9

- Intro to css

- Homework:
- add a css file to your `mini_site`
- `source` that file in your header
- (browse that codebase from class here)[https://github.com/zackn9ne/module1_set1/tree/master/temp_proj]

** mini git workflow **

`if pull request`

- go on `github.com`
- accept `pull request`
- `git pull`

`if pull requests are all fixed`

- do `coding`
- `git add -A .`
- `git commit -m "commit message"`
- `git push origin master`

# Class 10

- https://snook.ca/archives/html_and_css/vm-vh-units
- http://apex.sh/ping/
- http://www.cssmania.com/

** homework **

- utilise page `413` to add a background image to a div, remember to get the path of the image right, something like `../images/image_name.jpg`
- utilise font family on page `273`, use a font stack from there on one or all of your elements, probably start with the `body` and it will `cascade` down.
- or if your feeling fun you can use a commonly accepted font stack from here http://www.cssfontstack.com/

# Class 11

- http://www.cssmatic.com/box-shadow
- `border-radius: 10px;`
- https://fonts.google.com/

*** homework **

- make a new `html` document in your repo called `div_time.html`
- wire up a `style.css file` to it in a `/css` directory
- I don't care about images for now
- you _have to_ use the following divs
- make `two` `.feature` `div's` `display: inline-block;` `margin: 0 auto;` and `width: 300px;`, remember to _force it to be this way_
- make `five` div's total on the page, `header` `hero` `footer` are all `100% width` so they will be easy
- put `box shadows` on some div's
- put `border-radius` on all div's
- put `borders` on divs

```
|
|________ header div ___________

|
|_________ hero div ____________

   |__feature__| |__feature__|

|
|_________ footer div ___________
```

# Class 12

** homework reviews**

<img src="https://media.giphy.com/media/Q2uIMfIVgdAek/giphy.gif">

_don't let this be you_

** in class **

- HTML 5 tags review

<img src="http://www.w3schools.com/html/img_sem_elements.gif">

- Links, simple example, img background example

- Lists, page 330

- Tables, page 330

** homework **

- make a junky looking `ul` with `li` items into stylish menu bar
- wrap the `ul` and `li` in a `nav` element
- <img src="https://media.giphy.com/media/f4cH0FXbUmogg/giphy.gif">
- clear out your current repo into `level1` folder
- work on this in a clean workspace in your repo
- in class example was http://jsbin.com/howezagunu/1/edit?html,css,output
- `k thx bye`

# Class 'lucky' 13

<img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Boxmodell-detail.png">

```
If the margin property has one value:

margin: 25px;
all four margins are 25px
```

```
If the margin property has two values:

margin: 0 auto;
top and bottom margins are 0
right and left margins are auto
```

_this one is dead simple you should know it_

```
If the margin property has four values:

margin: 25px 50px 75px 100px;
top margin is 25px
right margin is 50px
bottom margin is 75px
left margin is 100px
```

_homework_
```
    .row {
        width: 1000px;
        margin: 0 auto;
    }    
```

<img src="http://legomenon.com/images/russian-matryoshka-stacking-babushka-wooden-dolls-meaning.jpg">

1. just setup the rows like how http://nypl.org
2. do child and child and child elements inside of each row
3. try to put in the same content _kind of_ of how `nypl.org` has it on their homepage
4. move your old work out of your repo and put this in the root of your repo
5. I want lots of div's and child divs

# class fourteen (14)

_homework_

- loosely base a site on: http://www.seattle.gov/visiting-seattle
- `header` should be `background: #0035A5` the blue
- `footer` has   `background: #D7D7D7;` the gray

```
# 3 main areas
1. header (with following things in it)
2. div#content
3. footer

html
	head
	title

body
	header
		div#logo
		ul.nav

	div#content
		h1
		section.featureWrapper
			img src="???"
			img src="???"

		div#mainContent
			div#container
				h3
				p
				p
				p

	footer
```

# class 15 intro to JS

`DOMContentLoaded` https://codepen.io/LukeAskew/pen/LnJsE

_homework_

study this `index.html` found here to learn how to wire up your `app.js` file https://github.com/zackn9ne/module1_set1/tree/master/js_ex1

1. wire up a `index.html`
2. wire up a `js` folder
3. wire up a `js/app.js` file
4. dont worry about `css file` _seriously, just dont'_
5. put all the following `JS` in your _brand new_ `js/app.js` file. Go with the most `basic` `js method` I can think of which is:
6.

```
    document.write("Hello World!");

```

7. optional: add a `JS` alert
8. **DOM Ready** is awesome, attempt this 100% you must attempt. Info on DOM Ready https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded:

```
// post DOM loaded
document.addEventListener('DOMContentLoaded', function(){

// put code that waits for DOM


}, false);
```

# class 16 JS Episode 2

- How to add `CSS` to an element with `JS` http://www.w3schools.com/jsref/dom_obj_style.asp, the thing about this page is that if you scroll to the bottom is where all the cool things you can do via `JS` to your `CSS` are so try some.

_homework_

- If you didn't do `15` you better do it
- If you _did_ do `15`:


a. use `document.getElementByID`

b. use `.style` **method** in order to apply some `css` to the element you targeted in `a`

- Heres what you need to do:

```
document.getElementById('yourElement').style.SOMETHING = 'somevalue';
```

# class 17 JS Episode 3

In class we covered `Data Types` and `Operators` the pages numbers are in `JS Syntax` below as a fun joke:

- `var dataTypesPageNumber = 62;`
- `var operatorsPageNumber = 75;`

Here are the basics we went over in class, (found in this repo), here is the link https://github.com/zackn9ne/module1_set1/tree/master/session_17

_assignment 17_

- make an `assignment_17` folder
- make an `assignment_17/js` folder
- make an `assignment_17/index.html` file
- make an `assignment_17/js/app.js` file
- wire all these together
- do some js
- I want to see 1. `string variable` 2. `numeric variable`
- `document.write( yourVariable )`
- `document.write( yourNumericVariable )`


#class 18

- Data Types pg. 62

- Array's pg. 70

- Functions pg. 86
	- http://stackoverflow.com/questions/507138/how-do-i-add-a-class-to-a-given-element

- Functions pg. 96 (function dec's v function expressions

- Objects 100
	- https://newsapi.org/buzzfeed-api
	- https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa
- Boomerang back to _Operators_ pg. 75 (right column)

_assignment 18_

- `JS` Data Assignment:

- use `getElementById` in order to `.innerHTML` an `array` to your webpage

#class 19

- Homework `review` should have been _very_ ez

- Loops: http://www.w3schools.com/js/js_loop_for.asp

- `JS String Methods` http://www.w3schools.com/js/js_string_methods.asp

- Scope, Objects, Functions page 86 andd taakee it all the way through

- Time Permitting Math Dates Date Formats and Methods

- <img src="http://s.quickmeme.com/img/a1/a1563406673bc7b102e3609d5e017fa5605a4bea01752b024f58c25a36c50ae9.jpg">

- Midterm on Thursday, during the LAB

- Loops in class overview

```
var cameras = new Array('sony','panasonic','canon','fuji','polariod')

// loop
// for (start at; continue as long as; do each time) {
      run this code for each time;
   }

for ( i = 0; i < cameras.length; i++ ) {
	console.log ( cameras[i] );
}


document.addEventListener('DOMContentLoaded', function(){

       document.getElementById('cameras').innerHTML = cameras;

    }
);
```

_assignment 19_

- make a function
- make that a named `function` using the syntax on pg. 90
- wait for `DOM READY` to call the `function` using the syntax on pg. 91

#class 20

- `session_20/js/` see above for code
- `events` pg. 244
- `events` on MDN https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- `events` pg. 246, a pretty decent list of the `type` of `events` you can `bind to`

_assignment 20_

- write a `named function` that does a `console.log` some `string of your choice`
- write a `named function` with a `parameter` that does a `console.log` some `string of your choice` and accepts that parameter
- once you have tested and called those functions `functionName();` and `functionName('clever string');` in your code...
- _if you can handle this.. then..._
- go ahead and attach an `addEventListener` to trigger that function based on `click` of a `DOM Element`
- if not study functions with and without parameters way way _way_ **more**
- see the code for `session_20/js/app.js` above and read the book

#class 21

- callout 1. `functions` are `objects` in JS
- we watched https://www.youtube.com/watch?v=oB5rH_9bqAI
- `scope` pg. 93
- `function declarations` vs `function expressions`
- `date` methods pg. 137

_assignment 21_

- do homework you missed

_the midterm_

- make a website
- use `div's`
- use a `css file`
- use a `js` file
- make your directory structure `the right way`
- call the folder `midterm` and put in your `repo`
- bind a `yourElement.addEventListener` click event to a `DOM Element` ie `<button>` `<div id=#something>` `<img>` to run a `function`
- style that `DOM Element` with `css` so its not _ugly_
- that `.addEventListener` click event can do many things so choose one from the `JS` you already know that manipulates `html` or `css` somehow
- some good ones to try are
- add a `css class` to an existing `id`
- do a `js` `.innerHTML` in order to append `+=` to a div
- ** one last thing **
- create an `array` in your `js` and `loop through it`, `.innerHTML` the result of that loop and make each item end up being an `li` item

- answer these questions
1. what is the difference between a `function` and a `function expression`, why would you use one or the other
2. what is the `DOM Style` syntax in `JS` to apply a `css` style to an element
3. what gets `hoisted` in `JS`?
4. tell me about `document.addEventListener("DOMContentLoaded", function(event) {` and `window.onload`
5. tell me what color this element would be if the following `css` was in the `css` file
```
div#red { color: red; }
div#red { color: blue; }
```

#class 22

- bower install bootstrap
- bower install jquery
- or just use the `cdn`
- wire up these two features
- use some bootstrap template `<body>` code

_assignment 22_

- connect a `bootstrap` and `jquery` to an `index.html` file
- `in class` assignment will follow with trying out `jQuery`
- `read` the chapter on `jQuery`
- `watch this video` https://www.youtube.com/watch?v=sBzRwzY7G-k&index=2&list=LL_X28oF7sfrfciJE1rOxI3w

#class 23
- `DocumentReadyFunction` for `jQuery`
```
$(function() {
});
```

- Events p 327
- 
```
preventOefau1t () Prevents the default (e.g., submitting a form)
stopPropagation() Stops the event bubbling up to ancestors`
```

- Events `syntax` p 330
- Appearances
- Hide/Show p 332

- Transitions: Fade, Slide [meh]
- Animate [meh]
- Actions
- Stopping
- Callback - Chaining p 334 `animate something and when its done run a callback function`


- Working with forms p344
_homework 23_
- no homework `XD`

#class 24
- `JS bubbling` and `stopPropagation`

```
document.addEventListener("DOMContentLoaded", function(event) {

  var usa = document.getElementById('usa')  
  var la = document.getElementById('la')
  var greetLA = function(ev) {
     
        console.log ('good day LA'); 
        ev.stopPropagation();

  }
  var greetUSA = function(ev) { 
        console.log ('usa');                           
        ev.stopPropagation();

                              }

  la.addEventListener('click', greetLA, false);
  usa.addEventListener('click', greetUSA, false);

});
```

- `jQuery` `.each()`

```
$(function() {

var movies = [ "the tick", "batman", "tony stark", "mr. doubtfire", "hunger games" ];
var buzz = {
      "author": "Rob Stott",
      "title": "People Complained That This Ad For Lamb Is Racist Toward White People",
      "description": "\"A complete disgrace.\"",
      "url": "https://www.buzzfeed.com/robstott/people-complained-that-this-ad-for-lamb-is-racist-against-wh",
      "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2016-10/26/10/campaign_images/buzzfeed-prod-fastlane03/people-complained-that-this-ad-for-lamb-is-racist-2-3145-1477490745-0_dblbig.jpg",
      "publishedAt": "2016-10-26T00:02:13Z"
    }

$.each( buzz, function( key, value ){
    console.log(key + '^^^^^^_' + value);
    $('div.news').append('<li>' + key + ': '+ value + '</li>');
});
 
  
  });
```

- `key` `value` pairs
- <img src="http://i.stack.imgur.com/nzc2C.png">



_homework 24_
- `$.each()` a series of repetitive `HTML DOM Elements`, and `console.log` a statement each time the element is found
- watch this video, especially up until `3:16` `https://www.youtube.com/watch?v=sBzRwzY7G-k&index=3&list=LL_X28oF7sfrfciJE1rOxI3w` 

# class 25

- page 322 getting and setting css values

- page 327 some `this keyword`  stuff

- jQuery fundamentals with CSS

- jQuery and CSS working together and trouble shooting

- dimensions

LAB 23: jQuery with CSS assignment

_homework 25_

- this class lesson is called `jQuery with CSS` so let's go ahead and `.css` some of the elements you put in your mini-site (go to page 322 in the book and do what they do)

- the `homework` can just have a bunch of html elements with ID's and such in order to target them and do `jQuery` actions on them

- at the minimium have when the page loads have a bunch of `css styles` come in via `jQuery` (go to page 322 in the book and do what they do)

- watch this video, especially up until `3:16` `https://www.youtube.com/watch?v=sBzRwzY7G-k&index=3&list=LL_X28oF7sfrfciJE1rOxI3w` 

_homework 25_
- final project ideas/intro

- scrape an `API` and `style` the data as you want, using your _own_ layout and `CSS`
- you will have to use a `loop` to do this in order to `loop` through the `JSON` aka `JS Objects` the `API` returns to you
- use `getJSON` in order to parse an API and display the results as *you* desire
- watch this tutorial to get ideas on how easy or hard this is: https://www.youtube.com/watch?v=5nL7X1UMWsc

or

- you will of cource have to `style` with `CSS` and include `jQuery` and your own `JS` file also
- do a `TODO` list variation
- as featured on page `344-345` as well as using the chart on `318`