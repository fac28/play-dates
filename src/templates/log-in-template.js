const logInTemplate = () => {
  return /*html*/ `
  <!doctype html>
    <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="normalize.css">
      <link rel="stylesheet" href="styles.css">
      <link href="https://fonts.googleapis.com/css?family=Raleway:500|Vollkorn:400i" rel="stylesheet">
      <title>Play Dates</title>    
      </head>
     <body>
      <div class="header">
        <h1>Play Dates</h1>      
      </div>
      <form method="POST" class="center">
        <h2>Log in</h2>
        <div class="margin-top-sm">
          <label for="email" class="off-set">email</label><br>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="margin-top-sm">
          <label for="password" class="off-set-1">password</label><br>
          <input type="password" id="password" name="password" required>
        </div>
        <div class="margin-top-sm">
          <button class="button">Log in</button><br>   
          <a href="/signup" class="block link margin-top-sm">Don't have an account yet?</a>        
        </div>
      </form>
    <body>
  </html>  
  `;
};

module.exports = logInTemplate;
