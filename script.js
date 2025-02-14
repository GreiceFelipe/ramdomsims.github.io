document.getElementById('generate-sim').addEventListener('click', generateSim);

function generateSim() {
  const genders = ["Masculino", "Feminino"];
  const careers = [
    "Agente Funerário",
    "Agente Secreto",
    "Artista",
    "Assalariado",
    "Astronauta",
    "Atleta",
    "Autônomo",
    "Baby-sitter",
    "Científica",
    "Comerciário",
    "Conservacionista",
    "Criminal",
    "Crítico",
    "Culinária",
    "Decorador de Interiores",
    "Detetive",
    "Direito",
    "Educação",
    "Engenheiro",
    "Entretenimento",
    "Escritor",
    "Funcionário de Fast-Food",
    "Guia de Romance",
    "Guru da Tecnologia",
    "Jardineiro",
    "Jogador de Futebol",
    "Medicina",
    "Mergulhador",
    "Militar",
    "Morte",
    "Negócios",
    "Pescador",
    "Pintor",
    "Política",
    "Projetista Civil",
    "Salva-vidas",
    "Trabalhador Manual",
    "Simfluenciador",
    "Streamer de Videogames",
    "Mídias Sociais",
    "Influenciador de Estilo",
    "Ator"
  ];
  const aspirations = [
    "Pintor Extraordinário",
    "Autor de Best-Sellers",
    "Gênio Musical",
    "Ator/Atriz Magistral",
    "Mestre/Mestra da Criação",
    "Senhor(a) do Tricô",
    "Chef Mestre",
    "Mestre da Mixologia",
    "Especialista na Produção de Néctar",
    "Inimigo(a) Público(a)",
    "Rei/Rainha das Travessuras",
    "Amor do Mal",
    "Caçador(a) de Segredos",
    "Linhagem de Sucesso",
    "Família Grande e Feliz",
    "Família de Vampiros",
    "Superpai/Supermãe",
    "Fabulosamente Rico(a)",
    "Barão/Baronesa das Mansõesl",
    "Proprietário(a) Cinco Estrelas",
    "Romântico(a) em Série",
    "Alma Gêmea",
    "Par Perfeito",
    "Explorador(a) Afetivo(a)",
    "Amigo(a) dos Animais",
    "Fisiculturista",
    "Entusiasta de Esportes Radicais",
    "Cavalgante de Campeonatos",
    "Especialista em Cuidados Pessoais",
    "Paz Interior",
    "Guru Zen",
    "Sim da Renascença",
    "Cérebro Nerd",
    "Gênio da Informática",
    "Mestre Vampiro(a)",
    "Estudioso(a) de Arqueologia",
    "Feitiçaria e Magia",
    "Acadêmico / Acadêmica",
    "Especialista em Fantasmas",
    "Família Feliz",
    "Botânico(a) Autônomo(a)",
    "Curador(a)",
    "Ás da Pesca",
    "Entusiasta do Ar Livre",
    "Explorador(a) da Selva",
    "Produtor(a) de Poções",
    "Inovador(a) Ecológico(a)",
    "Cuidador(a) do Campo",
    "Artista dos Cristais",
    "Astro da Comédia",
    "Grande Festeiro(a)",
    "Amigo(a) do Mundo",
    "Confidente da Vizinhança",
    "Líder do Bando",
    "Vampiro(a) do Bem",
    "Celebridade Mundialmente Famosa",
    "Habitante Perspicaz",
    "LobiSim Iniciante",
    "Lobo Solitário",
    "Emissário do Coletivo",
    "Feral Renegado",
    "Busca pela Cura",
    "Nativo(a) da Cidade",
    "Mistério em StrangerVille",
    "Vida na Praia",
    "Turista do Monte Komorebi",
    "Incrivelmente Imundo",
    "Perfeitamente Impecável",
    "Fonte do Conhecimento de Tomarang",
    "Esperança ou Ordem",
    "Exemplo de Esperança",
    "Agente da Ordem",
    "Corsário(a) Galáctico(a)"
  ];
  const skinColors = ["Claro", "Moreno", "Negro", "Oliva", "Amarelado"];
  const hairColors = ["Loiro", "Castanho", "Preto", "Ruivo", "Grisalho"];
  const eyeColors = ["Azul", "Verde", "Castanho", "Cinza", "Preto"];
  const favoriteColors = ["Azul", "Verde", "Vermelho", "Amarelo", "Roxo", "Laranja"];
  const traits =  [
    "Amante da Arte", "Adora o Ar Livre", "Bondoso", "Alegre", "Amante da Música",
    "Ambicioso", "Chegado", "Ativo", "Devorador de Livros", "Asseado", "Ciumento",
    "Cabeça-quente", "Gastrônomo", "Cleptomaníaco", "Evasivo", "Criativo", "Geek",
    "Desajeitado", "Extrovertido", "Genial", "Perfeccionista", "Errático", "Familiar",
    "Pateta", "Esnobe", "Leal", "Romântico", "Glutão", "Maldoso", "Seguro de Si",
    "Infantil", "Maligno", "Soturno", "Materialista", "Odeia Crianças", "Preguiçoso",
    "Solitário", "Relaxado", "Nauseento", "Exigente", "Máquina de Dança", "Engajado",
    "Vegetariano", "Amante de Cães", "Amante de Gatos", "Egocêntrico", "Paranoico",
    "Filho da Ilha", "Filho do Oceano", "Criador", "Amigo da Natureza", "Freegano",
    "Reciclador", "Aventureiro", "Respeitoso", "Fã de Animais", "Intolerante à Lactose",
    "Além das Expectativas", "Grande Festeiro", "Socialmente Desconfortável",
    "Rancheiro", "Amante de Cavalos", "Sagaz", "Provinciano", "Benevolente",
    "Sem Noção", "Xereta", "Romanticamente Reservado", "Sentimental", "Cético",
    "Macabro", "Perseguido pela Morte", "Envolvido pela Morte"
  ];

  const random = (array) => array[Math.floor(Math.random() * array.length)];



  const aspirationCareerMap = {
    "Gênio da Informática": "Guru da Tecnologia",
    "Pintor Extraordinário": random(["Pintor","Autônomo", "Vender sua arte na rua"]),
    "Autor de Best-Sellers": "Escritor",
    "Gênio Musical": "Músico",
    "Chef Mestre": "Culinária",
    "Mestre da Mixologia": "Mixólogo",
    "Inimigo(a) Público(a)": "Criminoso",
    "Fisiculturista": "Atleta",
    "Celebridade Mundialmente Famosa": random(["Simfluenciador", "Streamer de Videogames", "Mídias Sociais", "Influenciador de Estilo", "Ator"]),
    "Mistério em StrangerVille": "Militar",
    "Ás da Pesca": random(["Pescador","Vender os peixes pescados"]),
    "Inovador(a) Ecológico(a)": "Projetista Civil",
    "Botânico Autônomo": random(["Jardineiro","Vender vaso de plantas cultivadas", "Vender colheitas na vendinha local"]),
    "Especialista na Produção de Néctar": "Vender Néctar",
    "Senhor(a) do Tricô": "Vender sua arte de Tricô",
    "Mestre/Mestra da Criação": "Criador Autônomo",
    "Cuidador do Campo": "Vender seus produtos agrícolas",
  };

  const aspiration = random(aspirations);

  let career;
  if (aspirationCareerMap[aspiration]) {
    career = aspirationCareerMap[aspiration];
  } else {
    career = random(careers);
  }

  const gender = random(genders);
  const skinColor = random(skinColors);
  const hairColor = random(hairColors);
  const eyeColor = random(eyeColors);
  const favoriteColor = random(favoriteColors);
  const simTraits = getUniqueTraits(traits, 3,aspiration, career);
  // Preencher as informações do Sim
  document.getElementById('gender').textContent = gender;
  document.getElementById('career').textContent = career;
  document.getElementById('aspiration').textContent = aspiration;
  document.getElementById('skin-color').textContent = skinColor;
  document.getElementById('hair-color').textContent = hairColor;
  document.getElementById('eye-color').textContent = eyeColor;
  document.getElementById('favorite-color').textContent = favoriteColor;
  document.getElementById('traits').textContent = simTraits.join(", ");

  // Gerar uma história para o Sim
  const story = generateStory(gender, career, aspiration, favoriteColor, simTraits);
  document.getElementById('sim-story').textContent = story;
}

