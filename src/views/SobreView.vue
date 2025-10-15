<template>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Sobre Mim:</label>
  <p style="text-align: left;">
    Me chamo Mateus, tenho 22 anos e sou estudante de Análise e Desenvolvimento de Sistemas,
    atualmente estou aprendendo a desenvolver aplicações web utilizando Vue.js e outras tecnologias modernas,
    é sempre um prazer aprender algo novo e aplicar esse conhecimento em projetos práticos. Durante minha jornada de aprendizado,
    já desenvolvi alguns projetos simples que me ajudaram a entender melhor os conceitos e práticas de desenvolvimento web.
  </p>
</div>
</template>
<script>
 import { defineComponent } from 'vue';

 export default defineComponent({
     name: 'SobreView'
 })
</script>
<style scoped>
/*
 * CSS para a Seção "Sobre Mim"
 * Foco na legibilidade e destaque do conteúdo.
 */

/* 1. Estilo do Contêiner Principal */
.mb-3 {
    /* Cor de fundo que se integra ao contêiner principal do seu portfólio */
    background-color: #1396ed; 
    border-radius: 10px;
    padding: 30px; /* Bom espaçamento interno */
    margin-top: 20px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3); /* Sombra sutil para profundidade */
}

/* 2. Estilo do Título/Label "Sobre Mim" */
.form-label {
    /* Cor de destaque (usando o verde vibrante do exemplo anterior) */
    color: #e1dee6; 
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 20px;
    display: block; 
    /* Linha de separação para enfatizar o título */
    padding-bottom: 8px;
    width: fit-content; /* Faz a linha se ajustar ao tamanho do texto */
}

/* 3. Estilo do Parágrafo de Conteúdo */
.mb-3 p {
    /* Garante alinhamento à esquerda, como no seu template */
    text-align: left;
    /* Cor do texto clara para contraste com o fundo escuro */
    color: #e0e0e0; 
    /* Fonte e tamanho para facilitar a leitura */
    font-size: 1.15rem;
    line-height: 1.8; /* Aumenta o espaço entre as linhas */
    margin: 0; /* Remove margens padrão do parágrafo */
    
    /* Destaque para palavras-chave (se você quiser estilizar no HTML com <strong>) */
    /* Exemplo: p strong { color: #FFD700; font-weight: 600; } */
}

/* 4. Estilo de Destaque Adicional (Opcional, se você adicionar um destaque no HTML) */
/* Se você envolver as tecnologias em <span> com uma classe 'highlight' */
/*
.mb-3 p .highlight {
    color: #00BFFF; 
    font-weight: bold;
}
*/
</style>