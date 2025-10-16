<script lang="ts">
 export default {
  name: 'Portfólio'
 }
 import imagem from '@/assets/img/imagem.png';
  import imagem2 from '@/assets/img/imagem2.png';
</script>

<template>
  <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap w/ Webpack</title>
  </head>
  <body>
    <div class="container py-4 px-3 mx-auto">
      <h1>Meu Portfólio</h1>
     <description>Bem-vindo ao meu portfólio!
      </description>
    </div>
  </body>
</html>
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Projeto 1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <img src="../assets/img/imagem.png" alt="Imagem de construção" width="200" height="150">
        <strong>Projeto desenvolvido com o objetivo de fazer um sistema de login e cadastro simples para o usuário ter acesso aos produtos de beleza e estética.</strong>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Projeto 2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <img src="../assets/img/imagem2.png" alt="Imagem de construção" width="200" height="150">
        <strong>Projeto desenvolvido com o objetivo de fazer um sistema de login e cadastro para o usuário acessar os produtos de materiais de construção.</strong> 
      </div>
    </div>
  </div>
  </div>
<div class="card-group">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">HTML</h5>
      <p class="card-text">Sei o básico de html e já fiz projetos que foi necessário saber sobre html.</p>
      <p class="card-text"><small class="text-body-secondary"></small></p>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">CSS</h5>
      <p class="card-text">Sei um pouco de CSS e já fiz alguns projetos que foi necessário fazer o design das telas.</p>
      <p class="card-text"><small class="text-body-secondary"></small></p>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">JavaScript</h5>
      <p class="card-text">Já fiz alguns projetos que foi necessário utilizar o JavaScript.</p>
      <p class="card-text"><small class="text-body-secondary"></small></p>
    </div>
  </div>
</div>
</template>

<style>
/* Fundo Simples */
body {
    /* Opção 1: Dark Mode (elegante e profissional) */
    background-color: #2c2cd2;
    background-image:#1d78d3; /* Cor de fundo leve para dar um destaque ao conteúdo */
    color: #c71d1d; /* Garante que o texto fique claro */

    /* Opção 2: Light Mode (clássico) */
    /* background-color: #f8f9fa; */ 
    /* color: #333; */ 
}
  /*
 * Arquivo CSS Customizado
 * O código assume que o Bootstrap já está sendo carregado no HTML,
 * então este CSS foca em ajustes e elementos específicos.
 */

/* Estilos Gerais do Corpo (body) */
body {
    /* Define uma fonte mais amigável, caso o Bootstrap não a defina */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* Cor de fundo leve para dar um destaque ao conteúdo */
    background-color: #f8f9fa; /* Cinza muito claro, padrão do Bootstrap */
    color: #333; /* Cor de texto principal */
    line-height: 1.6; /* Altura de linha para melhor leitura */
}

/* Estilo para o Contêiner Principal */
.container.py-4.px-3.mx-auto {
    /* Cor de fundo branca para o conteúdo principal */
    background-color: #ffffff;
    /* Sombra suave para dar profundidade */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* Borda arredondada */
    border-radius: 8px;
    /* Margem superior para separar do topo da página, caso necessário */
    margin-top: 20px;
    margin-bottom: 20px;
}

/* Estilo para o Título Principal */
h1 {
    color: #007bff; /* Cor primária do Bootstrap */
    padding-bottom: 10px;
    border-bottom: 2px solid #007bff;
    margin-bottom: 20px;
}

/* Estilo para a tag não-padrão <description> */
/* É recomendado usar <p> ou <span>, mas estilizando o que foi fornecido */
description {
    display: block; /* Garante que ocupe sua própria linha */
    font-size: 1.25rem; /* Aumenta o tamanho da fonte */
    color: #6c757d; /* Cor secundária */
    margin-bottom: 15px;
    font-style: italic;
}

/* Estilos para a seção "Meus Projetos" (Accordion) */
/* O Bootstrap cuida da maior parte, mas podemos estilizar o título da seção */
.accordion {
    margin-top: 30px;
    border-radius: 5px;
    padding: 15px; /* Espaçamento interno */
    background-color: #fff;
}

/* Título "Meus Projetos" dentro do acordeão */
.accordion > .accordion-item:first-child:before {
    content: "Meus Projetos";
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
}

/* Estilo para as imagens dentro dos projetos */
.accordion-body img {
    margin-right: 15px;
    border-radius: 4px;
    border: 1px solid #ccc;
    object-fit: cover; /* Garante que a imagem preencha a área sem distorção */
    float: left; /* Flutua a imagem para que o texto fique ao lado */
}

/* Limpa o float após o conteúdo do accordion-body */
.accordion-body {
    overflow: hidden; /* Contém os elementos flutuantes */
}

/* Estilos para a seção "Minhas Habilidades" (Card Group) */
.card-group {
    margin-top: 30px;
    margin-bottom: 30px;
}

/* Estilo para cada Card de Habilidade */
.card {
    border: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Efeito de hover nos cards */
.card:hover {
    transform: translateY(-5px); /* Move o card um pouco para cima */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15); /* Aumenta a sombra */
}

/* Título "Minhas Habilidades" (Aparece fora de qualquer tag específica no seu HTML) */
.card-group:before {
    content: "Minhas Habilidades";
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 15px;
    margin-top: 30px;
    padding-left: 1rem; /* Alinha com o conteúdo do container */
}

/* Título dentro do Card */
.card-title {
    color: #0d5dcd; /* Cor de sucesso do Bootstrap, para destaque das habilidades */
    font-weight: bold;
}
</style>