const submitBtn = document.querySelector('#enviar')


submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    const form = document.querySelector('#formulario')
    const checkbox = form.querySelectorAll('input[name="areaInteresse"]:checked')

    const areaInteresse = []
    checkbox.forEach(item => {
        areaInteresse.push(item.value)
    })

    console.log("Nome: ", form.nome.value ? form.nome.value : alert("Por favor preencha o campo nome corretamente"))
    console.log("Endereço: ", form.endereco.value ? form.endereco.value : alert("Por favor preencha o campo de endereço corretamente"))
    console.log("Estado: ", form.estado.value != '0' ? form.estado.value.toUpperCase() : alert('Por favor selecione um estado'))
    console.log("Natureza do Cargo: ", form.naturezaCargo.value)
    console.log("Area de interesse: ", areaInteresse.length != 0 ? areaInteresse : alert("Por favor selecione pelo menos uma área de interesse") )
    console.log("Mini-currículo: ", form.curriculo.value)
})
    

