
export default function Wrapper({ children, bg }) {

    return (
        <div className={`bg color-${bg}`}>
            <div className="wrapper">
                {children}
            </div>
        </div>
    )


}