import { jsPDF } from 'jspdf'

function generatePDF() {
	const doc = new jsPDF()

	// Defina a cor do traço (borda) para azul
	doc.setDrawColor(0, 0, 255)

	// Desenha um retângulo no tamanho total da página
	doc.rect(10, 10, 190, 277, 'S')

	//Adiciona textos
	doc.setFontSize(24)
	doc.text('Lucca Carvalho Vilas Boas', 20, 30)

	doc.setFontSize(16)
	doc.text('Sua Profissão', 20, 50)

	doc.setFontSize(12)
	doc.text('Detalhes e experiência...', 20, 70)

	doc.save('Curriculo_Seunome.pdf')
}

export default generatePDF
