export default function NavButton({children , click}) {
    return(
        <button onClick={click}>{children}</button>
    )
}