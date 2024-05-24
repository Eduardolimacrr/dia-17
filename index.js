class Hotel {
    Id
    Nome 
    Categoria
    Endereco
    Telefone
    constructor (id, nome, categoria, endereco, telefone) {
        this.Id = id
        this.Nome = nome
        this.Categoria = categoria
        this.Endereco = endereco
        this.Telefone = telefone
    }
}

class Reserva {
    Id
    IdHotel
    Responsavel
    DiaEntrada
    DiaSaida
    constructor (id, idhotel, responsavel, diaEntrada, diaSaida ) {
        this.Id = id
        this.IdHotel = idHotel
        this.Responsavel = responsavel
        this.DiaEntrada = diaEntrada
        this.DiaSaida = diaSaida
    }
}

let hoteis = []
let reservas = []
let idHotel = 1
let idReserva = 1

function CadastrarHotel() {
    let nome = prompt('Digite o nome do hotel')
    let categoria = prompt('Digite o endereço do hotel')
    let endereco = prompt('Digite o endereço do hotel')
    let telefone = prompt('Digite o telefone do hotel')
    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone)
    idHotel++
    hoteis.push(hotel)
}

function CadastrarReserva() {
    let idHotel
    let existe = true
    do {
        idHotel = parseInt(prompt('Digite o id do hotel'))
        for (let i = 0; i < hoteis.length; i++) {
            if (idHotel == hoteis[i].id) {
                i = hoteis.length
                existe = true
            } else if (i == hoteis.length - 1)  {
                console.log('Id de hotel não cadastrado')
            }
        }
    } while (!existe)
        let nome = prompt('Digite o nome do reponsável')
        let diaEntrada = parseInt(prompt('Digite o dia da entrada'))
        let diaSaida
        do {
            diaSaida = parseInt(prompt('Digite o dia da saída'))
            if (diaSaida < diaEntrada) {
                console.log('O dia de saída deve ser maior que o dia de entrada' )
            }    
        }while ( diaSaida < diaEntrada)

        let reserva = new Reserva(idReserva, idHotel, nome, diaEntrada, diaSaida)
        idReserva++
        reservas.push(reserva)
}

function AtualizarTelefone(idHotel, telefone){
    hoteis[idHotel - 1].Telefone = telefone
    console.log('Número de telefone atualizado')
}

let continuar = true
do {
    let opcao = prompt ('Escolha uma opção: \n1 - Cadastrar hotel \n2 - Cadastrar Reserva \n3 - Procurar reserva pelo hotel' + 
        '\n4 - Procurar hotel pela reserva \n5 - Procurar reserva pelo responsável \n6 - Procurar hoteis pela categoria' +
        '\n7 - Atualizar telefone de um hotel \n8 - Encerrar o programa')    
    switch (opcao) {
        case '1' :
            CadastrarHotel()
            break;
        case '2' :
            CadastrarReserva()
            break;
        case '3' :
            ProcurarReservasPeloHotel(prompt('Digite o id do hospital'))
            break;
        case '4' :
            ProcurarHotelPelaReserva(prompt('Digiter o id da reserva'))
            break;
        case '5' :
            ProcurarReservaPeloNome(prompt('Digite o nome do responsável pela reserva'))
            break;
        case '6' :
            let hoteisProcurados = ProcurarHotelPelaCategoria(parseInt(prompt('Digite a categoria que deseja procurar')))
            console.log(hoteisProcurados)
            break;
        case '7' :
            let idHotel = parseInt(prompt('Digite o id do hotel que deseja atualizar'))
            let telefone = prompt('Digite o nome do telefone')
            AtualizarTelefone(idHotel, telefone)
            break;
        case '8' :
            console.log('Programa encerrado')
            continuar = false 
            break;
        default:
            console.log('Opção inválida')
            break;           
    }
}while (continuar)