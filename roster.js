document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('rosterGrid')
    
    const render = list => {
        grid.innerHTML = ''
        //define modal seperately
        const modal = document.createElement('div')
        //all the attributes
        modal.className = 'modal fade'
        modal.id = 'playerModal'
        modal.tabIndex = -1
        modal.setAttribute('aria-labelledby', 'cookieLabel')
        modal.setAttribute('aria-hidden', 'true')
        modal.innerHTML = `<!-- Modal -->
                            
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="cookieLabel">Cookie's Story</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body" id="info-body">
                                    <div class="row">
                                    <div id="cookieInfo"></div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn closeBtn" data-bs-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>`
        //adds the modal for each card
document.body.appendChild(modal)





        list.forEach((p,index) => {
            
            const col = document.createElement('div')
            col.className = 'col-6 col-lg-2 col-md-3 mb-3'
            col.innerHTML = `
                <div class="card h-100 mb-3 ${p.altRarity}Card">
                <img src="${p.photo}" class="card-img-top" alt="${p.firstName} ${p.lastName}">
                    <div class="card-body text-center">
                        <h5 class="card-title mb-1 p-2">${p.firstName} ${p.lastName}</h5>
                        <div class="${p.altRarity} rarity">
                            ${p.rarity}
                        </div>
                <div class="cookieType">${p.type}</div>
                        <p class="small mb-2 ${p.position} position my-2">${p.position}</p>
                            <button class="btn btn-sm btn-primary show-info-btn cardBtn" data-player-index="${index}" data-bs-toggle="modal" data-bs-target="#playerModal">
            More Info
          </button>

                    </div>
                </div>
                
            `
            
            grid.appendChild(col)

        })
    }
    
    render(players)
    grid.addEventListener('click', function (e) {
  if (e.target.classList.contains('show-info-btn')) {
    const index = e.target.getAttribute('data-player-index')
    const player = players[index]
    showPlayerModal(player)
  }
})

    

    
})

function showPlayerModal(player) {
    document.getElementById('cookieLabel').textContent = `${player.firstName} ${player.lastName}'s Story`
    document.getElementById('cookieInfo').textContent = `${player.info}`
}

