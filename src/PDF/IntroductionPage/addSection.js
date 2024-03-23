export function addSection(doc, startY, header, content) {
	doc.setFontSize(14)
	doc.setTextColor(40, 40, 40)
	doc.setFont('helvetica', 'bold')
	doc.text(header, 20, startY)

	doc.setFontSize(11)
	doc.setTextColor(60, 60, 60)
	doc.setFont('helvetica', 'normal')
	const topics = content.split('\n')
	let currentY = startY + 7

	topics.forEach(topic => {
		const lines = doc.splitTextToSize(`• ${topic}`, 170)
		lines.forEach(line => {
			doc.text(line, 20, currentY)
			currentY += 5
		})
		currentY += 3
	})
}
