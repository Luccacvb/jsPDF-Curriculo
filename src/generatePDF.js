import { jsPDF } from 'jspdf'

function generatePDF() {
	const doc = new jsPDF()

	doc.setFontSize(24)
	doc.text('Seu Nome', 10, 10)

	doc.setFontSize(16)
	doc.text('Sua Profissão', 10, 30)

	doc.setFontSize(12)
	doc.text('Detalhes e experiência...', 10, 50)

	doc.save('Curriculo_Seunome.pdf')
}

export default generatePDF
