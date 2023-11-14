/*************************************************************************************************************************** */
// FUNCIONES  
//Función de validación de año
export function validateYear(year) {
	return isNaN(year) || year < 2020 || year >= 2030;
} 

// Función de validación de trimestre
export function validateTrimestre(trimestre) {
	const trivalues = ['Primer', 'Segundo', 'Tercero', 'Cuarto'];
	return !trivalues.some(value => trimestre.includes(value));
}
/*************************************************************************************************************************** */
