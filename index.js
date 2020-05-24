const B_WIDTH = 700 / 30
const ARR_LENGTH = 30 * 18
const indexes = [...Array(ARR_LENGTH).keys()].map(x => ++x);
const shuffle = () => indexes.sort(() => Math.random() - 0.5);

let counter = 0
window.onload = () => {
    shuffle()
    let x, y
    for (let inx of indexes)
    {
        const block = document.createElement('div')
        block.className = 'block'
        y = Math.floor((inx - 1) / 30)
        x = (inx - 1) % 30 
        
        block.style.backgroundPositionX = `${ -x * B_WIDTH }px`
        block.style.backgroundPositionY = `${ -y * B_WIDTH }px`

        block.setAttribute('id', `id-${inx}`)
        document.querySelector('.container').appendChild(block)
    }

    const replaceDivs = () => {
        let isSorted = true
        for (let inx = 0; inx < ARR_LENGTH; inx++)
        {
            if (indexes[inx] > indexes[inx + 1]) {
                const parent = document.querySelector(".container")
                const first = document.querySelector(`#id-${ indexes[inx + 1] }`)
                const second = document.querySelector(`#id-${ indexes[inx] }`)
                
                parent.insertBefore(first, second)
                const a = indexes[inx + 1]
                indexes[inx + 1] = indexes[inx]
                indexes[inx] = a 
                isSorted = false
            }
        }
        if (isSorted) {
            clearInterval(timer)
        }
    }

    const timer = setInterval(replaceDivs, 60)
}