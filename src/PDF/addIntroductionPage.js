export function addIntroductionPage(doc) {
	// Adiciona uma nova página ao PDF
	doc.addPage()

	// Defina a cor da borda para azul
	doc.setDrawColor(0, 0, 255)

	// Desenha um retângulo no tamanho total da página
	doc.rect(10, 10, 190, 277, 'S')
}
