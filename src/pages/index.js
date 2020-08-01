import React from "react"
import "../styles/global.css"
import "../styles/home.css"

export default function Home() {
  return (
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Document</title>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap" rel="stylesheet"></link>
      <script src="https://kit.fontawesome.com/0bd47d37dd.js"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </head>
    <body>
    <div id="page-home">
    <header>
        <nav>
           <input type="checkbox" id="check"/>
           <label for="check" class="checkbtn">
           <i class="fa fa-reorder"></i>
           </label>

           <label class="logo">DesignX</label>
           <ul>
              <li><a class="active" href="/">Home</a></li>
              <li><a href="/">about</a></li>
              <li><a href="/">service</a></li>
              <li><a href="/">contact</a></li>
              <li><a href="/">feedback</a></li>
           </ul>
        </nav>
    </header>
    <section class="bg">
    <div class="content">
      <main>
          <h1>Seu marketplace de coleta de residuos</h1>
            <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</p>
            <a href="/">
                <span></span>
                <strong>Pesquisar pontos de coleta</strong>
            </a>
      </main>
      </div>
      </section>
      </div>
    </body>
    </html>
  )
}
