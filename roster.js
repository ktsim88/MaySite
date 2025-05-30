document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('rosterGrid')
    
    const render = list => {
        grid.innerHTML = ''
        
        list.forEach(p => {
            
            const col = document.createElement('div')
            col.className = 'col-6 col-lg-2'
            col.innerHTML = `
                <div class="card h-100 mb-3 ${p.altRarity}Card">
                <img src="${p.photo}" class="card-img-top" alt="${p.firstName} ${p.lastName}">
                    <div class="card-body text-center">
                        <h5 class="card-title mb-1">${p.firstName} ${p.lastName}</h5>
                        <div class="${p.altRarity} rarity">
                            ${p.rarity}
                        </div>
                <div class="cookieType">${p.type}</div>
                        <p class="small mb-2 ${p.position} position">${p.position}</p>
                            <button type="button" class="btn btn cardBtn" data-bs-toggle="modal" data-bs-target="#${p.alt}Modal" onclick="learnMore()">
                            Learn More
                            </button>


                            <!-- Modal -->
                            <div class="modal modal-xl fade" id="${p.alt}Modal" tabindex="-1" aria-labelledby="cookieLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="cookieLabel">${p.firstName} ${p.lastName}'s Story</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body" id="info-body">
                                    <div class="row">
                                    <div id="cookieInfo">${p.info}</div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn closeBtn" data-bs-dismiss="modal">Close</button>
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



