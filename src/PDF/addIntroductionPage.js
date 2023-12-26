export function addIntroductionPage(doc) {
	doc.addPage()

	doc.setDrawColor(0, 0, 255)

	doc.rect(10, 10, 190, 277, 'S')

	const introduction =
		'Em 2021 comecei meus estudos com programação, estudando logica com JS e Python, logo em seguida conquistei meu estagio desenvolvendo a parte do front com React, Redux, Redux-Saga, jsPdf, lodash e algumas outras bibliotecas. Aprimorando minha habilidades, conquistei o cargo de desenvolvedor de software atuando no front e no mobile. Mobile utilizamos, React, React Native, Redux, Redux-Saga, WatermelonDB entre outras. Também atuo no processo de realizar revisões de código de outros membros da equipe, escrever spec técnicas, e resolver bugs em conjunto ao time de suporte, quando necessário.'
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

	const interest =
		'Estou sempre em busca de novos conceitos e técnicas para aprimorar minhas habilidades. Venho explorando o mundo das IAs, estudando ferramentas como o TensorFlow.js. Também tenho conhecimento em comandos do git para facilitar meu desenvolvimento com outros membros. Não gosto de ficar com duvidas, então sempre estou me comunicando para entender 100% o que devo fazer e sempre em busca de conhecer a fundo o projeto em que estou atuando, acredito no trabalho em equipe, todos em busca do mesmo proposito e deixar o sistema cada vez mais robusto com qualidade '

	doc.setFillColor(48, 48, 48)

	doc.circle(20, 106.3, 1.2, 'F')

	const interestLines = doc.splitTextToSize(interest, 170)
	const FirstInteresLine = interestLines[0]
	doc.text(FirstInteresLine, 23.3, 107.5)

	for (let i = 1; i < interestLines.length; i++) {
		doc.text(interestLines[i], 17, 107.5 + i * 7)
	}

	const objective =
		'Tenho o objetivo profissional de evoluir tecnicamente, em busca de uma condição financeira melhor, para realizar meus objetivos pessoais que são viajar mais, conhecer novas culturas, e evoluir no esporte que pratico, que é o paraquedismo '
	doc.setFillColor(48, 48, 48)

	doc.circle(20, 197.3, 1.2, 'F')

	const objectivetLines = doc.splitTextToSize(objective, 170)
	const FirstObjectiveLine = objectivetLines[0]
	doc.text(FirstObjectiveLine, 23.3, 198.5)

	for (let i = 1; i < objectivetLines.length; i++) {
		doc.text(objectivetLines[i], 17, 198.5 + i * 7)
	}
}
