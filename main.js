dados = { id: 1, nome: 'Exemplo' }

const carregaDados = new Promise((resolve, reject) => {
    setTimeout(() => {
        const dadosEsperados = { id: 1, nome: 'Exemplo' }
        if (JSON.stringify(dados) == JSON.stringify(dadosEsperados)){
            resolve(dados);
        }else{
            reject('erro no processamento!!!')
        }
    }, 3000);
});


async function resultado(){
   try{
    const sucesso = await carregaDados
    console.log(sucesso)
   } catch (erro){
    console.error('erro:', erro)
   }
}
resultado()