const url = 'http://localhost:3000/tarefas';

function darFeedback(msg, tipo) {
    const div = document.getElementById('feedback');
    div.textContent = msg;
    div.className = tipo; 
    setTimeout(() => div.textContent = '', 3000);
}

function carregarTarefas() {
    fetch(url)
        .then(res => res.json())
        .then(tarefas => {
            const lista = document.getElementById('lista');
            lista.innerHTML = '';
            tarefas.forEach(t => {
                const li = document.createElement('li');
                if (t.status) li.classList.add('concluida');
                
                li.innerHTML = `
                    <span>${t.descricao}</span>
                    <div>
                        <button onclick="alterarStatus(${t.id}, ${!t.status})">
                            ${t.status ? 'Desfazer' : 'Concluir'}
                        </button>
                        <button class="btn-excluir" onclick="removerTarefa(${t.id})">Remover</button>
                    </div>
                `;
                lista.appendChild(li);
            });
        });
}

document.getElementById('formTarefa').addEventListener('submit', function(e) {
    e.preventDefault();
    const descricao = document.getElementById('descricao').value;
    
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ descricao })
    }).then(res => {
        if (!res.ok) throw new Error('Falha na API'); // Força o erro se o status não for 2xx
        darFeedback('Tarefa cadastrada!', 'sucesso');
        document.getElementById('formTarefa').reset();
        carregarTarefas();
    }).catch(() => darFeedback('Erro ao cadastrar.', 'erro'));
});

function alterarStatus(id, novoStatus) {
    fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: novoStatus })
    }).then(() => carregarTarefas());
}

function removerTarefa(id) {
    if (confirm('Deseja realmente remover esta tarefa?')) {
        fetch(`${url}/${id}`, { method: 'DELETE' })
            .then(() => {
                darFeedback('Tarefa removida!', 'sucesso');
                carregarTarefas();
            });
    }
}

carregarTarefas();