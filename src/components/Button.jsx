const Button = ({label,iconURL,backgroundColor, textColor, borderColor}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
    ${backgroundColor ? backgroundColor : `bg-coral-red`} ${textColor ? textColor : `text-white`} ${borderColor ? borderColor : `border-coral-red`}
    `}>
        {label}
        {iconURL && <img 
            src={iconURL}
            alt="arrow-right"
            className="ml-2 rounded-full w-5 h-5"
        />}
    </button>
  )
}

export default Button