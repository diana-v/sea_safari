<template>
  <div class="about">
    <app-toolbar></app-toolbar>
    <div class="about-container">
      <div class="about-content">
    <h3 class="about-header">Apie Mus</h3>
    <p class="about-paragraph">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      </div>
      </div>
  </div>
</template>

<style>
  .about-header {
    padding-top: 50px;
    color: white;
  }

  .about-paragraph {
    padding: 15px 50px 70px 50px;
    text-align: start;
    color: white;
  }

  .about-content {
    top: 50%;
    left:50%;
  }

  .about {
    height:100%;
    background-color: #a8d0e3;
  }

  .about-container {
   clip-path: polygon(
            0 0, /* left top */
            100% 5%, /* right top */
            100% 100%, /* right bottom */
            0 calc(100% - 3vw)
   );
    background-color: #0c3c60;
    margin-top: 10%;
  }
</style>