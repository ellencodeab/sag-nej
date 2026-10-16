import './style.scss'

document.querySelector('#app').innerHTML = `
  <main>
    <h1>Säg nej!</h1>

    <p>Behöver du en ursäkt för att säga nej?</p>

    <button id="excuse-button" type="button">
      Ge mig en ursäkt
    </button>

   <p id="excuse-result" role="status" aria-live="polite">
      Din ursäkt kommer att visas här.
    </p>

    <section aria-labelledby="history-title">
      <h2 id="history-title">Historik</h2>
      <p>Här visas dina tidigare ursäkter.</p>
      <ul id="excuse-history"></ul>
    </section>
  </main>
`

const button = document.querySelector('#excuse-button')
const result = document.querySelector('#excuse-result')
const historyList = document.querySelector('#excuse-history')

const savedHistory = JSON.parse(
    localStorage.getItem('excuseHistory') || '[]'
)

savedHistory.forEach((excuse) => {
    const historyItem = document.createElement('li')
    historyItem.textContent = excuse
    historyList.append(historyItem)
})

button.addEventListener('click', async () => {
    result.textContent = 'Hämtar en ursäkt...'

    try {
        const response = await fetch('https://www.ohsomodern.org/naas-api/?count=3')

        if (!response.ok) {
            throw new Error('API kunde inte nås')
        }

        const excuses = await response.json()

        if (!Array.isArray(excuses) || excuses.length === 0) {
            throw new Error('Inga ursäkter hittades')
        }

        const randomIndex = Math.floor(Math.random() * excuses.length)
        result.textContent = excuses[randomIndex]
        
        const historyList = document.querySelector('#excuse-history')
        const historyItem = document.createElement('li')

        historyItem.textContent = excuses[randomIndex]
        historyList.prepend(historyItem)
        const savedHistory = JSON.parse(
            localStorage.getItem('excuseHistory') || '[]'
        )

        savedHistory.unshift(excuses[randomIndex])

        localStorage.setItem(
            'excuseHistory',
            JSON.stringify(savedHistory)
        )

    } catch (error) {
        result.textContent =
            'Tyvärr kunde vi inte hämta en ursäkt just nu. Försök igen senare.'
        console.error(error)
    }
})