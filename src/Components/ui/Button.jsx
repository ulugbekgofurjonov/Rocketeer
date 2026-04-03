function Button({ children, onClick }) {
  return (
    <button 
      className="bg-[#024959] py-1 px-5 rounded-2xl 
                 hover:scale-105 hover:bg-[#0c7f99] 
                 transition-all duration-200"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button