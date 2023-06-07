url = '/data.json'

function fetchData() {
    fetch(url) //fetch data from data.json
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            let summaryInfo = document.getElementsByClassName('summary-attributes')
            console.log(summaryInfo)

            summaryInfo[0].innerHTML = `<div class="summary-reaction">
            <img src="${data[0].icon}" alt="thunder">
            <p class="summary-reaction-tag">${data[0].category}</p>
            <p class="summary-scores">
              <span class="summary-total-score">${data[0].score}</span>
              <span class="summary-max-score"> / 100</span>
            </p>
          </div>
          <div class="summary-memory">
            <img src="${data[1].icon}" alt="brain">
            <p class="summary-memory-tag">${data[1].category}</p>
            <p class="summary-scores">
              <span class="summary-total-score">${data[1].score}</span>
              <span class="summary-max-score"> / 100</span>
            </p>
          </div>
          <div class="summary-verbal">
            <img src="${data[2].icon}" alt="speech balloon">
            <p class="summary-verbal-tag">${data[2].category}</p>
            <p class="summary-scores">
              <span class="summary-total-score">${data[2].score}</span>
              <span class="summary-max-score"> / 100</span>
            </p>
          </div>
          <div class="summary-visual">
            <img src="${data[3].icon}" alt="eye">
            <p class="summary-visual-tag">${data[3].category}</p>
            <p class="summary-scores">
              <span class="summary-total-score">${data[3].score}</span>
              <span class="summary-max-score"> / 100</span>
            </p>
          </div>`

        })
        .catch((error) => console.error(error))
}

fetchData()
