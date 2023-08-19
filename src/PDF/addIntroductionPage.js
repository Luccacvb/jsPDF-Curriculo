export function addIntroductionPage(doc) {
	doc.addPage()

	doc.setDrawColor(0, 0, 255)

	doc.rect(10, 10, 190, 277, 'S')

	const introduction =
		'Em meados de 2021, meu irmão me ofereceu a oportunidade de iniciar minha jornada na programação, apresentando-me a um curso de lógica de programação, JavaScript e Python. Foi ali que descobri minha afinidade com JavaScript e decidi seguir meu caminho nessa linguagem, buscando aprimorar minhas habilidades no desenvolvimento front-end. Ao longo do ano seguinte, continuei a aprofundar meus conhecimentos em JavaScript, participando de cursos adicionais que aprimoraram minhas habilidades técnicas, e com isso finalmente conquistei a oportunidade de um estágio na empresa Kartado, onde tenho constantemente desenvolvido e aprimorado minhas habilidades em desenvolvimento front-end e mobile. Este estágio não apenas me permitiu expandir meu conhecimento técnico, mas também tem sido uma experiência valiosa para o meu crescimento pessoal e profissional. Estou entusiasmado com o futuro e comprometido em continuar a aprender e evoluir em minha carreira.'

	doc.setFillColor(48, 48, 48)

	doc.circle(20, 30.3, 1.2, 'F')

	const lines = doc.splitTextToSize(introduction, 170)
	const FirstLine = lines[0]
	doc.text(FirstLine, 23.3, 31.5)

	// Imprime o restante do texto a partir do início da página
	for (let i = 1; i < lines.length; i++) {
		const linesText = doc.splitTextToSize(introduction, 175)
		doc.text(linesText[i], 17, 31.5 + i * 7)
	}

	const interest = `Meus interesses de aprendizado são amplamente focados no desenvolvimento front-end e mobile, onde tenho conseguido me desenvolver e evoluir cada vez mais com o uso de JavaScript e React, a fim de solucionar problemas complexos. Tenho grande interesse na biblioteca Material-UI, que oferece uma vasta gama de recursos indispensáveis para qualquer projeto. Além disso, gosto de me aventurar em automações, como já demonstrei em um projeto no qual criei um programa para assistir a vídeos de 10 segundos e trazer um resumo desse vídeo com base no título, deduzindo assim o possível conteúdo do vídeo. Para este projeto, utilizei JavaScript e a biblioteca Puppeteer. Também me desafio com cálculos e gosto de criar PDFs através de código. O Git é outra ferramenta poderosa na qual tenho interesse e já estudei, realizando comandos complexos como o 'rebase' para redefinir o histórico de commits e o 'bisect' para encontrar bugs. No meu dia a dia, utilizo comandos como 'merge' e 'cherry-pick', e a compreensão do histórico de commits é essencial para me permitir buscar com facilidade um UUID necessário para continuar o desenvolvimento da minha branch.`

	doc.setFillColor(48, 48, 48)

	doc.circle(20, 106.3, 1.2, 'F')

	const interestLines = doc.splitTextToSize(interest, 170)
	const FirstInteresLine = interestLines[0]
	doc.text(FirstInteresLine, 23.3, 107.5)

	for (let i = 1; i < interestLines.length; i++) {
		doc.text(interestLines[i], 17, 107.5 + i * 7)
	}

	const objective = `Meus objetivos estão bem definidos tanto em termos pessoais quanto profissionais. No aspecto pessoal, gosto muito de saltar de paraquedas e almejo aprimorar minhas habilidades no esporte. Meu objetivo é alcançar um nível de proficiência que me permita viajar para diferentes locais e experimentar a emoção de saltar em diferentes cenários e condições.
	Em relação aos meus objetivos profissionais, estou empenhado em evoluir continuamente meus conhecimentos e habilidades em programação. Quero abraçar desafios mais complexos, mergulhar em novas tecnologias e, acima de tudo, criar projetos significativos e úteis. Meu objetivo é desenvolver soluções que possam auxiliar e facilitar o trabalho de outras pessoas, tornando suas vidas mais produtivas e menos estressantes. Estou comprometido em ser um profissional que faz a diferença, tanto para a minha equipe quanto para a comunidade em geral.`

	doc.setFillColor(48, 48, 48)

	doc.circle(20, 197.3, 1.2, 'F')

	const objectivetLines = doc.splitTextToSize(objective, 170)
	const FirstObjectiveLine = objectivetLines[0]
	doc.text(FirstObjectiveLine, 23.3, 198.5)

	for (let i = 1; i < objectivetLines.length; i++) {
		doc.text(objectivetLines[i], 17, 198.5 + i * 7)
	}
}
