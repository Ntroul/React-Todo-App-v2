export default function NavButton({children , click , active}) {
    return(
        <button onClick={click} className={`nav-button ${active ? "active" : ""}`}>{children}</button>
    )
}