const resultado = document.querySelector('#resultado')


function capturarDados(){
    const nome = document.querySelector('#nome')
    const cpf = document.querySelector('#cpf')
    const email = document.querySelector('#email')
    const nota = document.getElementById('nota');
	const plano = nota.options[nota.selectedIndex].value;
    const vencimento = document.querySelector('input[name="vencimento"]:checked').value
    const instalacao = document.querySelector('input[name="instalacao"]:checked').value
    const opniao = document.querySelector('#opniao').value

    return {
        nome,
        cpf,
        email,
        plano,
        vencimento,
        instalacao,
        opniao
    }
}


document.addEventListener('click', (e) => {
    
    const lugar = e.target;
    if(lugar.classList.contains('btn')){
        const valores = capturarDados()
        const text = `*Nome:* ${valores.nome.value} %0D*CPF:* ${valores.cpf.value}%0D*E-mail:* ${valores.email.value}%0D*Plano:* ${valores.plano}%0D*Vencimento da Fatura:* ${valores.vencimento}%0D*Tipo de Instalação:* ${valores.instalacao}%0D%0D%0D*Minha Opnião:* ${valores.opniao}`
        window.open(`https://api.whatsapp.com/send?phone=557381837943&text=${text}`);

    
    }

})




