<template>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Entre em Contato:</label>
        <p>
            <span class="contato-label"></span>
            <a href="https://linkedin.com/in/mateus-silva-ab9706336" target="_blank" rel="noopener" class="contato-linkedin">
               linkedin.com/in/mateus-silva-ab9706336
            </a>
            <br>
            <span class="contato-label"></span>
            <a href="mailto:mateussilvafsa00@gmail.com">
                mateussilvafsa00@gmail.com
            </a>
        </p>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ContatoView'
})
</script>

<style scoped>
/*
 * CSS para o Componente de Contato
 * Foco em alinhamento, destaque de links e clareza.
 */

/* 1. Estilo do Contêiner Principal */
.mb-3 {
    /* Define uma margem interna (padding) para não encostar nas bordas do container pai */
    padding: 20px;
    /* Usa a cor de fundo do container pai do portfólio (se estiver no dark mode) */
    background-color: #f3f9f6df; 
    border-radius: 8px;
    box-shadow: 0 4px 15px rgb(246, 244, 244);
}

/* 2. Estilo do Título/Label */
.form-label {
    /* Cor de destaque para o título */
    color: #4CAF50; /* Verde vibrante */
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 15px;
    display: block; /* Garante que ocupe a largura total */
    padding-bottom: 5px;
}

/* 3. Estilo do Parágrafo de Contato */
.mb-3 p {
    /* Garante alinhamento à esquerda, como você definiu */
    text-align: left;
    /* Aumenta o espaçamento entre as linhas para melhor leitura */
    line-height: 2.2; 
    font-size: 1.1rem;
    color: #f0f0f0; /* Cor clara para o texto */
    /* Garante que cada item de contato fique em sua própria linha (opcional) */
    white-space: pre-line;
}

/* 4. Estilo dos Links (O mais importante) */
.mb-3 a {
    /* Remove o sublinhado padrão */
    text-decoration: none;
    /* Cor de destaque para indicar que é um link clicável */
    color: #00BFFF; /* Azul vibrante (similar ao link) */
    font-weight: 500;
    transition: color 0.3s ease, text-shadow 0.3s ease;
    /* Adiciona uma borda inferior sutil para separação */
    border-bottom: 1px dashed #00BFFF55; 
    padding-bottom: 2px;
}

/* Efeito Hover (Interatividade) */
.mb-3 a:hover {
    /* Mudança de cor ao passar o mouse */
    color: #FFD700; /* Dourado/Amarelo */
    /* Adiciona um efeito de sombra de texto para um leve brilho */
    text-shadow: 0 0 5px rgba(255, 215, 0, 0.7); 
    border-bottom: 1px solid #FFD700;
}
</style>
