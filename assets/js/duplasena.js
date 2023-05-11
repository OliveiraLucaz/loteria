let localduplasena = document.getElementById("resultado-duplasena");
fetch('https://loteriascaixa-api.herokuapp.com/api/dupla-sena/latest')
    .then(response => {
        if (!response.ok) {
            throw new Error('Não houve resposta da api');
        }
        return response.json();
    })
    .then(duplasena => {
        console.log(duplasena);
        document.getElementById('concurso-duplasena').innerHTML = duplasena.concurso;
        document.getElementById('data-duplasena').innerHTML = duplasena.data;
        for(const i in duplasena.dezenas){
            duplasena.dezenas[i];
            document.getElementById("dezenas-duplasena").innerHTML += `
            <div class="numero bg-primary text-white">${duplasena.dezenas[i]}</div>
            ` }
            let cidades = '';
            for (let i in duplasena.estadosPremiados){
              cidades = `${duplasena.estadosPremiados[i].nome}`;
            }
        console.log(duplasena.dezenas);
        if (duplasena.acumulou == false) {
            let venceuduplasena = `<div class="comganhador">
        <div class="d-flex align-items-center justify-content-between informacoes">
          <span class="bg-primary text-white p-1 raio">Ganhadores: ${duplasena.premiacoes[0].vencedores}</span>
          <span class="bg-primary text-white p-1 raio">Valor: R$ ${duplasena.premiacoes[0].premio}</span>
        </div>
        <div class="d-flex align-items-center justify-content-center informacoes">
          <span class="bg-primary text-white p-1 raio">Estados premiados: ${duplasena.estadosPremiados.length}<span class="estados"></span>
          </span>
        </div>
        <div class="raio border border-primary d-flex align-items-center justify-content-center informacoes flex-column p-3">
          <span class="text-black p-2 raio">Premiações:</span>
          <div class="d-flex align-items-center justify-content-between flex-column text-center">
            <span class="bg-primary text-white p-1 raio">Sena: 456 ganhadores<br>(R$: 108.393.993.26)</span>
            <span class="m-3 bg-primary text-white p-1 raio">duplasena: 456 ganhadores<br>(R$: 108.393.993.26)</span>
            <span class="bg-primary text-white p-1 raio">Quadra: 456 ganhadores<br>(R$: 108.393.993.26)</span>
          </div>
        </div>
      </div>`;
      localduplasena.innerHTML = `${venceuduplasena}`;
        } else {
            let venceuduplasena = `<div class="semganhador">
                  <div class="d-flex align-items-center justify-content-between informacoes flex-column">
                    <span class="bg-primary text-white p-1 raio">Não houve ganhadores!</span><br>
                    <span class="bg-primary text-white p-1 raio text-center">Valor acumulado:<br> ${duplasena.acumuladaProxConcurso}</span>
                  </div>
                </div>`;
      localduplasena.innerHTML = `${venceuduplasena}`;
        }
        if(duplasena.dataProxConcurso == ""){
          document.getElementById('proximoconcurso-duplasena').innerHTML = `${duplasena.proxConcurso}`;
        }else{
          document.getElementById('proximoconcurso-duplasena').innerHTML = `${duplasena.proxConcurso} em ${duplasena.dataProxConcurso}`;
        }
        document.getElementById('local-duplasena').innerHTML = `Local: ${duplasena.local}`;
    })
    .catch(error => {
        console.log(error);
    });
