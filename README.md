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
