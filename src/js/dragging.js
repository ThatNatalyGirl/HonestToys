class App {

	static init() {

		App.toy = document.getElementsByClassName('toy')[0]

		App.toy.addEventListener("dragstart", App.dragstart)
		App.toy.addEventListener("dragend", App.dragend)

		const containers = document.getElementsByClassName('holder')

		for(const container of containers) {
			container.addEventListener("dragover", App.dragover)
			container.addEventListener("dragenter", App.dragenter)
			container.addEventListener("dragleave", App.dragleave)
			container.addEventListener("drop", App.drop)
		}
	}

	static dragstart() {
		this.className += " held"
	
		setTimeout(()=>this.className="invisible", 0)
	}

	static dragend() {
		this.className = "toy"
	}

	static dragover(e) {
		e.preventDefault()
	}

	static dragenter(e) {
		e.preventDefault()
		this.className += " hovered"
	}

	static dragleave() {
		this.className = "holder"
	}

	static drop() {
		this.className = "holder"
		this.append(App.toy)
	}

}

document.addEventListener("DOMContentLoaded", App.init)

//https://medium.com/quick-code/simple-javascript-drag-drop-d044d8c5bed5