AFRAME.registerComponent('car', {
    tick: function(){
        var rotation = this.el.getAttribute("rotation")
        rotation.y += 0.9
        if(rotation.x > 270) rotation.x = 0

        this.el.setAttribute("rotation", rotation)
        var position = this.el.getAttribute("position")

        // console.log(rotation)

    },
    update: function () {
        window.addEventListener("click", (e) => {
            var rotation = this.el.getAttribute("rotation")
            var position = this.el.getAttribute("position")

            rotation.y += 90
            // position.y += 0.5
            this.el.setAttribute("rotation", rotation)
            // this.el.setAttribute("position", position)

        })
        window.addEventListener("dblclick", (e) => {
            var rotation = this.el.getAttribute("rotation")
            var position = this.el.getAttribute("position")
            console.log(rotation.x)
           if(rotation.x === 270) position.y = 0
     
            
            rotation.x += 90
            if (rotation.x === 90 || rotation.x === 180) position.y = 1.3
            
            console.log(position)

            this.el.setAttribute("rotation", rotation)
            this.el.setAttribute("position", position)

        })
    }
})