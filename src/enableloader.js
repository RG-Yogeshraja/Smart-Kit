import load from './assets/images/dashboardimg/loadersimg.gif'

const Loaders = () => {
    return (
        <div className='' style={{
            position: "fixed", top: "45%", left: "47%", marginTop: "0px",
            marginLeft: "0px", zIndex: "999"
        }}>
            <img src={load} width="100"></img>
        </div>
    )
}
export default Loaders