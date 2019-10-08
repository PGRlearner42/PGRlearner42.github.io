let color = document.querySelectorAll('[data-color]');
let button=document.getElementById('button')
let positive=document.getElementById('positive');
let negative=document.getElementById('negative');
let difference=document.getElementById('difference')
	let num=0;
	let num2=0;
	function increment(){
		num2++	
		return num2
	}
	function decrement(){
		num++
		return num
	}
function input(){
		let inputColor=['red','green','blue'];
		const alpha=inputColor[Math.floor(Math.random()*inputColor.length)];
		const beta=inputColor[Math.floor(Math.random()*inputColor.length)];
		const gamma=inputColor[Math.floor(Math.random()*inputColor.length)];
		const delta=inputColor[Math.floor(Math.random()*inputColor.length)];
		const rand=color[0].style.backgroundColor=alpha;
		const rand2=color[1].style.backgroundColor=beta;
		const rand3=color[2].style.backgroundColor=gamma;
		const rand4=color[3].style.backgroundColor=delta;
		if(rand==rand2&&rand2==rand3&&rand3==rand4){
			positive.innerHTML=increment()
		}else{
			negative.innerHTML=decrement()
		}
}
button.addEventListener('click',()=> input())
