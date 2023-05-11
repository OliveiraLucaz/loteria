let locallotomania = document.getElementById("resultado-lotomania");
fetch('https://loteriascaixa-api.herokuapp.com/api/lotomania/latest')
    .then(response => {
        if (!response.ok) {
            throw new Error('Não houve resposta da api');
        }
        return response.json();
    })
    .then(lotomania => {
        console.log(lotomania);
        document.getElementById('concurso-lotomania').innerHTML = lotomania.concurso;
        document.getElementById('data-lotomania').innerHTML = lotomania.data;
        for(const i in lotomania.dezenas){
            lotomania.dezenas[i];
            document.getElementById("dezenas-lotomania").innerHTML += `
            <div class="numero bg-primary text-white">${lotomania.dezenas[i]}</div>
            ` }
            let cidades = '';
            for (let i in lotomania.estadosPremiados){
              cidades = `${lotomania.estadosPremiados[i].nome}`;
            }
        console.log(lotomania.dezenas);
        if (lotomania.acumulou == false) {
            let venceulotomania = `<div class="comganhador">
        <div class="d-flex align-items-center justify-content-between informacoes">
          <span class="bg-primary text-white p-1 raio">Ganhadores: ${lotomania.premiacoes[0].vencedores}</span>
          <span class="bg-primary text-white p-1 raio">Valor: R$ ${lotomania.premiacoes[0].premio}</span>
        </div>
        <div class="d-flex align-items-center justify-content-center informacoes">
          <span class="bg-primary text-white p-1 raio">Estados premiados: ${lotomania.estadosPremiados.length}<span class="estados"></span>
          </span>
        </div>
        <div class="raio border border-primary d-flex align-items-center justify-content-center informacoes flex-column p-3">
          <span class="text-black p-2 raio">Premiações:</span>
          <div class="d-flex align-items-center justify-content-between flex-column text-center">
            <span class="bg-primary text-white p-1 raio">Sena: 456 ganhadores<br>(R$: 108.393.993.26)</span>
            <span class="m-3 bg-primary text-white p-1 raio">lotomania: 456 ganhadores<br>(R$: 108.393.993.26)</span>
            <span class="bg-primary text-white p-1 raio">Quadra: 456 ganhadores<br>(R$: 108.393.993.26)</span>
          </div>
        </div>
      </div>`;
      locallotomania.innerHTML = `${venceulotomania}`;
        } else {
            let venceulotomania = `<div class="semganhador">
                  <div class="d-flex align-items-center justify-content-between informacoes flex-column">
                    <span class="bg-primary text-white p-1 raio">Não houve ganhadores!</span><br>
                    <span class="bg-primary text-white p-1 raio text-center">Valor acumulado:<br> ${lotomania.acumuladaProxConcurso}</span>
                  </div>
                </div>`;
      locallotomania.innerHTML = `${venceulotomania}`;
        }
        if(lotomania.dataProxConcurso == ""){
          document.getElementById('proximoconcurso-lotomania').innerHTML = `${lotomania.proxConcurso}`;
        }else{
          document.getElementById('proximoconcurso-lotomania').innerHTML = `${lotomania.proxConcurso} em ${lotomania.dataProxConcurso}`;
        }
        document.getElementById('local-lotomania').innerHTML = `Local: ${lotomania.local}`;
    })
    .catch(error => {
        console.log(error);
    });
