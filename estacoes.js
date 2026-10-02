
class Estacoes {

    static quantidadeEstacoes = 0

    constructor(nome, status, quantidadePE, nivel) {
        this.nome = nome
        this.status = status
        this.quantidadePE = quantidadePE
        this.nivel = nivel

        Estacoes.quantidadeEstacoes++
    }

    verificarStatus() {
        if (this.status === "acabada") {
            return `A estação ${this.nome} já foi concluída!`
        } else {
            return `A estação ${this.nome} ainda precisa ser concluída.`
        }
    }

    calcularEquipe() {
        let pessoas

        if (this.nivel == 1) {
            pessoas = 2
        }
        else if (this.nivel == 2) {
            pessoas = 3
        }
        else if (this.nivel == 3) {
            pessoas = 4
        }
        else if (this.nivel == 4) {
            pessoas = 5
        }
        else if (this.nivel == 5) {
            pessoas = 6
        }
        else {
            pessoas = "Nível inválido"
        }

        return pessoas
    }

    mostrar() {
        return `A estação ${this.nome} está ${this.status} e está no nível ${this.nivel}.`
    }
}


class LGBT extends Estacoes {

    mostrar() {
        return `A estação ${this.nome} está ${this.status}, está no nível ${this.nivel} e precisa de ${this.calcularEquipe()} pessoas.`
    }
}


class Astronomia extends Estacoes {

    mostrar() {
        return `A estação ${this.nome} está ${this.status}, está no nível ${this.nivel} e precisa de ${this.calcularEquipe()} pessoas.`
    }
}


class HistoriaAgrafa extends Estacoes {

    mostrar() {
        return `A estação ${this.nome} está ${this.status}, está no nível ${this.nivel} e precisa de ${this.calcularEquipe()} pessoas.`
    }
}


class LaboratorioES extends Estacoes {

    mostrar() {
        return `A estação ${this.nome} está ${this.status}, está no nível ${this.nivel} e precisa de ${this.calcularEquipe()} pessoas.`
    }
}


class Informacoes extends Estacoes {

    informacao() {
        return `Os níveis funcionam como um medidor da quantidade de pessoas que serão necessárias para que a estação seja concluída.

Quanto maior o nível, mais pessoas serão necessárias para que a estação acabe mais rápido.`
    }
}


class Niveis extends Estacoes {

    mostrar() {
        return `============ NÍVEIS ===============

Nível 1 - 2 pessoas

Nível 2 - 3 pessoas

Nível 3 - 4 pessoas

Nível 4 - 5 pessoas

Nível 5 - 6 pessoas`
    }
}


class Cangaco extends Estacoes {}

class RealezasNegras extends Estacoes {}

class EgitoAntigo extends Estacoes {}

class MascarasAfricanas extends Estacoes {}

class MitologiaOrixa extends Estacoes {}

class BrasilColonia extends Estacoes {}



const informacoes = new Informacoes(
    "informacoes",
    "inexistente",
    "inexistente",
    "inexistente"
)

const niveis = new Niveis()

const lgbt = new LGBT(
    "LGBT",
    "inacabada",
    2,
    5
)

const realezasNegras = new RealezasNegras(
    "Realezas Negras",
    "acabada",
    3,
    "não possui"
)

const cangaco = new Cangaco(
    "Cangaço",
    "acabada",
    4,
    "não possui"
)

const mitologiaDosOrixas = new MitologiaOrixa(
    "Mitologia dos Orixás",
    "acabada",
    3,
    "não possui"
)

const astronomia = new Astronomia(
    "Astronomia",
    "inacabada",
    2,
    1
)

const brasilColonia = new BrasilColonia(
    "Brasil Colônia",
    "acabada",
    2,
    "não possui"
)

const historiaAgrafa = new HistoriaAgrafa(
    "História Ágrafa",
    "inacabada",
    3,
    2
)

const laboratorioES = new LaboratorioES(
    "Laboratório ES",
    "inacabada",
    3,
    5
)

const egitoAntigo = new EgitoAntigo(
    "Egito Antigo",
    "acabada",
    3,
    "não possui"
)

const mascarasAfricanas = new MascarasAfricanas(
    "Máscaras Africanas",
    "acabada",
    3,
    "não possui"
)




console.log("============== ESTAÇÕES ==============")

console.log(`Quantidade de estações: ${Estacoes.quantidadeEstacoes}`)

console.log(lgbt.mostrar())

console.log(astronomia.mostrar())

console.log(cangaco.mostrar())

console.log(egitoAntigo.mostrar())

console.log(brasilColonia.mostrar())

console.log(historiaAgrafa.mostrar())

console.log(mascarasAfricanas.mostrar())

console.log(mitologiaDosOrixas.mostrar())

console.log(laboratorioES.mostrar())

console.log(realezasNegras.mostrar())



console.log(lgbt.verificarStatus())


console.log("=========== INFORMAÇÕES ==============")
console.log(informacoes.informacao())
console.log(`Quantidade de estações: ${Estacoes.quantidadeEstacoes}`)
console.log(niveis.mostrar())


console.log("======== CONCLUÍDAS ==========")

console.log(egitoAntigo.verificarStatus())
console.log(cangaco.verificarStatus())
console.log(brasilColonia.verificarStatus())
console.log(mascarasAfricanas.verificarStatus())
console.log(mitologiaDosOrixas.verificarStatus())
console.log(realezasNegras.verificarStatus())

console.log("======== PERCENTUAL DE CONCLUSÃO ==========")

const percentualConclusao = (Estacoes.quantidadeEstacoes - 5) / Estacoes.quantidadeEstacoes * 100
console.log(`Percentual de conclusão: ${percentualConclusao.toFixed(2)}%`)