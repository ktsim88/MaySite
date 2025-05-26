document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('rosterGrid')

    const render = list => {
        grid.innerHTML = ''
        
        list.forEach(p => {
            
            const col = document.createElement('div')
            col.className = 'col-6 col-lg-2'
            col.innerHTML = `
                <div class="card h-100 mb-3">
                <img src="${p.photo}" class="card-img-top" alt="${p.firstName} ${p.lastName}">
                    <div class="card-body text-center">
                        <h5 class="card-title mb-1">${p.firstName} ${p.lastName}</h5>
                        <div class="${p.position}">
                            ${p.position}
                        </div>
                        <p class="small text-muted mb-0">${p.rarity}</p>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${p.alt}Modal" onclick="learnMore()">
                            Learn More
                            </button>

                            <!-- Modal -->
                            <div class="modal modal-xl fade" id="${p.alt}Modal" tabindex="-1" aria-labelledby="cookieLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="cookieLabel">More About ${p.firstName} ${p.lastName}</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body" id="info-body">
                                    <div class="row">
                                        <div class="col-md-6 ms-auto">
                                            <img src="${p.topping}" class="card-img-top" id="cookieTopping" alt="${p.toppingDescription}">
                                            <div class="card-body">
                                                <p class="card-text" id="cookieToppingDescription">${p.toppingDescription}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-6 ms-auto">
                                            <p id="cookieType">${p.type}</p>
                                            <p id="cookieInfo">${p.info}</p>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
                
            `
            
            grid.appendChild(col)

        })
    }
    render(players)
    
})

// function learnMore() {
//     let cookieInfo = document.getElementById('cookieInfo')
//     let cookieLabel = document.getElementById('cookieLabel')
//     cookieInfo.textContent = `${players.info}`
//     cookieLabel.textContent = `More About ${players.firstName} ${players.lastName}`
//     console.log('it shows up :)')
    
// }