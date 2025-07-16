// Função para mostrar o modal
function showModal(modalId) {
    document.getElementById(modalId).classList.add('show');
}

// Função para esconder o modal
function hideModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
}

// Event Listeners para os botões da barra de filtros
document.getElementById('filterProdutoList').addEventListener('click', () => showModal('filterModalList'));
document.getElementById('filterPagamentoList').addEventListener('click', () => showModal('filterModalList'));
document.getElementById('filterDeliveryList').addEventListener('click', () => showModal('filterModalList'));

// Event Listeners para os botões do modal de filtro
document.getElementById('applyFiltersList').addEventListener('click', () => {
    // Lógica para aplicar filtros (simulado)
    console.log('Filtros aplicados na lista!');
    hideModal('filterModalList');
    // Aqui você adicionaria a lógica real para filtrar a lista de feiras
});
document.getElementById('clearFiltersList').addEventListener('click', () => {
    // Lógica para limpar filtros (simulado)
    console.log('Filtros limpos na lista!');
    const checkboxes = document.querySelectorAll('#filterModalList input[type="checkbox"]');
    checkboxes.forEach(cb => cb.checked = false);
    hideModal('filterModalList');
});

// Event Listener para o botão de busca no header
document.getElementById('searchButtonList').addEventListener('click', () => showModal('searchModalList'));

// Event Listener para alternar para a visualização de mapa (simulado)
document.getElementById('toggleMapViewList').addEventListener('click', () => {
    alert('Navegando para a Visualização de Mapa...');
    // Em uma aplicação real, você faria uma navegação de rota ou renderizaria outro componente/tela
    // window.location.href = 'map_view.html'; // Exemplo de navegação para outra página
});

// Função para simular a navegação para a tela de detalhes da feira
function showFairDetails(fairName) {
    alert(`Navegando para detalhes da feira: ${fairName}`);
    // Em uma aplicação real, você passaria o ID da feira e carregaria a tela de detalhes
}

// Novas funções de simulação para as funcionalidades sugeridas
function viewReviews(fairName) {
    alert(`Visualizando avaliações para: ${fairName}. Aqui seria a tela de detalhes de avaliações.`);
}

function addToShoppingList(fairName) {
    alert(`Adicionando itens da ${fairName} à sua lista de compras.`);
}

function messageFair(fairName) {
    alert(`Abrindo chat com o feirante da ${fairName}.`);
}
