let locallotofacil = document.getElementById("resultado-lotofacil");
fetch('https://loteriascaixa-api.herokuapp.com/api/lotofacil/latest')
    .then(response => {
        if (!response.ok) {
            throw new Error('Não houve resposta da api');
        }
        return response.json();
    })
    .then(lotofacil => {
        console.log(lotofacil);
        document.getElementById('concurso-lotofacil').innerHTML = lotofacil.concurso;
        document.getElementById('data-lotofacil').innerHTML = lotofacil.data;
        for(const i in lotofacil.dezenas){
            lotofacil.dezenas[i];
            document.getElementById("dezenas-lotofacil").innerHTML += `
            <div class="numero bg-primary text-white">${lotofacil.dezenas[i]}</div>
            ` }
            let cidades = '';
            for (let i in lotofacil.estadosPremiados){
              cidades = `${lotofacil.estadosPremiados[i].nome}`;
            }
        console.log(lotofacil.dezenas);
        if (lotofacil.acumulou == false) {
            let venceulotofacil = `<div class="comganhador">
        <div class="d-flex align-items-center justify-content-between informacoes">
          <span class="bg-primary text-white p-1 raio">Ganhadores: ${lotofacil.premiacoes[0].vencedores}</span>
          <span class="bg-primary text-white p-1 raio">Valor: R$ ${lotofacil.premiacoes[0].premio}</span>
        </div>
        <div class="d-flex align-items-center justify-content-center informacoes">
          <span class="bg-primary text-white p-1 raio">Estados premiados: ${lotofacil.estadosPremiados.length}<span class="estados"></span>
          </span>
        </div>
        <div class="raio border border-primary d-flex align-items-center justify-content-center informacoes flex-column p-3">
          <span class="text-black p-2 raio">Premiações:</span>
          <div class="d-flex align-items-center justify-content-between flex-column text-center">
            <span class="bg-primary text-white p-1 raio">Sena: 456 ganhadores<br>(R$: 108.393.993.26)</span>
            <span class="m-3 bg-primary text-white p-1 raio">Quina: 456 ganhadores<br>(R$: 108.393.993.26)</span>
            <span class="bg-primary text-white p-1 raio">Quadra: 456 ganhadores<br>(R$: 108.393.993.26)</span>
          </div>
        </div>
      </div>`;
      locallotofacil.innerHTML = `${venceulotofacil}`;
        } else {
            let venceulotofacil = `<div class="semganhador">
                  <div class="d-flex align-items-center justify-content-between informacoes flex-column">
                    <span class="bg-primary text-white p-1 raio">Não houve ganhadores!</span><br>
                    <span class="bg-primary text-white p-1 raio text-center">Valor acumulado:<br> ${lotofacil.acumuladaProxConcurso}</span>
                  </div>
                </div>`;
      locallotofacil.innerHTML = `${venceulotofacil}`;
        }
        if(lotofacil.dataProxConcurso == ""){
          document.getElementById('proximoconcurso-lotofacil').innerHTML = `${lotofacil.proxConcurso}`;
        }else{
          document.getElementById('proximoconcurso-lotofacil').innerHTML = `${lotofacil.proxConcurso} em ${lotofacil.dataProxConcurso}`;
        }
        document.getElementById('local-lotofacil').innerHTML = `Local: ${lotofacil.local}`;
    })
    .catch(error => {
        console.log(error);
    });