function generateStory(gender, career, aspiration, favoriteColor, traits) {
  const pronoun = gender === "Masculino" ? "Ele" : "Ela";
  const possessive = gender === "Masculino" ? "seu" : "sua";
  const pronounLower = gender === "Masculino" ? "ele" : "ela";

  const aspirationDescriptions = {
      "Pintor Extraordinário": "deseja criar quadros memoráveis que entrem para a história da arte.",
      "Autor de Best-Sellers": "sonha em escrever livros que encantem gerações.",
      "Gênio Musical": "quer ser uma lenda no mundo da música.",
      "Ator/Atriz Magistral": "deseja ser um(a) ator/atriz famoso(a) e aclamado(a).",
      "Mestre/Mestra da Criação": "quer ser um(a) mestre/mestra na arte de criar.",
      "Senhor(a) do Tricô": "deseja ser um(a) mestre/mestra na arte de tricotar.",
      "Chef Mestre": "pretende se tornar um chef renomado.",
      "Mestre da Mixologia": "quer criar as bebidas mais incríveis e sofisticadas.",
      "Especialista na Produção de Néctar": "deseja se tornar um mestre na produção de néctar.",
      "Inimigo(a) Público(a)": "trama dominar o mundo com suas artimanhas malignas.",
      "Rei/Rainha das Travessuras": "quer ser o(a) mestre/mestra das travessuras.",
      "Amor do Mal": "quer destruir a vida amorosa de todo mundo, incluindo a própria.",
      "Caçador(a) de Segredos": "deseja descobrir todos os segredos do mundo.",
      "Linhagem de Sucesso": "quer uma família com sucesso na vida.",
      "Família Grande e Feliz": "deseja ter uma família feliz e unida.",
      "Família de Vampiros": "quer uma família de vampiros poderosos.",
      "Superpai/Supermãe": "quer ser o(a) melhor pai/mãe do mundo.",
      "Fabulosamente Rico(a)": "busca acumular uma fortuna e viver no luxo.",
      "Barão/Baronesa das Mansõesl": "quer saber de ter a maior e mais elegante casa de todas.",
      "Proprietário(a) Cinco Estrelas": "quer ser o(a) melhor Proprietário(a) que o mundo já viu.",
      "Romântico(a) em Série": "vive para conquistar corações.",
      "Alma Gêmea": "procura o amor verdadeiro para uma história inesquecível.",
      "Par Perfeito": "deseja encontrar a pessoa ideal para uma vida de felicidade.",
      "Explorador(a) Afetivo(a)": "quer conhecer todos os tipos de relacionamentos e descobrir o que realmente importa.",
      "Amigo(a) dos Animais": "ama os bichinhos e quer cuidar de todos.",
      "Fisiculturista": "treina duro para ser o(a) mais forte do mundo.",
      "Entusiasta de Esportes Radicais": "deseja explorar a natureza do Monte Komorebi e participar de esportes radicais na neve.",
      "Cavalgante de Campeonatos": "quer ser o(a) melhor em competições de cavalos.",
      "Especialista em Cuidados Pessoais": "quer ser o(a) melhor em cuidados pessoais e beleza.",
      "Paz Interior": "busca a harmonia e a paz interior.",
      "Guru Zen": "uer compartilhar sua maestria em Bem-estar com o mundo e treinar outras pessoas para transmitir seus conhecimentos.",
      "Sim da Renascença": "quer ser um(a) mestre(a) em várias habilidades e conhecimentos.",
      "Cérebro Nerd": "quer ser inteligente e hábil em mecânica ao mesmo tempo!",
      "Gênio da Informática": "busca dominar a tecnologia e criar inovações incríveis.",
      "Mestre Vampiro(a)": "quer se tornar um(a) vampiro(a) sábio(a) e poderoso(a)!",
      "Estudioso(a) de Arqueologia": "quer ser um(a) arqueólogo(a) famoso(a) e descobrir tesouros antigos.",
      "Feitiçaria e Magia": "quer ser um(a) feiticeiro(a) poderoso(a) e dominar a magia.",
      "Acadêmico / Acadêmica": "quer ser um(a) acadêmico(a) renomado(a) e compartilhar conhecimento com o mundo.",
      "Especialista em Fantasmas": "quer ser um(a) especialista em fantasmas e descobrir todos os segredos do além.",
      "Família Feliz": "quer ter uma família grande e feliz.",
      "Botânico(a) Autônomo(a)": "quer ser um(a) botânico(a) autônomo(a) e viver da natureza.",
      "Curador(a)": "quer colecionar tudo que o mundo tem a oferecer.",
      "Ás da Pesca": "quer ser um(a) pescador(a) habilidoso(a) e pegar os maiores peixes.",
      "Entusiasta do Ar Livre": "quer ser um(a) entusiasta do ar livre e viver em harmonia com a natureza.",
      "Explorador(a) da Selva": "quer ser um(a) explorador(a) da selva e descobrir todos os segredos da natureza.",
      "Produtor(a) de Poções": "quer ser um(a) produtor(a) de poções habilidoso(a) e criar poções mágicas.",
      "Inovador(a) Ecológico(a)": "quer ser um(a) inovador(a) ecológico(a) e criar tecnologias sustentáveis.",
      "Cuidador(a) do Campo": "quer ser um(a) cuidador(a) do campo e cuidar da terra.",
      "Artista dos Cristais": "quer ser um(a) artista dos cristais e criar obras de arte com cristais.",
      "Astro da Comédia": "quer ser um(a) astro da comédia e fazer o mundo rir.",
      "Grande Festeiro(a)": "quer ser um(a) grande festeiro(a) e animar todas as festas.",
      "Amigo(a) do Mundo": "quer ser amigo(a) de todos e ajudar quem precisa.",
      "Confidente da Vizinhança": "quer ser o(a) confidente da vizinhança e ajudar todos os vizinhos.",
      "Líder do Bando": "quer ser o(a) líder do bando e proteger a família.",
      "Vampiro(a) do Bem": "quer ser um(a) vampiro(a) do bem e ajudar os outros.",
      "Celebridade Mundialmente Famosa": "quer ser uma celebridade mundialmente famosa e ser reconhecido(a) em todo o mundo.",
      "Habitante Perspicaz": "quer ser um(a) habitante perspicaz e descobrir todos os segredos da cidade.",
      "LobiSim Iniciante": "quer ser um(a) LobiSim iniciante e se tornar um(a) mestre.",
      "Lobo Solitário": " quer ser um(a) lobo solitário e viver em harmonia com a natureza.",
      "Emissário do Coletivo": "quer ser um(a) emissário do coletivo e ajudar a comunidade.",
      "Feral Renegado": "quer ser um(a) feral renegado e viver fora das regras da sociedade.",
      "Busca pela Cura": "quer encontrar a cura para licantropia para viver como Sim convencional.",
      "Nativo(a) da Cidade": "quer ser um(a) nativo(a) da cidade e conhecer todos os segredos urbanos.",
      "Mistério em StrangerVille": "quer desvendar o mistério de StrangerVille e salvar a cidade.",
      "Vida na Praia": "quer viver na praia e aproveitar o sol e o mar.",
      "Turista do Monte Komorebi": "quer ser um(a) turista do Monte Komorebi e explorar a cultura e a natureza.",
      "Incrivelmente Imundo": "quer ser incrivelmente imundo e viver em meio à sujeira.",
      "Perfeitamente Impecável": "quer ser perfeitamente impecável e viver em um ambiente limpo e organizado.",
      "Fonte do Conhecimento de Tomarang": "quer ser a fonte do conhecimento de Tomarang e compartilhar sabedoria com todos.",
      "Esperança ou Ordem": "deseja explorar o Entreposto do Pináculo Negro e decidir se deve ficar do lado da Resistência ou da Primeira Ordem.",
      "Exemplo de Esperança": "ser a centelha de esperança que atrapalha as operações da Primeira Ordem em Batuu e ajuda a causa da Resistência",
      "Agente da Ordem": "deseja provar sua lealdade à Primeira Ordem eliminando a presença da Resistência em Batuu",
      "Corsário(a) Galáctico(a)": "prefere se relacionar com contrabandistas e caçadores de recompensas no distante planeta de Batuu"
  };



  const randomEvent = [
      `${pronoun} recentemente teve uma grande oportunidade em sua carreira como ${career}, mas precisou tomar uma decisão difícil.`,
      `Com sua personalidade ${traits[1].toLowerCase()}, ${pronounLower} lidou com um desafio inesperado e surpreendeu a todos.`,
      `${pronoun} descobriu um novo talento que pode mudar o rumo de ${possessive} vida.`,
      `${pronoun} está cada vez mais perto de alcançar seu grande sonho de se tornar um(a) ${aspiration.toLowerCase()}.`
  ];

  const randomIndex = Math.floor(Math.random() * randomEvent.length);

  return `
      ${pronoun} é um(a) ${career} que ${aspirationDescriptions[aspiration]}
      ${pronoun} tem como sua personalidade ${traits[0].toLowerCase()}, ${traits[1].toLowerCase()} e ${traits[2].toLowerCase()}.
      Além disso, ${pronounLower} ama a cor ${favoriteColor.toLowerCase()}.`;
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Garante que os traços não se repitam
function getUniqueTraits(traitsArray, numTraits, aspiration, career) {
  const selectedTraits = new Set();

  const intelectuais = new Set(["Acadêmico", "Gênio da Informática", "Cérebro Nerd", "Sim da Renascença"]);
  const positivos = new Set(["Ama Gatos", "Ama Cachorros", "Ama a Natureza", "Amigo dos Animais", "Bondoso"]);
  const proibicoes = [
      { trait: "Preguiçoso", condition: intelectuais.has(aspiration) },
      { trait: "Odeia Crianças", condition: aspiration === "Família Grande e Feliz" },
      { trait: "Infantil", condition: selectedTraits.has("Odeia Crianças") },
      { trait: "Perfeccionista", condition: selectedTraits.has("Relaxado") },
      { trait: "Relaxado", condition: aspiration === "Perfeitamente Impecável" },
      { trait: "Asseado", condition: aspiration === "Incrivelmente Imundo" },
      { trait: "Nauseento", condition: aspiration === "Incrivelmente Imundo" },
      { trait: "Nauseento", condition: selectedTraits.has("Relaxado") },
      { trait: "Asseado", condition: selectedTraits.has("Relaxado") },
      { trait: "Malvado", condition: Array.from(selectedTraits).some(t => positivos.has(t)) },
      { trait: career === "Criminal" && positivos.has(trait) }
  ];

  while (selectedTraits.size < numTraits) {
      let trait = getRandomElement(traitsArray);

      // Verifica se o traço já foi escolhido
      if (selectedTraits.has(trait)) continue;

      // Verifica todas as condições de restrição
      if (proibicoes.some(rule => rule.trait === trait && rule.condition)) continue;

      selectedTraits.add(trait);
  }

  return Array.from(selectedTraits);
}
