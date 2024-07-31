export default function Input({
    type, 
    borderColor,
    textColor, 
    placeholder, 
    autocomplete, 
    required = false}:{
        type: string, 
        borderColor: string, 
        textColor: string, 
        placeholder: string, 
        autocomplete: string, 
        required?: boolean}) 
    {
    return(
        <input className={`w-full border-4 ${borderColor} font-bold ${textColor} text-xl rounded-xl p-4`} type={type} placeholder={placeholder} autoComplete={autocomplete} required={required}/>
    );
}