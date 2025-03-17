//your JS code here. If required.
let text=document.getElementById('text')
let delay=document.getElementById('delay')
let btn=document.getElementById('btn')
let output=document.getElementById('output')

btn.addEventListener('click',()=>{
	handlePromise()
})

const promise1=()=>{
	return new Promise((resolve,reject)=>{
		output.innerHTML ='';
		const delayValue = Number(delay.value);
		setTimeout(()=>{
			output.innerHTML = text.value;
			resolve('promise1')
		},delay)
	})
}

async function handlePromise(){
	try {
		await promise1()
	} catch (error) {
		console.log('error',error)
	}
}