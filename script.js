//your JS code here. If required.
funtion ignoreWords(str){
	return str.replace(/^(a |an |the )/i, '').trim();
}
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
let sortedBands = bands.sort((a,b)=>{
	return ignoredWords(a).localeCompare(ignoredWords(b));
});
sortedBands.foreach((value,index)=>{
	console.log(value);
});