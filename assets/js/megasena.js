let localmegasena = document.getElementById("resultado-megasena");
fetch('https://loteriascaixa-api.herokuapp.com/api/mega-sena/latest')
    .then(response => {
        if (!response.ok) {
            throw new Error('Não houve resposta da api');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        document.getElementById('concurso').innerHTML = data.concurso;
        document.getElementById('data').innerHTML = data.data;
        for(const i in data.dezenas){
            data.dezenas[i];
            document.getElementById("dezenas").innerHTML += `
            <div class="numero bg-primary text-white">${data.dezenas[i]}</div>
            ` }
            let cidades = '';
            for (let i in data.estadosPremiados){
              cidades = `${data.estadosPremiados[i].nome}`;
            }
        console.log(data.dezenas);
        if (data.acumulou == false) {
            let venceumegasena = `<div class="comganhador">
        <div class="d-flex align-items-center justify-content-between informacoes">
          <span class="bg-primary text-white p-1 raio">Ganhadores: ${data.premiacoes[0].vencedores}</span>
          <span class="bg-primary text-white p-1 raio">Valor: R$ ${data.premiacoes[0].premio}</span>
        </div>
        <div class="d-flex align-items-center justify-content-center informacoes">
          <span class="bg-primary text-white p-1 raio">Estados premiados: ${data.estadosPremiados.length}<span class="estados"></span>
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
      localmegasena.innerHTML = `${venceumegasena}`;
        } else {
            let venceumegasena = `<div class="semganhador">
                  <div class="d-flex align-items-center justify-content-between informacoes flex-column">
                    <span class="bg-primary text-white p-1 raio">Não houve ganhadores!</span><br>
                    <span class="bg-primary text-white p-1 raio text-center">Valor acumulado:<br> ${data.acumuladaProxConcurso}</span>
                  </div>
                </div>`;
      localmegasena.innerHTML = `${venceumegasena}`;
        }
        if(data.dataProxConcurso == ""){
          document.getElementById('proximoconsurso').innerHTML = `${data.proxConcurso}`;
        }else{
          document.getElementById('proximoconsurso').innerHTML = `${data.proxConcurso} em ${data.dataProxConcurso}`;
        }
        document.getElementById('local').innerHTML = `Local: ${data.local}`;
    })
    .catch(error => {
        console.log(error);
    });
