import image_lucca from '../../images/image_lucca.jpeg'

export function addCoverPage(doc) {
	// Dimensões originais da imagem
	const originalWidth = 1334
	const originalHeight = 750

	// Largura fixa ao adicionar ao PDF
	const fixedWidth = 40
	const adjustedHeight = (fixedWidth / originalWidth) * originalHeight

	// Defina a cor da borda para azul
	doc.setDrawColor(0, 0, 255)

	// Desenha um retângulo no tamanho total da página
	doc.rect(10, 10, 190, 277, 'S')

	const title = 'Lucca Carvalho Vilas Boas'
	const profession = 'Desenvolvedor de software'
	const introduction = 'Currículo desenvolvido com jsPDF, acesse para ver o projeto:'
	const linkedin = 'Linkedin: '

	doc.setFontSize(24)
	const titleWidth = doc.getTextWidth(title)
	const titleYPosition = 70
	doc.text(title, (210 - titleWidth) / 2, titleYPosition)

	doc.setFontSize(16)
	const professionWidth = doc.getTextWidth(profession)
	doc.text(profession, (210 - professionWidth) / 2, titleYPosition + 20)

	doc.setFontSize(10)
	const introductionWidth = doc.getTextWidth(introduction)
	doc.text(introduction, (190 - introductionWidth) / 2, titleYPosition + 35)

	doc.setFontSize(10)
	const linkedinWidth = doc.getTextWidth(linkedin)
	doc.text(linkedin, (195 - linkedinWidth) / 2, titleYPosition + 45)

	const githubLinkText = 'Meu GitHub'
	const githubURL = 'https://github.com/Luccacvb/jsPDF-Curriculo'
	const githubLinkPosition = (195 + introductionWidth) / 2
	doc.setTextColor(0, 0, 255)
	doc.text(githubLinkText, githubLinkPosition, titleYPosition + 35)
	doc.link(githubLinkPosition, titleYPosition + 30, doc.getTextWidth(githubLinkText), 5, {
		url: githubURL,
	})
	doc.setTextColor(0, 0, 0)

	const linkedinLinkText = 'Meu Linkedin'
	const linkedinURL = 'https://www.linkedin.com/in/lucca-vilas-boas-15181118a'
	const linkedinLinkPosition = (195 + linkedinWidth) / 2
	doc.setTextColor(0, 0, 255)
	doc.text(linkedinLinkText, linkedinLinkPosition, titleYPosition + 45)
	doc.link(linkedinLinkPosition, titleYPosition + 40, doc.getTextWidth(linkedinLinkText), 5, {
		url: linkedinURL,
	})
	doc.setTextColor(0, 0, 0)

	// Adiciona imagem centralizada e em cima do título
	const imageXPosition = (210 - fixedWidth) / 2
	const imageYPosition = titleYPosition - adjustedHeight - 20
	doc.addImage(image_lucca, 'JPEG', imageXPosition, imageYPosition, fixedWidth, adjustedHeight)
}
