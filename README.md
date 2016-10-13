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

_day one_
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

# day 3
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

# Lesson 4

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

# Lesson 6
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
# Lesson 7

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

# Lesson 8

- Objective: add more things to your `mini_site`
- Objective: use `github` the right way

Todo's
1. add more things to site
2. Make a `git commit` and `push` `master branch` to the `git origin` which is your online repo

# Lesson 9

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

# Session 10

- https://snook.ca/archives/html_and_css/vm-vh-units
- http://apex.sh/ping/
- http://www.cssmania.com/

** homework **

- utilise page `413` to add a background image to a div, remember to get the path of the image right, something like `../images/image_name.jpg`
- utilise font family on page `273`, use a font stack from there on one or all of your elements, probably start with the `body` and it will `cascade` down.
- or if your feeling fun you can use a commonly accepted font stack from here http://www.cssfontstack.com/

# Session 11

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

# Session 12

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

# Session 'lucky' 13

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

1. wire up a `index.html`
2. wire up a `js` folder
3. wire up a `js/app.js` file
4. dont worry about `css file` _seriously, just dont'_
5. go with the most `basic` `js method` I can think of which is
6. 

```
    document.write("Hello World!");

```

7. optional: add a `JS` alert
8. **DOM Ready** is awesome, attempt this 100% you must attempt:

```
// post DOM loaded
document.addEventListener('DOMContentLoaded', function(){ 

// put code that waits for DOM


}, false);
```

# class 16 JS Episode 2

- How to add `CSS` to an element with `JS` http://www.w3schools.com/jsref/dom_obj_style.asp

_homework_

- If you didn't do `15` you better do it
- If you _did_ do `15` go ahead and use the `.style` method to add `css` to a `DOM Element` via `JS`, link is above it's really not that hard
