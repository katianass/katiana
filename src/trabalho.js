export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

export function verificarSePodeSerAdotado(idade, porte) {
  if (idade === 1 && porte === 'M') {
    return true;
  }
  return false;
}

export function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300;
}

export function decidirTipoDeAtividadePorPorte(porte) {
  switch (porte.toLowerCase()) {
    case 'pequeno':
      return 'brincar dentro de casa';
    case 'medio':
      return 'caminhada leve';
    case 'grande':
      return 'correr ao ar livre';
    default:
      return 'atividade não especificada';
  }
}

export async function buscarDadoAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Pipoca');
    }, 100);
  });
}
