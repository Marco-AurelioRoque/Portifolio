document.querySelector('#items')
.addEventListener('wheel', function (Event) {
        if (Event.deltaY > 0) {
            Event.target.scrolby(600, 0)
        } else {
            Event.target.scrolby(-600, 0)
        }
    })