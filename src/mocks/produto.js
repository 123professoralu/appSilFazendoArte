import Logo from '../../assets/logo.png';
import passa_fita from '../../assets/produtos/passa_fita.png'
import fita_cetim from '../../assets/produtos/fita_cetim.png'
import laise from '../../assets/produtos/laise.png'

const produto = {
    topo: {
        titulo: "Detalhes do produto",
    },
    detalhes: {
        nome: "Kit de Panos de Copa",
        logo: Logo,
        detalhes: "Um kit com panos de copa feitos a mão com muito carinho para deixar sua cozinha mais bonita!",
        preco: "R$ 50,00",
        botao: "Adicionar na Lista de Desejos",
    },
    itens: {
        titulo: "Itens do Kit",
        lista: [
            {
                id: 1,
                nome: "1x Fita de Cetim",
                imagem: fita_cetim,
            },
            {
                id: 2,
                nome: "2x Passa Fita",
                imagem: passa_fita,
            },
            {
                id: 3,
                nome: "1x Laise",
                imagem: laise,
            },
        ]
    }
}

export default produto;