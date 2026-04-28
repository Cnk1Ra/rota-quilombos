/* ============================================================
   ROTA DOS QUILOMBOS — DADOS DAS 12 COMUNIDADES
   Fonte única de verdade. Carregado em index.html (mapa) e
   comunidade.html (template de página dedicada).
   ============================================================ */

window.COMUNIDADES = {

  /* ---------- BERILO (3) ---------- */

  'roca-grande': {
    slug: 'roca-grande',
    nome: 'Roça Grande',
    municipio: 'Berilo',
    saber: 'Tear de algodão e cantos de tecelagem',
    img: 'assets/img/comunidade-roca-grande.png',
    tag: 'Berilo · Médio Jequitinhonha',
    subtitulo: 'Onde o algodão ainda canta no tear.',
    texto: 'Em Roça Grande, o algodão é plantado, colhido com varas e tecido em teares de madeira como há três séculos. A Associação de Produtores e Artesãs mantém viva a tradição sob liderança da mestra Natalina Soares de Souza, referenciada no livro "À luz do algodão" de Lori Figueiró.',
    historia: 'Roça Grande é uma das três comunidades quilombolas certificadas pela Fundação Cultural Palmares no município de Berilo. Aqui, o algodão é plantado, colhido, descaroçado com varas, fiado em rocas e tecido em teares de madeira como há três séculos. O ofício é mais que técnica — é tecnologia social ancestral, transmitida por mulheres pretas, atravessada por cantos que organizavam o trabalho, marcavam o tempo, ensinavam o nome das coisas.',
    mestre: 'Natalina Soares de Souza',
    mestreRole: 'Mestra do tear · Artesã referência',
    receptivo: 'Casas de Selma e Eni',
    certificacao: 'Palmares · Portaria 83/2017',
    canto: '"Me ajuda companheiro / Deixa de tanta vergonha / Que aqui não é cidade / Aqui é mata medonha!"',
    cantoLegenda: 'Canto de tecelagem',
    experiencias: [
      { titulo: 'Oficina de tear de algodão', descricao: 'Da rama crua ao fio fiado: experiência prática com Natalina e as artesãs da Associação.' },
      { titulo: 'Almoço quilombola na Casa de Selma', descricao: 'Galinha caipira, angu de fubá de produção própria, quiabo e quitandas no fogão a lenha.' },
      { titulo: 'Contação de causos e cantos do tear', descricao: 'Versos sobre o semiárido e a memória do quilombo.' },
      { titulo: 'Caminhada pela roça', descricao: 'Plantio do algodão e tecnologias sociais de convivência com o semiárido.' }
    ],
    comoVisitar: {
      chegar: 'BR-135 e BR-367 a partir de Belo Horizonte (~560 km). Acesso à comunidade pela cidade-sede de Berilo.',
      hospedagem: 'Receptivo familiar nas casas de Selma e Eni (capacidade limitada, agendamento prévio) ou Hotel Pousada Vale de Minas no centro de Berilo.',
      melhorEpoca: 'A partir de março — pós-chuvas, paisagem verde. Festas religiosas concentradas entre maio e novembro.'
    },
    page: 'comunidade.html?slug=roca-grande',
    produtos: [
      {
        nome: 'Pano de algodão tecido no tear',
        descricao: 'Algodão crioulo plantado, colhido e fiado pela própria comunidade.',
        comoEFeito: 'O algodão é plantado no quintal, colhido com varas, descaroçado, fiado em rocas de pedal e tecido em teares de madeira como há três séculos. Cada peça leva entre 5 e 15 dias.',
        preco: 'A partir de R$ 80',
        img: 'assets/img/tear-algodao.png'
      },
      {
        nome: 'Rede de algodão',
        descricao: 'Rede tradicional do tear de pé, com fios de algodão crioulo.',
        comoEFeito: 'Tecida em tear de pé com fios crus do algodão da roça, em padrão tramado tradicional do Vale. Acabamento das pontas costurado à mão. Tempo de produção: 20-30 dias.',
        preco: 'A partir de R$ 350',
        img: 'assets/img/tear-algodao.png'
      },
      {
        nome: 'Toalha bordada',
        descricao: 'Tecida no tear e bordada manualmente com pontos tradicionais.',
        comoEFeito: 'Base tecida no tear horizontal e bordada manualmente pelas mestras com pontos quilombolas — flores, folhas e motivos do cerrado. Cada toalha é única.',
        preco: 'A partir de R$ 60',
        img: 'assets/img/tear-algodao.png'
      }
    ]
  },

  'caititu': {
    slug: 'caititu',
    nome: 'Caititu do Meio',
    municipio: 'Berilo',
    saber: 'Religiosidade sincrética e congado',
    img: 'assets/img/comunidade-caititu-do-meio.png',
    tag: 'Berilo · Médio Jequitinhonha',
    subtitulo: 'A fé que entra na igreja cantando.',
    texto: 'Os moradores entram na Igreja de Santa Luzia em trajes típicos cantando o terço em coro; do lado de fora, batuque. O Congado de Caititu já se apresentou no Festival Canjerê em Belo Horizonte, levando a matriz africana da fé sincrética ao palco institucional.',
    historia: 'Caititu do Meio guarda uma religiosidade que mistura o catolicismo trazido pelos colonizadores com saberes ancestrais africanos preservados pelas comunidades quilombolas. A Igreja de Santa Luzia é cenário de uma das mais bonitas tradições da região: moradores entram em trajes típicos cantando o terço em coro, enquanto do lado de fora, o batuque marca o tempo.',
    mestre: 'Grupo de Congado de Caititu',
    mestreRole: 'Coletivo congadeiro',
    receptivo: 'Casas da comunidade',
    experiencias: [
      { titulo: 'Vivência religiosa sincrética', descricao: 'O terço cantado dentro da Igreja de Santa Luzia.' },
      { titulo: 'Apresentação de Congado', descricao: 'Tambores, fitas e cortejo do grupo da comunidade.' },
      { titulo: 'Batuque e cantoria', descricao: 'Encontro com as mestras da fé e do canto.' }
    ],
    comoVisitar: {
      chegar: 'BR-135 e BR-367 desde Belo Horizonte (~560 km), saída pela cidade-sede de Berilo.',
      hospedagem: 'Receptivos familiares na comunidade ou Hotel Pousada Vale de Minas em Berilo.',
      melhorEpoca: 'Festas do Rosário entre maio e novembro. Verão pós-chuvas.'
    },
    page: 'comunidade.html?slug=caititu',
    produtos: [
      {
        nome: 'Terço artesanal',
        descricao: 'Contas de sementes nativas e madeira do cerrado.',
        comoEFeito: 'Sementes coletadas de árvores do território (jequitibá, paineira), perfuradas à mão e montadas com fios encerados. Crucifixo entalhado em madeira local. Cada terço carrega a oração da comunidade.',
        preco: 'A partir de R$ 45',
        img: 'assets/img/igreja-barroca.png'
      },
      {
        nome: 'Bandeira de festa',
        descricao: 'Bandeira religiosa em algodão tingido com pigmentos naturais.',
        comoEFeito: 'Tecido de algodão pintado à mão pelas mulheres da comunidade com pigmentos extraídos de cascas, sementes e raízes do cerrado. Costurada em uma única peça.',
        preco: 'Sob encomenda',
        img: 'assets/img/igreja-barroca.png'
      }
    ]
  },

  'vila-santo-isidoro': {
    slug: 'vila-santo-isidoro',
    nome: 'Vila Santo Isidoro',
    municipio: 'Berilo',
    saber: 'Congado tradicional',
    img: 'assets/img/comunidade-vila-santo-isidoro.png',
    tag: 'Berilo · Médio Jequitinhonha',
    subtitulo: 'O cortejo que atravessa o Vale.',
    texto: 'Cortejo de congado já apresentado no Festival Canjerê em BH. Saberes herdados de mestres congadeiros, transmitidos por gerações nos tambores, fitas e cantorias.',
    historia: 'Vila Santo Isidoro mantém um cortejo de congado tradicional que já cruzou a fronteira do Vale do Jequitinhonha — apresentou-se em Belo Horizonte no Festival Canjerê. A força da tradição sobrevive nos tambores, nas fitas, nos chapéus de palha e nas cantorias.',
    mestre: 'Grupo congadeiro local',
    mestreRole: 'Coletivo de mestres congadeiros',
    receptivo: 'Casas da comunidade',
    experiencias: [
      { titulo: 'Apresentação do cortejo', descricao: 'Congado completo com tambores, fitas e cantoria.' },
      { titulo: 'Oficina de tambor', descricao: 'Iniciação aos toques tradicionais.' },
      { titulo: 'Vivência intergeracional', descricao: 'Encontro com os jovens e mestres do grupo.' }
    ],
    comoVisitar: {
      chegar: 'Via Berilo (BR-135/367 desde BH).',
      hospedagem: 'Hospedagem na cidade-sede de Berilo.',
      melhorEpoca: 'Junto com o calendário das festas do Rosário (maio a novembro).'
    },
    page: 'comunidade.html?slug=vila-santo-isidoro',
    produtos: [
      {
        nome: 'Tambor congadeiro',
        descricao: 'Tambor entalhado em madeira local com couro curtido.',
        comoEFeito: 'Tronco de cedro do cerrado oco e moldado, couro de boi curtido pela comunidade, lacração com cordas de algodão tencionadas. Cada tambor leva 1 mês para ficar pronto e é afinado pelo mestre.',
        preco: 'A partir de R$ 480',
        img: 'assets/img/tambor-congado.png'
      },
      {
        nome: 'Fita do Reinado',
        descricao: 'Fitas de cetim costuradas em camadas, motivos da festa.',
        comoEFeito: 'Fitas longas costuradas à mão pelas mulheres da congada, em camadas, com cores e motivos específicos do Reinado do Rosário. Cada cor carrega significado simbólico.',
        preco: 'A partir de R$ 35',
        img: 'assets/img/tambor-congado.png'
      }
    ]
  },

  /* ---------- CHAPADA DO NORTE (4) ---------- */

  'gravata': {
    slug: 'gravata',
    nome: 'Gravatá – Quebra Bateia',
    municipio: 'Chapada do Norte',
    saber: 'Cestaria em palha de milho',
    img: 'assets/img/comunidade-gravata.png',
    tag: 'Chapada do Norte · Médio Jequitinhonha',
    subtitulo: 'O trançado que vira pão na mesa.',
    texto: 'Trançado tradicional em palha de milho. A artesã Aneli Pereira, da ARCA (Associação dos Artesãos de Chapada do Norte), levou a peça à Feira da UFMG em 2019, posicionando o saber no circuito acadêmico.',
    historia: 'Em Gravatá – Quebra Bateia, a palha de milho — antes descartada na roça — vira matéria-prima de um artesanato que sustenta famílias e preserva técnicas de trançado quilombola. A mestra Aneli Pereira é referência da ARCA e levou a tradição para a Feira da UFMG em 2019.',
    mestre: 'Aneli Pereira',
    mestreRole: 'Artesã · ARCA',
    receptivo: 'Casas da comunidade',
    experiencias: [
      { titulo: 'Oficina de trançado em palha', descricao: 'Iniciação na técnica com a mestra Aneli.' },
      { titulo: 'Almoço quilombola', descricao: 'Receitas tradicionais preparadas em fogão a lenha.' },
      { titulo: 'Contação de causos', descricao: 'História do trabalho da palha e da ARCA.' }
    ],
    comoVisitar: {
      chegar: '522 km de Belo Horizonte. Via Diamantina ou rota terrestre combinada pela operadora.',
      hospedagem: 'Pousadas e hotéis na cidade-sede de Chapada do Norte.',
      melhorEpoca: 'A partir de março. Outubro lota a região por causa da Festa do Rosário.'
    },
    page: 'comunidade.html?slug=gravata',
    produtos: [
      {
        nome: 'Cesto de palha de milho',
        descricao: 'Trançado tradicional, padrão espiral.',
        comoEFeito: 'A palha vem da roça da própria comunidade — colhida no fim da safra, seca ao sol por 5 dias e umedecida na hora do trabalho. O trançado é feito à mão, sem cola, em padrão espiral. Cada cesto leva 2-3 dias.',
        preco: 'A partir de R$ 65',
        img: 'assets/img/cestaria-palha-milho.png'
      },
      {
        nome: 'Esteira de palha',
        descricao: 'Trançado em camadas duplas, palha selecionada.',
        comoEFeito: 'Palha de milho longa e fina, trançada em camadas duplas para resistência e flexibilidade. As pontas são fechadas com fio de algodão. Tempo de produção: 3-4 dias por peça.',
        preco: 'A partir de R$ 180',
        img: 'assets/img/cestaria-palha-milho.png'
      }
    ]
  },

  'faceira': {
    slug: 'faceira',
    nome: 'Faceira',
    municipio: 'Chapada do Norte',
    saber: 'Tradições quilombolas vivas',
    img: 'assets/img/comunidade-faceira.png',
    tag: 'Chapada do Norte · Médio Jequitinhonha',
    subtitulo: 'Receptivo de afeto, no tempo da roça.',
    texto: 'Comunidade ativa na REDETUR. Quitandas, artesanato e cantoria nos pequenos núcleos familiares que recebem visitantes em receptivo simples e cheio de afeto.',
    historia: 'Faceira é uma das comunidades ativas na REDETUR e oferece uma vivência simples mas profunda — quitandas saídas do forno, conversa na varanda, encontro com a vida cotidiana quilombola.',
    mestre: 'Lideranças comunitárias REDETUR',
    mestreRole: 'Agentes locais de turismo',
    receptivo: 'Casas da comunidade',
    experiencias: [
      { titulo: 'Vivência cotidiana', descricao: 'Acompanhar a rotina da comunidade.' },
      { titulo: 'Gastronomia tradicional', descricao: 'Almoço e quitandas no fogão a lenha.' },
      { titulo: 'Oficina de quitandas', descricao: 'Aprender com as mestras a fazer brevidade, polvilho e pão caseiro.' }
    ],
    comoVisitar: {
      chegar: 'Via Chapada do Norte (522 km de BH).',
      hospedagem: 'Pousadas na cidade-sede.',
      melhorEpoca: 'Ano todo, com agendamento prévio.'
    },
    page: 'comunidade.html?slug=faceira',
    produtos: [
      {
        nome: 'Caixa de quitandas tradicionais',
        descricao: 'Polvilho frito, brevidade, pão de queijo, rapadura.',
        comoEFeito: 'Tudo no fogão a lenha, com polvilho fresco, fubá moído na própria comunidade e rapadura artesanal. Receitas passadas de mães para filhas, sem conservantes. Caixa com 8 tipos diferentes.',
        preco: 'R$ 90 (caixa pequena)',
        img: 'assets/img/quitandas.png'
      },
      {
        nome: 'Doce de marmelo',
        descricao: 'Marmelo da época em tacho de cobre, açúcar mascavo.',
        comoEFeito: 'Marmelo do quintal, açúcar mascavo e tempo lento — 4 horas em tacho de cobre, mexendo sem parar. O ponto de corte é determinado pela mestra. Embalado em vidros de 250g.',
        preco: 'R$ 28 (250g)',
        img: 'assets/img/quitandas.png'
      }
    ]
  },

  'corrego-rocha': {
    slug: 'corrego-rocha',
    nome: 'Córrego do Rocha',
    municipio: 'Chapada do Norte',
    saber: 'Fiação e tecelagem',
    img: 'assets/img/comunidade-corrego-do-rocha.png',
    tag: 'Chapada do Norte · Médio Jequitinhonha',
    subtitulo: 'O fio que carrega o canto antigo.',
    texto: 'Casa da Cida prepara o café da tarde com quitandas. As fiandeiras transmitem cantos antigos enquanto giram as rocas — um repertório oral que sobrevive no fio.',
    historia: 'Em Córrego do Rocha, a fiação é mais que ofício — é tempo de conversa, partilha e canto. As fiandeiras giram a roca enquanto entoam cantos que atravessaram gerações. A Casa da Cida recebe os visitantes com café da tarde quilombola.',
    mestre: 'Fiandeiras da Casa da Cida',
    mestreRole: 'Mestras da fiação e tecelagem',
    receptivo: 'Casa da Cida',
    canto: '"Chora bananeira / bananeira chora / chora bananeira / adeus, eu vou embora"',
    cantoLegenda: 'Canto de fiação',
    experiencias: [
      { titulo: 'Oficina de fiação', descricao: 'A roca, o algodão e o ritmo do fio.' },
      { titulo: 'Café da tarde com quitandas', descricao: 'Encontro com as mestras na Casa da Cida.' },
      { titulo: 'Cantoria das fiandeiras', descricao: 'Repertório oral preservado no canto.' }
    ],
    comoVisitar: {
      chegar: 'Via Chapada do Norte.',
      hospedagem: 'Pousadas na cidade-sede.',
      melhorEpoca: 'A partir de março.'
    },
    page: 'comunidade.html?slug=corrego-rocha',
    produtos: [
      {
        nome: 'Fio de algodão fiado',
        descricao: 'Cardado e fiado em roca de pé, sem alvejante.',
        comoEFeito: 'Algodão crioulo cardado a mão e fiado em roca de pedal. Fio rolo natural, na cor original da fibra. Embalado em meadas para tear ou crochê.',
        preco: 'R$ 45 (meada)',
        img: 'assets/img/tear-algodao.png'
      },
      {
        nome: 'Tecido cru de algodão',
        descricao: 'Tear horizontal, trama justa, base para roupas e cobertas.',
        comoEFeito: 'Tecido em tear horizontal de chão, trama justa que dura décadas. Pode ser comprado em metro corrido ou pré-cortado. Pode ser tingido depois com cascas de árvore.',
        preco: 'R$ 95 (m linear)',
        img: 'assets/img/tear-algodao.png'
      }
    ]
  },

  'moca-santa': {
    slug: 'moca-santa',
    nome: 'Moça Santa',
    municipio: 'Chapada do Norte',
    saber: 'Cestaria, cerâmica e tecelagem',
    img: 'assets/img/comunidade-moca-santa.png',
    tag: 'Chapada do Norte · Povoado de Caetés',
    subtitulo: 'Modos de vida que ainda atravessam o cotidiano.',
    texto: 'Casa de Dona Saninina, com a mestra Maria Joana Ferreira Soares. Cestos de palha de milho e palha de banana, panelas de barro, esteiras, camas de taquara e cobertas de algodão — modos de vida tradicionais que ainda atravessam o cotidiano.',
    historia: 'Moça Santa fica no povoado de Caetés. Ali, na Casa de Dona Saninina, a mestra Maria Joana Ferreira Soares mantém vivos saberes que se cruzam — cestaria de palha de milho e de banana, cerâmica de barro, esteira, cama de taquara, coberta de algodão. Um arquivo vivo da cultura quilombola.',
    mestre: 'Maria Joana Ferreira Soares',
    mestreRole: 'Mestra · Casa de Dona Saninina',
    receptivo: 'Casa de Dona Saninina',
    experiencias: [
      { titulo: 'Oficina de cestaria', descricao: 'Palha de milho e palha de banana, técnicas e usos.' },
      { titulo: 'Oficina de cerâmica', descricao: 'Panelas, potes e botijas de barro.' },
      { titulo: 'Vivência rural', descricao: 'Almoço quilombola e conversa na varanda.' }
    ],
    comoVisitar: {
      chegar: 'Via Chapada do Norte (povoado de Caetés).',
      hospedagem: 'Pousadas em Chapada do Norte.',
      melhorEpoca: 'Ano todo.'
    },
    page: 'comunidade.html?slug=moca-santa',
    produtos: [
      {
        nome: 'Panela de barro',
        descricao: 'Argila do território, queimada em forno a céu aberto.',
        comoEFeito: 'Argila extraída do território da comunidade, modelada à mão sem torno, secada à sombra por 1 semana e queimada em forno a céu aberto com lenha de cerrado. Cada panela é única e leva 1 semana para ficar pronta.',
        preco: 'A partir de R$ 120',
        img: 'assets/img/ceramica-barro.png'
      },
      {
        nome: 'Cesto de palha de banana',
        descricao: 'Palha seca da bananeira, costurada com fio de algodão.',
        comoEFeito: 'Folhas secas de bananeira cortadas em tiras longas, trançadas em rolos compridos e costuradas em espiral com fio de algodão. Resistente, leve e flexível.',
        preco: 'A partir de R$ 75',
        img: 'assets/img/cestaria-palha-milho.png'
      },
      {
        nome: 'Coberta de algodão',
        descricao: 'Tecida no tear de chão, padrão xadrez tradicional.',
        comoEFeito: 'Tear de chão (mais largo que o de pé), com fios crus e tingidos com cascas e raízes. Padrão xadrez tradicional do Vale. Durabilidade de décadas.',
        preco: 'A partir de R$ 480',
        img: 'assets/img/tear-algodao.png'
      }
    ]
  },

  /* ---------- MINAS NOVAS (5) ---------- */

  'macuco': {
    slug: 'macuco',
    nome: 'Macuco',
    municipio: 'Minas Novas',
    saber: 'Núcleo originário · Receptivo familiar',
    img: 'assets/img/comunidade-macuco.png',
    tag: 'Minas Novas · Núcleo Macuco',
    subtitulo: 'Onde tudo começou.',
    texto: 'Um dos três quilombos originários (Macuco, Bandeirinha e Bandeira Grande) que deram origem à região no século XVIII. Receptivo nas Casas de Nete e Lica, com almoço caipira e contação de história quilombola.',
    historia: 'Macuco é um dos núcleos originários da história quilombola da região do Médio Jequitinhonha. Junto com Bandeirinha e Bandeira Grande, foi uma das primeiras formações quilombolas após a decadência das lavras (1743). Ainda hoje, mantém o receptivo familiar pelas casas de Nete e Lica.',
    mestre: 'Famílias Nete e Lica',
    mestreRole: 'Receptivo familiar tradicional',
    receptivo: 'Casas de Nete e Lica',
    experiencias: [
      { titulo: 'Almoço caipira', descricao: 'Receita quilombola tradicional na Casa de Nete.' },
      { titulo: 'Contação de história quilombola', descricao: 'Origem do núcleo e ancestralidade.' },
      { titulo: 'Vivência rural', descricao: 'Vida do quilombo no semiárido mineiro.' }
    ],
    comoVisitar: {
      chegar: 'Via Minas Novas (ônibus Pássaro Verde de Diamantina).',
      hospedagem: 'Pousadas e hotéis em Minas Novas.',
      melhorEpoca: 'A partir de março.'
    },
    page: 'comunidade.html?slug=macuco',
    produtos: [
      {
        nome: 'Doces caseiros',
        descricao: 'Frutas do quintal em tacho aberto, sem conservantes.',
        comoEFeito: 'Frutas do quintal (goiaba, abóbora, mamão verde, leite), açúcar mascavo da região, tacho aberto. Receita transmitida há quatro gerações pela família. Embalado em pequenos potes de vidro.',
        preco: 'A partir de R$ 22 (200g)',
        img: 'assets/img/quitandas.png'
      },
      {
        nome: 'Colares e pulseiras de sementes',
        descricao: 'Sementes nativas montadas em fios encerados.',
        comoEFeito: 'Sementes coletadas no cerrado (jequitibá, paineira, andu, sucupira), perfuradas à mão e montadas em fios encerados. Cada peça reúne 5-7 espécies diferentes.',
        preco: 'A partir de R$ 35',
        img: 'assets/img/aldeia-quilombola.png'
      }
    ]
  },

  'pinheiro': {
    slug: 'pinheiro',
    nome: 'Pinheiro',
    municipio: 'Minas Novas',
    saber: 'Tradições rurais quilombolas',
    img: 'assets/img/comunidade-pinheiro.png',
    tag: 'Minas Novas · Núcleo Macuco',
    subtitulo: 'Vida do quilombo no semiárido.',
    texto: 'Núcleo unificado com Macuco. Vivência rural, gastronomia e congado — saberes preservados pela proximidade com o quilombo originário.',
    historia: 'Pinheiro integra o Núcleo Macuco junto com Mata Dois. Saberes preservados pela proximidade com o quilombo originário — vivência rural, gastronomia, congado e a vida cotidiana do semiárido mineiro.',
    mestre: 'Lideranças do núcleo Macuco',
    mestreRole: 'Coletivo comunitário',
    receptivo: 'Receptivos do núcleo',
    experiencias: [
      { titulo: 'Vivência rural', descricao: 'A vida do quilombo no semiárido.' },
      { titulo: 'Gastronomia', descricao: 'Almoço quilombola tradicional.' },
      { titulo: 'Congado', descricao: 'Quando há calendário cultural ativo.' }
    ],
    comoVisitar: {
      chegar: 'Via Minas Novas.',
      hospedagem: 'Pousadas em Minas Novas.',
      melhorEpoca: 'A partir de março.'
    },
    page: 'comunidade.html?slug=pinheiro',
    produtos: [
      {
        nome: 'Fubá moído na pedra',
        descricao: 'Milho crioulo plantado na comunidade, moído em pedra.',
        comoEFeito: 'Milho crioulo (variedade preservada por gerações) seco no paiol e moído em pedra de rio. Saco de 1kg com sabor e textura impossíveis no industrial.',
        preco: 'R$ 18 (1kg)',
        img: 'assets/img/quitandas.png'
      },
      {
        nome: 'Rapadura artesanal',
        descricao: 'Cana plantada no quintal, raspa de cobre, fogo lento.',
        comoEFeito: 'Cana de açúcar do quintal, suco extraído em moenda manual, cozido em tacho de cobre por 6 horas em fogo lento, batido até endurecer. Peça de 250g.',
        preco: 'R$ 15 (250g)',
        img: 'assets/img/quitandas.png'
      }
    ]
  },

  'mata-dois': {
    slug: 'mata-dois',
    nome: 'Mata Dois',
    municipio: 'Minas Novas',
    saber: 'Convivência com cerrado e caatinga',
    img: 'assets/img/comunidade-mata-dois.png',
    tag: 'Minas Novas · Núcleo Macuco',
    subtitulo: 'O território que ensina.',
    texto: 'Trilhas pelo cerrado em transição com a caatinga, plantas medicinais, sementes crioulas e tecnologias sociais de captação de água — um saber ecológico transmitido oralmente.',
    historia: 'Mata Dois preserva uma sabedoria ecológica única — o cerrado em transição com a caatinga, as plantas medicinais, as sementes crioulas e tecnologias sociais de captação de água que mantêm a comunidade em pé no semiárido.',
    mestre: 'Conhecedores do território',
    mestreRole: 'Mestras e mestres da terra',
    receptivo: 'Receptivos do núcleo',
    experiencias: [
      { titulo: 'Trilha ecológica quilombola', descricao: 'Cerrado, caatinga e o saber do território.' },
      { titulo: 'Vivência com plantas medicinais', descricao: 'Conhecimento tradicional do bioma.' },
      { titulo: 'Tecnologias sociais', descricao: 'Captação de água e plantio no semiárido.' }
    ],
    comoVisitar: {
      chegar: 'Via Minas Novas.',
      hospedagem: 'Pousadas em Minas Novas.',
      melhorEpoca: 'A partir de março, paisagem verde pós-chuvas.'
    },
    page: 'comunidade.html?slug=mata-dois',
    produtos: [
      {
        nome: 'Sementes crioulas',
        descricao: 'Variedades de feijão, milho e fava preservadas há gerações.',
        comoEFeito: 'Sementes guardadas em ciclos sucessivos pela comunidade — feijão de corda, milho crioulo, fava preta, andu. Embaladas em sachês de papel kraft com etiqueta da comunidade. Para plantio ou consumo.',
        preco: 'R$ 12 (sachê)',
        img: 'assets/img/estrada-terra-vermelha.png'
      },
      {
        nome: 'Plantas medicinais secas',
        descricao: 'Coleta sustentável no cerrado, secas à sombra.',
        comoEFeito: 'Folhas e raízes coletadas com saber tradicional (capim-cidreira, alecrim, arnica, carqueja), secas à sombra por 7-10 dias e embaladas em sachês individuais com instruções de uso.',
        preco: 'R$ 15 (sachê)',
        img: 'assets/img/estrada-terra-vermelha.png'
      }
    ]
  },

  'alagadico': {
    slug: 'alagadico',
    nome: 'Quilombo / São Pedro do Alagadiço',
    municipio: 'Minas Novas',
    saber: 'Marujada — dança, música e oração',
    img: 'assets/img/comunidade-alagadico.png',
    tag: 'Minas Novas · Núcleo Alagadiço',
    subtitulo: 'A oração que reúne todas as gerações.',
    texto: 'Marujada com flauta, violão e tambor — reúne todas as gerações. A oração cantada inclui homens, mulheres e crianças. Sr. Marciano lidera o Grupo de Marujada União de Ribeirão da Folha.',
    historia: 'Quilombo e São Pedro do Alagadiço formam o Núcleo Alagadiço. A marujada é a expressão cultural mais marcante — flauta, violão e tambor reunindo todas as gerações da comunidade. Sr. Marciano e Dona Beota recebem visitantes em sua casa, e o Grupo de Marujada União de Ribeirão da Folha mantém a tradição viva.',
    mestre: 'Sr. Marciano e Dona Beota',
    mestreRole: 'Mestre da Marujada · Grupo União de Ribeirão da Folha',
    receptivo: 'Casa de Marciano e Beota · Casa de Maria de Lourdes',
    experiencias: [
      { titulo: 'Apresentação de Marujada', descricao: 'Flauta, violão e tambor com o grupo da comunidade.' },
      { titulo: 'Oficina de tambor', descricao: 'Iniciação aos toques tradicionais.' },
      { titulo: 'Oração cantada', descricao: 'Vivência intergeracional que reúne homens, mulheres e crianças.' }
    ],
    comoVisitar: {
      chegar: 'Via Minas Novas, Núcleo Alagadiço.',
      hospedagem: 'Receptivo familiar ou pousadas em Minas Novas.',
      melhorEpoca: 'Ano todo, com agendamento prévio.'
    },
    page: 'comunidade.html?slug=alagadico',
    produtos: [
      {
        nome: 'Tambor de marujada',
        descricao: 'Madeira local, couro curtido, padrão da Marujada União.',
        comoEFeito: 'Tronco oco entalhado em madeira local, couro de boi curtido pela comunidade, lacração com cordas de algodão. Cada tambor é afinado pelo Sr. Marciano, mestre da Marujada União de Ribeirão da Folha. Tempo: 1 mês.',
        preco: 'A partir de R$ 520',
        img: 'assets/img/tambor-congado.png'
      },
      {
        nome: 'Flauta artesanal de bambu',
        descricao: 'Bambu da região, afinada manualmente, 6 furos tradicionais.',
        comoEFeito: 'Bambu da nascente do córrego, cortado na fase certa da lua, seco por 30 dias e perfurado com 6 furos tradicionais. Afinada uma a uma pelos mestres da marujada.',
        preco: 'A partir de R$ 95',
        img: 'assets/img/tambor-congado.png'
      }
    ]
  },

  'santiago': {
    slug: 'santiago',
    nome: 'Santiago',
    municipio: 'Minas Novas',
    saber: 'Agricultura familiar quilombola',
    img: 'assets/img/comunidade-santiago.png',
    tag: 'Minas Novas · Núcleo Alagadiço',
    subtitulo: 'A roça que vira mesa, e a mesa que vira encontro.',
    texto: 'Agricultura familiar com banana, marmelo, coco e batata. Zeca dos Santos Soares é Agente Local de Turismo treinado. Maria dos Anjos — coordenadora de escola, cozinheira e artesã — recebe o café da tarde com quitandas saídas do fogão a lenha.',
    historia: 'Santiago se divide em Santiago de Baixo e Santiago de Cima, no Núcleo Alagadiço. Zeca dos Santos Soares é um dos Agentes Locais de Turismo treinados pela REDETUR. Sua esposa, Maria dos Anjos, é coordenadora de escola, cozinheira e artesã — recebe os visitantes com o café da tarde quilombola.',
    mestre: 'Zeca dos Santos Soares e Maria dos Anjos',
    mestreRole: 'Agente Local de Turismo · Cozinheira e artesã',
    receptivo: 'Casa de Maria de Olímpio · Casa de Zeca e Maria dos Anjos',
    experiencias: [
      { titulo: 'Almoço caipira', descricao: 'Galinha caipira, angu e quitandas no fogão a lenha.' },
      { titulo: 'Café da tarde com quitandas', descricao: 'Brevidade, polvilho frito e doces caseiros.' },
      { titulo: 'Vivência na horta', descricao: 'Banana, marmelo, coco, batata e plantas medicinais.' }
    ],
    comoVisitar: {
      chegar: 'Via Minas Novas, Núcleo Alagadiço.',
      hospedagem: 'Receptivo familiar ou pousadas em Minas Novas.',
      melhorEpoca: 'Safra de banana e marmelo entre março e junho.'
    },
    page: 'comunidade.html?slug=santiago',
    produtos: [
      {
        nome: 'Banana passa',
        descricao: 'Banana caturra secada ao sol, sem açúcar adicionado.',
        comoEFeito: 'Banana caturra madura, descascada e secada em varais ao sol natural por 5-7 dias. Sem açúcar adicionado. Embalada em pacotes de 200g.',
        preco: 'R$ 18 (200g)',
        img: 'assets/img/quitandas.png'
      },
      {
        nome: 'Marmelada artesanal',
        descricao: 'Marmelo do quintal, açúcar mascavo, panela de cobre.',
        comoEFeito: 'Marmelo do quintal, açúcar mascavo da região e cozimento lento de 4 horas em panela de cobre. Receita da Maria dos Anjos, transmitida pela mãe e avó. Embalado em vidros de 250g.',
        preco: 'R$ 32 (250g)',
        img: 'assets/img/quitandas.png'
      },
      {
        nome: 'Geleias caseiras (variadas)',
        descricao: 'Frutas da safra, sem conservantes, vidros pequenos.',
        comoEFeito: 'Frutas da safra (goiaba, jabuticaba, manga, abacaxi), açúcar mascavo, sem conservantes nem corantes. Cozimento em fogão a lenha. Vidros de 150g e 250g.',
        preco: 'R$ 22 (250g)',
        img: 'assets/img/quitandas.png'
      }
    ]
  }

};
