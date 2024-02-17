import { Link } from "react-router-dom"

function Button({children, disabled, to,type, onClick}) {

 
  const base = "bg-yellow-400 text-sm uppercase font-semibold text-stone-800  inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed "

  const styles = {
    primary: base + " px-4 py-3 md:py-4 md:px-6",
    small: base + " py-2 px-4 md:px-5 md:py-2.5 text-xs",
    round:  base + " py-1 px-2.5 md:px-3.5 md:py-2 text-xs",
    secondary: "border-2 text-sm border-stone-300 uppercase font-semibold text-stone-400  inline-block tracking-wide rounded-full hover:bg-stone-300 hover:text-stone-800  focus:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:py-3.5 md:px-6",
  }

  if(to) return <Link to={to} className={styles[type]}>{children}</Link>
  
  if(onClick)
  return (
    <button onClick={onClick} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button
