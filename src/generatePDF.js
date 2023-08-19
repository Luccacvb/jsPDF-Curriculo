import { jsPDF } from 'jspdf'
import { addCoverPage } from './PDF/addCoverPage'
import { addIntroductionPage } from './PDF/addIntroductionPage'
import { addGraphPage } from './PDF/addGraphPage'

function generatePDF() {
	const doc = new jsPDF()

	addCoverPage(doc)
	addIntroductionPage(doc)
	addGraphPage(doc)

	// Adiciona rodapé com numeração de páginas
	const totalPages = doc.internal.getNumberOfPages()
	for (let i = 1; i <= totalPages; i++) {
		doc.setPage(i)
		doc.text(`Página ${i} de ${totalPages}`, 175, 283)
	}

	doc.save('Curriculo_Lucca.pdf')
}

export default generatePDF
