/* ============================================================
   ROTEIROS — fonte única de verdade
   Carregado em index.html, roteiros.html e roteiro.html
   ============================================================ */

window.ROTEIROS = {

  'vivencia-do-algodao': {
    slug: 'vivencia-do-algodao',
    nome: 'Vivência do Algodão',
    duracao: '1 dia · 9h',
    duracaoCurta: '1 dia',
    municipio: 'Berilo',
    comunidades: ['Roça Grande'],
    preco: 'A partir de R$ 280',
    precoNum: 280,
    img: 'assets/img/roteiro-vivencia-algodao.png',
    subtitulo: 'Da rama crua ao fio fiado em três séculos.',
    descricao: 'Uma jornada de um dia inteiro pelo saber mais antigo da Rota — o tear de algodão de Roça Grande. Você acompanha o processo desde a colheita até a tecelagem, almoça com a mestra Natalina Soares e ouve os cantos de tecelagem que organizaram o trabalho de gerações de mulheres pretas no Vale.',
    itinerario: [
      { periodo: 'Manhã', atividades: 'Encontro em Berilo · Transfer pra Roça Grande · Recepção na Casa de Selma · Café da manhã quilombola.' },
      { periodo: 'Meio-dia', atividades: 'Oficina de tear de algodão com Natalina Soares · Da rama crua ao fio fiado · Almoço quilombola tradicional (galinha caipira, angu, quitandas).' },
      { periodo: 'Tarde', atividades: 'Caminhada pela roça · Plantio do algodão e tecnologias do semiárido · Contação de causos com as mestras · Cantos de tecelagem.' },
      { periodo: 'Fim do dia', atividades: 'Café da tarde · Despedida · Retorno à cidade-sede.' }
    ],
    inclui: [
      'Monitor local quilombola (Agente de Turismo treinado)',
      'Café da manhã, almoço e café da tarde quilombolas',
      'Oficina de tear (3h) com a mestra Natalina',
      'Transfer entre Berilo e Roça Grande',
      'Material da oficina e degustação de quitandas'
    ],
    naoInclui: [
      'Hospedagem',
      'Transporte de Belo Horizonte até Berilo',
      'Bebidas alcoólicas e despesas pessoais'
    ],
    grupo: 'Até 6 pessoas (grupos privativos sob consulta)',
    melhorEpoca: 'Março a novembro · evite janeiro-fevereiro (chuvas)',
    nivel: 'Leve · acessível pra todas as idades'
  },

  'berilo-ancestral': {
    slug: 'berilo-ancestral',
    nome: 'Berilo Ancestral',
    duracao: '2 dias',
    duracaoCurta: '2 dias',
    municipio: 'Berilo',
    comunidades: ['Roça Grande', 'Caititu do Meio', 'Vila Santo Isidoro'],
    preco: 'A partir de R$ 720',
    precoNum: 720,
    img: 'assets/img/roteiro-berilo-ancestral.png',
    subtitulo: 'Tear, congado e religiosidade nas três comunidades.',
    descricao: 'Imersão de dois dias pelas três comunidades quilombolas certificadas de Berilo — Roça Grande (tear), Caititu do Meio (religiosidade sincrética) e Vila Santo Isidoro (congado). Receptivo familiar, gastronomia tradicional e um cortejo de congado privativo.',
    itinerario: [
      { periodo: 'Dia 1 · Manhã', atividades: 'Encontro em Berilo · Roça Grande · Oficina de tear com Natalina Soares · Almoço quilombola.' },
      { periodo: 'Dia 1 · Tarde', atividades: 'Caititu do Meio · Vivência religiosa sincrética na Igreja de Santa Luzia · Batuque e cantoria.' },
      { periodo: 'Dia 1 · Noite', atividades: 'Receptivo familiar · Jantar comunitário · Pernoite em casa de família ou pousada em Berilo.' },
      { periodo: 'Dia 2 · Manhã', atividades: 'Vila Santo Isidoro · Apresentação de congado · Oficina de tambor.' },
      { periodo: 'Dia 2 · Tarde', atividades: 'Café da tarde com quitandas · Despedida · Retorno.' }
    ],
    inclui: [
      'Monitor local quilombola (2 dias)',
      'Todas as refeições (5 refeições)',
      'Oficinas: tear, batuque, tambor',
      'Transfer entre as 3 comunidades',
      'Pernoite em receptivo familiar ou pousada (sob escolha)'
    ],
    naoInclui: [
      'Transporte de BH até Berilo',
      'Bebidas alcoólicas',
      'Compras de artesanato'
    ],
    grupo: 'Até 8 pessoas',
    melhorEpoca: 'Maio a novembro · pico nas festas do Rosário',
    nivel: 'Leve a moderado'
  },

  'caminho-dos-tamborzeiros': {
    slug: 'caminho-dos-tamborzeiros',
    nome: 'Caminho dos Tamborzeiros',
    duracao: '2 dias',
    duracaoCurta: '2 dias',
    municipio: 'Berilo · Chapada do Norte',
    comunidades: ['Caititu do Meio', 'Vila Santo Isidoro', 'Chapada do Norte'],
    preco: 'A partir de R$ 690',
    precoNum: 690,
    img: 'assets/img/roteiro-tamborzeiros.png',
    subtitulo: 'Tambores, fitas e cortejo de matriz africana.',
    descricao: 'Dois dias dedicados ao congado e à religiosidade afro-mineira. Acompanhe os Tamborzeiros do Rosário em ensaio aberto, conheça a tradição da Festa de N. Sra. do Rosário (Patrimônio IEPHA-MG) e experimente o batuque que organiza fé, festa e território há dois séculos.',
    itinerario: [
      { periodo: 'Dia 1 · Manhã', atividades: 'Encontro · Caititu do Meio · Vivência religiosa sincrética · Almoço.' },
      { periodo: 'Dia 1 · Tarde', atividades: 'Vila Santo Isidoro · Apresentação de congado · Oficina de tambor.' },
      { periodo: 'Dia 1 · Noite', atividades: 'Pernoite em pousada de Berilo ou Chapada do Norte.' },
      { periodo: 'Dia 2 · Manhã', atividades: 'Chapada do Norte · Visita à Igreja de N. Sra. do Rosário dos Pretos · Encontro com Maurício Costa (Procurador-Geral da Irmandade).' },
      { periodo: 'Dia 2 · Tarde', atividades: 'Ensaio aberto dos Tamborzeiros · Café da tarde · Retorno.' }
    ],
    inclui: [
      'Monitor local + acesso à Irmandade do Rosário',
      'Todas as refeições',
      'Oficina de tambor + ensaio aberto',
      'Transfer entre comunidades',
      'Pousada em Chapada do Norte ou Berilo'
    ],
    naoInclui: [
      'Transporte BH-Berilo',
      'Bebidas alcoólicas'
    ],
    grupo: 'Até 8 pessoas',
    melhorEpoca: 'Setembro-outubro especial (proximidade da Festa do Rosário)',
    nivel: 'Leve a moderado'
  },

  'maos-de-palha-e-barro': {
    slug: 'maos-de-palha-e-barro',
    nome: 'Mãos de Palha e Barro',
    duracao: '1 dia · 9h',
    duracaoCurta: '1 dia',
    municipio: 'Chapada do Norte',
    comunidades: ['Gravatá – Quebra Bateia', 'Moça Santa'],
    preco: 'A partir de R$ 320',
    precoNum: 320,
    img: 'assets/img/roteiro-palha-barro.png',
    subtitulo: 'Cestaria com Aneli e cerâmica com Maria Joana.',
    descricao: 'Um dia inteiro nas duas comunidades de Chapada do Norte que mantêm vivas as tradições do trançado e da cerâmica. Pela manhã, oficina de palha de milho com Aneli Pereira (ARCA). À tarde, oficina de barro na Casa de Dona Saninina, em Caetés.',
    itinerario: [
      { periodo: 'Manhã', atividades: 'Encontro em Chapada do Norte · Gravatá-Quebra Bateia · Oficina de cestaria de palha de milho com Aneli Pereira · Almoço quilombola.' },
      { periodo: 'Tarde', atividades: 'Moça Santa (povoado de Caetés) · Casa de Dona Saninina · Oficina de cerâmica com Maria Joana Ferreira.' },
      { periodo: 'Fim do dia', atividades: 'Café da tarde · Visita à pequena exposição de peças · Retorno.' }
    ],
    inclui: [
      'Monitor local',
      'Almoço e café da tarde',
      'Oficina de cestaria de palha de milho',
      'Oficina de cerâmica de barro',
      'Transfer entre comunidades',
      'Material das oficinas'
    ],
    naoInclui: [
      'Hospedagem',
      'Compras de peças de artesanato'
    ],
    grupo: 'Até 6 pessoas',
    melhorEpoca: 'Março a novembro',
    nivel: 'Leve · ótimo pra famílias'
  },

  'mesa-quilombola': {
    slug: 'mesa-quilombola',
    nome: 'Mesa Quilombola',
    duracao: '1 dia · 9h',
    duracaoCurta: '1 dia',
    municipio: 'Chapada do Norte',
    comunidades: ['Córrego do Rocha'],
    preco: 'A partir de R$ 260',
    precoNum: 260,
    img: 'assets/img/roteiro-mesa-quilombola.png',
    subtitulo: 'Café da tarde com cantos de fiandeira.',
    descricao: 'Um dia na Casa da Cida, em Córrego do Rocha. Acompanhe a fiação do algodão na roca, almoce em torno da mesa coletiva e fique pro café da tarde com quitandas saídas do fogão a lenha. As fiandeiras vão te ensinar os cantos antigos enquanto trabalham.',
    itinerario: [
      { periodo: 'Manhã', atividades: 'Encontro em Chapada do Norte · Córrego do Rocha · Casa da Cida · Recepção e café da manhã.' },
      { periodo: 'Meio-dia', atividades: 'Oficina de fiação · Roca, algodão e ritmo do fio · Almoço quilombola na mesa coletiva.' },
      { periodo: 'Tarde', atividades: 'Cantoria das fiandeiras · Café da tarde com quitandas (brevidade, polvilho frito, biscoito de fubá) · Despedida.' }
    ],
    inclui: [
      'Monitor local',
      'Café da manhã + almoço + café da tarde',
      'Oficina de fiação (1h30)',
      'Cantoria com as mestras',
      'Transfer da cidade-sede'
    ],
    naoInclui: [
      'Hospedagem',
      'Compras'
    ],
    grupo: 'Até 6 pessoas',
    melhorEpoca: 'Ano todo',
    nivel: 'Leve · contemplativo'
  },

  'marujada-do-alagadico': {
    slug: 'marujada-do-alagadico',
    nome: 'Marujada do Alagadiço',
    duracao: '2 dias',
    duracaoCurta: '2 dias',
    municipio: 'Minas Novas',
    comunidades: ['Quilombo / São Pedro do Alagadiço', 'Santiago'],
    preco: 'A partir de R$ 680',
    precoNum: 680,
    img: 'assets/img/roteiro-marujada.png',
    subtitulo: 'Flauta, violão, tambor e oração cantada.',
    descricao: 'Dois dias no Núcleo Alagadiço de Minas Novas. Conheça a Marujada União de Ribeirão da Folha, com Sr. Marciano e Dona Beota, e termine em Santiago, onde Maria dos Anjos te recebe com café da tarde e doces caseiros saídos do fogão a lenha.',
    itinerario: [
      { periodo: 'Dia 1 · Manhã', atividades: 'Encontro em Minas Novas · Quilombo/São Pedro do Alagadiço · Casa de Marciano e Beota · Almoço.' },
      { periodo: 'Dia 1 · Tarde', atividades: 'Apresentação completa de Marujada · Oficina de tambor · Vivência intergeracional.' },
      { periodo: 'Dia 1 · Noite', atividades: 'Pernoite em pousada de Minas Novas (sugestão: Pousada do Centro Histórico).' },
      { periodo: 'Dia 2 · Manhã', atividades: 'Santiago · Casa de Zeca dos Santos Soares · Visita à horta familiar (banana, marmelo, coco).' },
      { periodo: 'Dia 2 · Tarde', atividades: 'Café da tarde com Maria dos Anjos · Doces caseiros · Despedida.' }
    ],
    inclui: [
      'Monitor local',
      'Todas as refeições (5)',
      'Apresentação de Marujada + oficina de tambor',
      'Vivência na horta familiar',
      'Transfer entre comunidades',
      'Pernoite em pousada'
    ],
    naoInclui: [
      'Transporte BH-Minas Novas',
      'Bebidas alcoólicas'
    ],
    grupo: 'Até 6 pessoas',
    melhorEpoca: 'Ano todo · safra de marmelo entre março e junho',
    nivel: 'Leve a moderado'
  },

  'caminho-do-macuco': {
    slug: 'caminho-do-macuco',
    nome: 'Caminho do Macuco',
    duracao: '2 dias',
    duracaoCurta: '2 dias',
    municipio: 'Minas Novas',
    comunidades: ['Macuco', 'Pinheiro', 'Mata Dois'],
    preco: 'A partir de R$ 690',
    precoNum: 690,
    img: 'assets/img/roteiro-macuco.png',
    subtitulo: 'O núcleo originário, três comunidades, um saber.',
    descricao: 'Macuco foi um dos três quilombos originários (junto com Bandeirinha e Bandeira Grande) que deram origem à região no século XVIII. Hoje, junto com Pinheiro e Mata Dois, forma um núcleo unificado. Este roteiro te leva à raiz histórica da Rota — receptivo familiar, contação de causos e trilha pelo cerrado em transição com a caatinga.',
    itinerario: [
      { periodo: 'Dia 1 · Manhã', atividades: 'Encontro em Minas Novas · Macuco · Recepção na Casa de Nete · Café e contação de história quilombola.' },
      { periodo: 'Dia 1 · Tarde', atividades: 'Almoço caipira na Casa de Lica · Visita ao núcleo originário · Conversa sobre genealogia e território.' },
      { periodo: 'Dia 1 · Noite', atividades: 'Pernoite em receptivo familiar.' },
      { periodo: 'Dia 2 · Manhã', atividades: 'Mata Dois · Trilha ecológica quilombola · Plantas medicinais e sementes crioulas.' },
      { periodo: 'Dia 2 · Tarde', atividades: 'Pinheiro · Vivência rural · Café da tarde com quitandas · Despedida.' }
    ],
    inclui: [
      'Monitor local',
      'Todas as refeições',
      'Trilha guiada com identificação de plantas medicinais',
      'Transfer entre comunidades',
      'Pernoite em receptivo familiar'
    ],
    naoInclui: [
      'Transporte BH-Minas Novas',
      'Bebidas alcoólicas'
    ],
    grupo: 'Até 6 pessoas',
    melhorEpoca: 'Março a junho (paisagem verde)',
    nivel: 'Moderado · trilha leve de 2km'
  },

  'festa-do-rosario': {
    slug: 'festa-do-rosario',
    nome: 'Festa do Rosário',
    duracao: '3 dias · 2º domingo de outubro',
    duracaoCurta: '3 dias · outubro',
    municipio: 'Chapada do Norte',
    comunidades: ['Chapada do Norte (cidade)', 'Comunidades quilombolas locais'],
    preco: 'A partir de R$ 1.450',
    precoNum: 1450,
    img: 'assets/img/roteiro-festa-rosario.png',
    subtitulo: 'Patrimônio Imaterial de Minas Gerais · 200 anos.',
    destaque: 'Patrimônio IEPHA-MG (2013)',
    descricao: 'A Festa de Nossa Senhora do Rosário dos Homens Pretos de Chapada do Norte é a única celebração religiosa de Minas Gerais reconhecida como Patrimônio Cultural Imaterial. Acontece desde 1822. Este é um roteiro de imersão TOTAL na festa — você acompanha desde as novenas até o Reinado, com acesso garantido aos rituais e contato direto com a Irmandade do Rosário.',
    itinerario: [
      { periodo: 'Dia 1 · Quinta', atividades: 'Chegada em Chapada do Norte · Quinta do Angu · Lavação da Igreja · Novenas.' },
      { periodo: 'Dia 2 · Sábado', atividades: 'Buscada da Santa · Mastro a Cavalo · Cortejo · Jantar coletivo.' },
      { periodo: 'Dia 3 · Domingo', atividades: 'Alvorada com Tamborzeiros · Missa da Festa · Reinado · Coroação do Rei e Rainha · Cofre.' }
    ],
    inclui: [
      'Monitor local + acesso institucional à Irmandade',
      'Todas as refeições (8 refeições incluindo Quinta do Angu)',
      'Pernoite em pousada reservada com 6 meses de antecedência',
      'Transfer interno · acompanhamento em todos os rituais',
      'Encontro privativo com Maurício Costa (Procurador-Geral)',
      'Documentação histórica da festa'
    ],
    naoInclui: [
      'Transporte BH-Chapada do Norte',
      'Bebidas alcoólicas'
    ],
    grupo: 'Até 4 pessoas (vagas limitadas — reserve com 6 meses)',
    melhorEpoca: '2º domingo de outubro · ÚNICA data',
    nivel: 'Leve · espiritual'
  },

  'rota-completa-do-vale': {
    slug: 'rota-completa-do-vale',
    nome: 'Rota Completa do Vale',
    duracao: '5 dias',
    duracaoCurta: '5 dias',
    municipio: 'Os 3 municípios',
    comunidades: ['As 12 comunidades'],
    preco: 'A partir de R$ 2.890',
    precoNum: 2890,
    img: 'assets/img/roteiro-rota-completa.png',
    subtitulo: 'Imersão total. As 12 comunidades. O Vale inteiro.',
    descricao: 'Cinco dias de imersão profunda pela Rota dos Quilombos completa. Você atravessa Berilo, Chapada do Norte e Minas Novas, conhece todas as 12 comunidades certificadas, vive cada um dos seis saberes-âncora e termina com uma visão panorâmica do que é hoje a maior rede de turismo de base comunitária quilombola de Minas Gerais.',
    itinerario: [
      { periodo: 'Dia 1', atividades: 'Berilo · Roça Grande (tear) + Caititu (religiosidade) + Vila Santo Isidoro (congado) · Pernoite em Berilo.' },
      { periodo: 'Dia 2', atividades: 'Chapada do Norte · Gravatá (palha) + Faceira (REDETUR) · Pernoite em Chapada.' },
      { periodo: 'Dia 3', atividades: 'Chapada do Norte · Córrego do Rocha (fiação) + Moça Santa (cerâmica) · Visita às 4 igrejas históricas · Pernoite em Chapada.' },
      { periodo: 'Dia 4', atividades: 'Minas Novas · Núcleo Macuco (Macuco + Pinheiro + Mata Dois) · Pernoite em Minas Novas.' },
      { periodo: 'Dia 5', atividades: 'Minas Novas · Núcleo Alagadiço (Quilombo + São Pedro + Santiago) · Marujada · Despedida.' }
    ],
    inclui: [
      'Monitor local em todos os trechos',
      'Todas as refeições (15 refeições)',
      '4 pernoites (mix de pousada + receptivo familiar)',
      'Transfers entre os 3 municípios',
      'Todas as oficinas e apresentações culturais',
      'Material institucional · livro "À luz do algodão" de Lori Figueiró'
    ],
    naoInclui: [
      'Transporte BH-Vale do Jequitinhonha (520+ km)',
      'Bebidas alcoólicas',
      'Compras pessoais'
    ],
    grupo: 'Até 6 pessoas',
    melhorEpoca: 'Maio a outubro · combine com festas do Rosário',
    nivel: 'Moderado · 5 dias de roteiro intenso'
  },

  'imersao-pedagogica': {
    slug: 'imersao-pedagogica',
    nome: 'Imersão Pedagógica',
    duracao: '1-3 dias',
    duracaoCurta: '1-3 dias',
    municipio: 'Customizável',
    comunidades: ['A definir conforme escola/projeto'],
    preco: 'Sob orçamento · grupos B2B',
    precoNum: 0,
    img: 'assets/img/roteiro-pedagogica.png',
    subtitulo: 'Pra escolas, universidades e empresas com pauta ESG.',
    descricao: 'Roteiro customizável pra grupos institucionais. Material didático pré-aprovado, contrapartida ESG documentada, certificado de participação pra estudantes. Acessível a partir de 10 pessoas, com agendamento mínimo de 30 dias. A Nzinga monta o roteiro junto com a coordenação pedagógica da sua instituição.',
    itinerario: [
      { periodo: 'Pré-vivência', atividades: 'Encontro online com coordenação pedagógica · Material didático preparatório · Workshop de educação patrimonial.' },
      { periodo: 'Vivência (1-3 dias)', atividades: 'Conforme programa pedagógico definido · Acompanhamento por monitor formado · Documentação da experiência.' },
      { periodo: 'Pós-vivência', atividades: 'Encontro de avaliação · Certificado de participação · Relatório de impacto ESG.' }
    ],
    inclui: [
      'Pré-encontro online com a equipe pedagógica',
      'Material didático personalizado',
      'Monitor pedagógico nas vivências',
      'Documentação fotográfica e vídeo (uso institucional)',
      'Certificado de participação',
      'Relatório de impacto socioambiental'
    ],
    naoInclui: [
      'Transporte do grupo até o Vale',
      'Hospedagem (cotada à parte)',
      'Refeições (cotadas à parte)'
    ],
    grupo: '10 a 30 pessoas',
    melhorEpoca: 'Calendário escolar (março-novembro)',
    nivel: 'Adaptável a faixa etária e perfil'
  }

};
