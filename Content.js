const generateSTYLES = () => {
    return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
a {
    background-image: linear-gradient(
      to right,
      #54b3d6,
      #54b3d6 50%,
      #000 50%
    );
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;
  }
  
  a:before{
    content: '';
    background: #54b3d6;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }
  
  a:hover {
   background-position: 0;
  }
  
  a:hover::before{
    width: 100%;
  }
  
  /* Presentational Styles */
  body {
      display: grid;
    font-family: 'Poppins', sans-serif;
    font-size: 27px;
    font-weight: 700;
    height: 100vh;
      place-items: center;
  }
  </style>`;
  }
  const generateHTML = (pageName) => {
    return `
     
     <div id="clouds">
        <div class="cloud x1"></div>
        <div class="cloud x1_5"></div>
        <div class="cloud x2"></div>
        <div class="cloud x3"></div>
        <div class="cloud x4"></div>
        <div class="cloud x5"></div>
    </div>
    <div class='c'>
        <div class='_404'>404</div>
        <hr>
        
        <div class='_2'>Access Denied to ${pageName}</div>
    </div>
     `;
  };
  
  switch (window.location.hostname) {
    case "www.snapchat.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("SNAPCHAT");
      break;
    case "www.facebook.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("FACEBOOK");
      break;
    case "www.instagram.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("INSTAGRAM");
      break;
    case "www.twitter.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("TWITTER");
      break;
    
  }
  
  