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
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${p.alt}Modal">
                            Learn More
                            </button>

                            <!-- Modal -->
                            <div class="modal fade" id="${p.alt}Modal" tabindex="-1" aria-labelledby="${p.alt}ModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="${p.alt}ModalLabel">More About ${p.firstName} ${p.lastName}</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <p>${p.info}</p>
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
const modal = document.getElementById(`${p.alt}Modal`)

            grid.appendChild(col)

        })
    }
    render(players)
})