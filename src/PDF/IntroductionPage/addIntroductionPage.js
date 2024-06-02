import { addSection } from './addSection'

export function addIntroductionPage(doc) {
	doc.addPage()
	doc.setDrawColor(0, 0, 255)
	doc.rect(10, 10, 190, 277, 'S')

	// Seção - Objetivo Profissional
	addSection(
		doc,
		25,
		'Objetivo Profissional',
		'Desenvolvedor Front-end e Mobile com experiência em JavaScript, TypeScript, React e React Native, buscando oportunidades para evolução técnica e novos conceitos. Motivado por desafios que promovam crescimento no desenvolvimento de software e inteligência artificial. Interessado em contribuir para projetos inovadores e colaborativos. Almejo fazer uma contribuição significativa em projetos que impactem positivamente a sociedade.',
	)

	// Seção - Habilidades Técnicas
	addSection(
		doc,
		65,
		'Habilidades Técnicas',
		'Linguagens de Programação: JavaScript, TypeScript, Python\nFrameworks e Bibliotecas: React, React Native, Redux, Redux-Saga, WatermelonDB, TensorFlow.js\nFerramentas de Desenvolvimento: Git, Docker, Django REST Framework\nConceitos de IA: Fundamentos de aprendizado de máquina e integração com APIs de inteligência artificial',
	)

	// Seção - Experiência Profissional
	addSection(
		doc,
		115,
		'Experiência Profissional',
		'Desenvolvedor de Software (Front-end e Mobile) na Kartado, de 2022 até o presente\nEngajamento no desenvolvimento de soluções front-end e mobile\nRevisões de código\nEspecificações técnicas\nResolução de problemas em colaboração com a equipe de suporte\nProativo na aprendizagem e aplicação de conceitos avançados como manipulação de dados em larga escala e uso de ferramentas de colaboração como Git',
	)

	// Seção - Projetos
	addSection(
		doc,
		182,
		'Projeto de Estudo Atual',
		'Integração do ChatGPT com Venom Bot: Um projeto pessoal visando desenvolver inteligência artificial para automatizar respostas em mensagens via WhatsApp, usando Node.js e integrando a API do ChatGPT',
	)

	// Seção - Formação
	addSection(
		doc,
		210,
		'Formação',
		'Curso de Programação (JavaScript e Python), Jcavi Treinamentos, 2021 a 2022\nGestão da Tecnologia, Unisul, iniciado em 2022 (atualmente trancado, mas com intenção de concluir)',
	)

	// Seção - Interesses Pessoais
	addSection(doc, 245, 'Interesses Pessoais', 'Paraquedismo, surfe, viagens, exploração cultural')

	//Idiomas
	addSection(doc, 269, 'Idiomas', 'Português: Nativo, Inglês: Básico, Espanhol: Intermediário')

	doc.save('Currículo.pdf')
}
