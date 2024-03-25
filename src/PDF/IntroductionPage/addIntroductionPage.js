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
		'Desenvolvedor Front-end e Mobile com experiência em JavaScript, React e React Native, em busca de oportunidades para evolução técnica e melhorias financeiras. Motivação por desafios que promovam o crescimento em desenvolvimento de software e inteligência artificial. Interessado em contribuir para projetos inovadores e colaborativos. Entre os objetivos pessoais estão viajar mais, conhecer novas culturas e evoluir no esporte que pratico, paraquedismo',
	)

	// Seção - Educação
	addSection(
		doc,
		65,
		'Educação',
		'Curso de Programação (JavaScript e Python), Jcavi Treinamentos, 2021 a 2022\nGestão da Tecnologia, Unisul, iniciado em 2022 (atualmente esta trancada, mas pretendo finalizar)',
	)

	// Seção - Experiência Profissional
	addSection(
		doc,
		100,
		'Experiência Profissional',
		'Desenvolvedor de Software (Front-end e Mobile) na Kartado, desde 2022 até o momento atual\nAtuação com desenvolvimento de soluções front-end e mobile\nRevisões de código\nEspecificações técnicas\nResolução de problemas em parceria com a equipe de suporte\nProatividade na aprendizagem e aplicação de conceitos avançados como de manipulação de dados em larga escala e utilização de ferramentas de colaboração como o Git',
	)

	// Seção - Projetos
	addSection(
		doc,
		170,
		'Projeto Atual de Estudo',
		'Integração do ChatGPT com Venom Bot: Projeto pessoal voltado ao desenvolvimento de uma inteligência artificial para automatizar respostas em mensagens pelo whatsApp, utilizando Node.js e integrando a API do ChatGPT',
	)

	// Seção - Habilidades Técnicas
	addSection(
		doc,
		205,
		'Habilidades Técnicas',
		'Linguagens de Programação: JavaScript, TypeScript, Python\nFrameworks e Bibliotecas: React, React Native, Redux, Redux-Saga, WatermelonDB, TensorFlow.js\nFerramentas de Desenvolvimento: Git, Docker, Django REST Framework\nConceitos de IA: Fundamentos de machine learning e integração com APIs de inteligência artificial',
	)

	// Seção - Interesses Pessoais
	addSection(doc, 260, 'Interesses Pessoais', 'Paraquedismo, surf, viagens, exploração cultural')

	doc.save('Curriculo.pdf')
}
