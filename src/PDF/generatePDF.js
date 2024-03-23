import { jsPDF } from 'jspdf'
import { addCoverPage } from './InitialPage/addCoverPage'
import { addIntroductionPage } from './IntroductionPage/addIntroductionPage'

function generatePDF() {
	const doc = new jsPDF()

	addCoverPage(doc)
	addIntroductionPage(doc)

	// Adiciona rodapé com numeração de páginas
	const totalPages = doc.internal.getNumberOfPages()
	for (let i = 1; i <= totalPages; i++) {
		doc.setPage(i)
		doc.text(`Página ${i} de ${totalPages}`, 175, 283)
	}

	doc.save('Curriculo_Lucca.pdf')
}

export default generatePDF
