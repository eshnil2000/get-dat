# Hosting a website

We've covered sharing, syncing, and live syncing of data. But what about sharing via the web? We can create a Dat link that can be viewed in any browser. Dat has an http server that can be turned on by adding `--http$PORT_XX`, where XX is specific to the server port. 

To share your data via the web, create a file called `index.html` using the command `touch`. 
Type the following into the **virtual terminal**: 

`touch index.html`

You will see a new file, `index.html`, has been added to the directory on the virtual server. 

Let's make it fun! Use the test editor in the browser to add to the new `index.html`. Edit it and add some stuff in your html. Here's a silly template to get you started. 
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Hello Friends!</title>
</head>
<body>
<h1>Welcome to my data website!</h1>
<p>More things about my data. And cat!</p>
  <img src="cat.png" alt="cat" height="300" width="450"> 
<br>
  <img id="rickroll" src="https://media.giphy.com/media/13tTN4ccM3R6us/giphy.gif"/>  
</body>
</html>
```

To share this, type the following in the **virtual terminal**:

`dat share --http=$PORT_80` 

To view it in browser, check the file called `welcome.txt` in the **virtual terminal**. It will list a url that should look something like this: `http://docker.try-dat.com:34777`
Copy and past the link from your welcome.txt file into a new tab in the browser window. Windows users beware - please right-click to copy, as `cntrl-C` will quit dat and dat needs to keep running. Check out your new website!

When you modify file, the site will update when you refresh the browser window. Pretty cool, huh?
